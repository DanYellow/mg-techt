import 'whatwg-fetch'
import faker from 'faker'

class FakerManager {
  static getTransactions(params) {
    return Array.apply(null, { length: 20 }).map(() => {
      let transaction = faker.helpers.createTransaction()
      transaction.recipient = faker.helpers.userCard()
      transaction.uuid = faker.random.uuid()

      return transaction
    })
  }
}

export default FakerManager
