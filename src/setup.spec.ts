import t from 'assert'
import fs from 'fs'

import { setup } from './setup';

test('create folder if not exist', () => {
  t.strictEqual(fs.existsSync('.x'), false)
  setup({ PROGRESS_FOLDER: '.x' })
  fs.rmdirSync('.x')
})

test('ok if folder already existed', () => {
  fs.mkdirSync('.exist')
  setup({ PROGRESS_FOLDER: '.exist' })
  fs.rmdirSync('.exist')
})
