import { StatusPipe } from './status.pipe';

describe('StatusPipe', () => {
  let pipe: StatusPipe;

  beforeEach(() => {
    pipe = new StatusPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });
});