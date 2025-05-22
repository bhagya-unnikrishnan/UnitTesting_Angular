import { StatusPipe } from './status.pipe';

describe('StatusPipe', () => {
  let pipe: StatusPipe;

  beforeEach(() => {
    pipe = new StatusPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should capitalize the input string', () => {
    expect(pipe.transform('test')).toBe('Test');
  });

  it('should add priority suffix when argument is true', () => {
    expect(pipe.transform('test', true)).toBe('Test (Priority)');
  });

  it('should not add priority suffix when argument is false', () => {
    expect(pipe.transform('test', false)).toBe('Test');
  });
});