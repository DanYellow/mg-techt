import FakerManager from './FakerManager'

describe('FakerManager', () => {
  it('Should have 20 fake entries', () => {
    expect(FakerManager.getTransactions()).toHaveLength(20)
  })
})
