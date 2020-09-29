import { ParseAndCapitalize } from './parse-and-capitalize.pipe';


describe('OrderByPipe', () => {
  let pipe: ParseAndCapitalize;
  beforeEach(() => {
    pipe = new ParseAndCapitalize();
  });

  it('should create a parsing pipe', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform parseAndCapitalize', () => {
    const rawText = 'PaskalCase';
    const parsedText = pipe.transform(rawText);
    expect(parsedText).toBe('Paskal Case');
  });
});

