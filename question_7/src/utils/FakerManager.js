import 'whatwg-fetch'
import faker from 'faker'

class FakerManager {
  static getTransactions() {
    return Array.apply(null, { length: 20 }).map(() => {
      const transaction = faker.helpers.createTransaction()
      transaction.recipient = faker.helpers.userCard()
      transaction.uuid = faker.random.uuid()

      return transaction
    })
  }
}

export default FakerManager
