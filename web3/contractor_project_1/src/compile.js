import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
import solc from 'solc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const inboxPath = path.resolve(__dirname, '..', './contracts', 'inbox.sol')
const source = fs.readFileSync(inboxPath, 'utf-8')

export default solc.compile(source, 1).contracts[':Inbox']