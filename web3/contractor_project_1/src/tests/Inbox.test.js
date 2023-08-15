import assert from 'assert'
import Ganache from 'ganache'
import Web3 from 'web3'
import Inbox from '../compile.js'

const web3 = new Web3(Ganache.provider())

let fetchAccounts;
let inbox;

const api = Inbox.interface;
const bytecode = Inbox.bytecode;

beforeEach(async() => {
  // Get a list of all accounts
  try {
    fetchAccounts = await web3.eth.getAccounts();
    inbox = await new web3
                        .eth
                        .Contract(JSON.parse(api))
                        .deploy({data: bytecode, arguments: ['Hi there!']})
                        .send({ from: fetchAccounts[0], gas: '1000000' })
  } catch ( err ) {
    console.log(err)
  }
  // Use one of those accounts to deploy the contract
})

describe('Inbox', () => {
  it('deploys a contract', () => {
    console.log(inbox)
  })
})