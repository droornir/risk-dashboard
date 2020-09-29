import { OrderByPipe } from './order-by.pipe';


describe('OrderByPipe', () => {
  let pipe: OrderByPipe;
  beforeEach(() => {
    pipe = new OrderByPipe();
  });

  it('should create a order-by-pipe', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform orderBy', () => {
    const unsordedValues = [{ order: 1, value: 'second' }, { order: 0, value: 'first' }];
    const key = 'order';
    const sortedValues = pipe.transform(unsordedValues, key)[0];
    expect(sortedValues[0].value).toBe('first');
    expect(sortedValues[1].value).toBe('second');
  });
});
