import assert from 'assert'
import Ganache from 'ganache'
import Web3 from 'web3'

const web3 = new Web3(Ganache.provider())

class Car {
  park() {
    return 'stopped'
  }

  drive() {
    return 'vroom'
  }
}

describe('Car Class', () => {

  it('can park', () => {
    const car = new Car()
    assert.equal(car.park(), 'stopped')
  })

  it('can drive', () => {
    const car = new Car()
    assert.equal(car.drive(), 'vroom')
  })
})