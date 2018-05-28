var favColor = 'mistyrose'

const pi = 3.14 // pi can not be reassigned when constant
console.log(pi)

const account = {
  balance: 1000 //the values of an object can be changed within a constant
}

account.balance = 100000
console.log(account.balance)


//Object.freeze(account)  stop the object from being changed.
//{balance: 1000}
//const NewAccount = freeze.account
