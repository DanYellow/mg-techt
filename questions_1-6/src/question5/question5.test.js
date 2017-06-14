import question_5 from './question5';

const TITLE = 'Question 5';

describe(TITLE, () => {
  it('Should pass the test', () => {
    const source = [
      { city: "Joliette", province: "QC" },
      { city: "Sudbury", province: "ON" },
      { city: "Campbell River", province: "BC"}
    ];

    expect(
      question_5('province', source)
    ).toBeTruthy();
  });

  it('Should not pass the test (Missing key to find for one item)', () => {
    const source = [
      { city: "Joliette"},
      { city: "Sudbury", province: "ON" },
      { city: "Campbell River", province: "BC"}
    ];

    expect(
      question_5('province', source)
    ).toBeFalsy();
  });

  it('Should not pass the test (Number as first arg)', () => {
    const source = [
      { city: "Joliette"},
      { city: "Sudbury", province: "ON" },
      { city: "Campbell River", province: "BC"}
    ];

    expect(
      question_5(45, source)
    ).toBeFalsy();
  });

  it('Should not pass the test (Not an array of objects)', () => {
    const source = [
      { city: "Joliette", province: "QC" },
      42,
      { city: "Campbell River", province: "BC"}
    ];

    expect(
      question_5('province', source)
    ).toBeFalsy();
  });

  it('Should not pass the test (Missing first arg)', () => {
    const source = [
      { city: "Joliette"},
      { city: "Sudbury", province: "ON" },
      { city: "Campbell River", province: "BC"}
    ];

    expect(
      question_5(undefined, source)
    ).toBeFalsy();
  });
});
