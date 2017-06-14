import question_2 from './question2';

const TITLE = 'Question 2';

describe(TITLE, () => {
  const immutableSource = ['Martin', 'Pangloss', 'Candide', 'Cacambo', 'Cunegonde', 'Farmer'];
  
  const source = [...immutableSource];
  const expectedResult = ['Cacambo', 'Candide', 'Cunegonde', 'Farmer', 'Martin', 'Pangloss'];
  
  it('Should return a sorted version of source array', () => {
    expect(
      question_2(source)
    ).toEqual(expectedResult);
  });

  test(`If source array doesn't mutate`, () => {
    question_2(source);
    expect(
      source
    ).toEqual(immutableSource);
  });

  it(`Should return an empty array`, () => {
    expect(
      question_2(undefined)
    ).toHaveLength(0);
  });
});
