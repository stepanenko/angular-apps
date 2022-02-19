import { greet } from './greet';

describe('greet', () => {
  it('should include a name in the output', () => {
    expect(greet('Sergio')).toContain('Sergio');
  });
});
