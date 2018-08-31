'use strict'

const { test, trait, before } = use('Test/Suite')('Example')
trait('DatabaseTransactions')

const Database = use('Database')

before(async () => {
  await Database.from('users').insert({
    username: 'bob',
    email: 'bob@mail.com',
    password: 'secret',
  })
})

test('make sure 2 + 2 is 4', async ({ assert }) => {
  const users = await Database.raw('SELECT * FROM users')
  console.log(users)
  // const users = await Database.select('*').from('users')
})
