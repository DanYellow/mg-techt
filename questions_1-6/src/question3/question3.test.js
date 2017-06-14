import question_3 from './question3';

const TITLE = 'Question 3';

describe(TITLE, () => {
  const immutableSource = [180303, 353, 46543, 561, 684212];
  
  const source = [...immutableSource];
  const expectedResult = [353, 561, 46543, 180303, 684212];

  it('Should return a sorted version of source array', () => {
    expect(
      question_3(source)
    ).toEqual(expectedResult);
  });

  test(`If source array doesn't mutate`, () => {
    question_3(source);
    expect(
      source
    ).toEqual(immutableSource);
  });

  it(`Should return an empty array`, () => {
    expect(
      question_3(undefined)
    ).toHaveLength(0);
  });
});
