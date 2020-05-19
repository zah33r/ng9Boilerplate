import { LocalDateFormatterPipe } from './local-date-formatter.pipe';

describe('LocalDateFormatterPipe', () => {
  it('create an instance', () => {
    const pipe = new LocalDateFormatterPipe();
    expect(pipe).toBeTruthy();
  });
});
