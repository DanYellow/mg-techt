import question_4, { computeString } from './question4';

const TITLE = 'Question 4';

describe(TITLE, () => {
  const immutableSource = ['jesse_eisenberg', 'rooney_mara', 'andrew_garfield', 'dustin_fitzsimons'];
  
  const source = [...immutableSource];
  const expectedResult = ["Jesse Eisenberg", "Rooney Mara", "Andrew Garfield", "Dustin Fitzsimons"]  ;

  it('Should return a version of source array with items computed', () => {
    expect(
      question_4(source)
    ).toEqual(expectedResult);
  });

  test(`If source array doesn't mutate`, () => {
    question_4(source);
    expect(
      source
    ).toEqual(immutableSource);
  });

  it(`Should return an empty array`, () => {
    expect(
      question_4(undefined)
    ).toHaveLength(0);
  });

  it(`Should capitalize first letter of each word`, () => {
    expect(
      computeString(source[0])
    ).toBe(expectedResult[0]);
  })
});
