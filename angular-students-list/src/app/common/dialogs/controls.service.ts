import { Injectable } from '@angular/core';
import { get, set, map, reduce } from 'lodash/fp';
import { Validators } from '@angular/forms';

@Injectable()
export class ControlsService {

  makeControl(initData) {
    return (path, ...validators) => {
      const initValue = get(path, initData);
      return set(path, [initValue, validators], {});
    };
  }

  makeRequiredControls(initData, names) {
    const controls = map(this.makeRequired(initData), names);
    return reduce((c, acc) => ({...acc, ...c}), {}, controls);
  }

  makeRequired(initData) {
    return (path) => {
      return this.makeControl(initData)(path, Validators.required);
    };
  }
}
