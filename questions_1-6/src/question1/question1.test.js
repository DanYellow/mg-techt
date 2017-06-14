import question_1 from './question1';

const TITLE = 'Question 1';

describe(TITLE, () => {
  const immutableSource = [180303, 353, 'Delete Me', 561, 684212];

  const srcArray = [...immutableSource]; // Creates a deep copy of immutableSource array
  const expectedResult = [180303, 353, 561, 684212];
  
  it(`Should remove 'Delete Me' from array`, () => {
    expect(
      question_1('Delete Me', srcArray)
    ).toEqual(expectedResult);
  });

  test(`If source array doesn't mutate`, () => {
    question_1('Delete Me', srcArray)
    expect(
      srcArray
    ).toEqual(srcArray);
  });

  it(`Should return an empty array`, () => {
    expect(
      question_1('Delete Me')
    ).toHaveLength(0);
  });

  it(`Should return source array`, () => {
    expect(
      question_1(undefined, srcArray)
    ).toEqual(srcArray);
  });

  it(`Should remove object in the array`, () => {
    const srcArray = [{hello: 'world'}, 45, 23, 67, 'hello'];

    expect(
      question_1({hello: 'world'}, srcArray)
    ).toEqual([45, 23, 67, 'hello']);
  });

});
