import { toPairs, fromPairs } from 'lodash/fp';
import { map, switchMap } from 'rxjs/operators';
import { combineLatest, Observable, of, throwError } from 'rxjs';


export const asyncOn = (obj, asyncMap) => {
  const asyncs = toPairs(asyncMap).map(([key, asyncOp]) =>
    (asyncOp as Function)(obj[key]).pipe(map(res => [key, res]))
  );
  return combineLatest(asyncs).pipe(
    map(fromPairs),
    map(asyncResults => ({...(obj as object), ...asyncResults}))
  );
};


export const moreInfoOn = (asyncMap) => (source) =>
  source.pipe(switchMap(obj => asyncOn(obj, asyncMap)));


export const eachMoreInfo = (asyncMap) => (source: Observable<any[]>) =>
  source.pipe(
    switchMap(objs =>
      Array.isArray(objs)
      ? combineLatest(objs.map(obj => asyncOn(obj, asyncMap)))
      : throwError(`manyMore: got ${objs} where Array was expected`)
    )
  );
