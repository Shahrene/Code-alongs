//classes

//animal name, species, toys,

class Animal {

  constructor(name = 'happy') { //initialize, constructor is a function
    this.name = name // this refers to object like 'self' in ruby
  }

  getName() {
    return this.name.toUpperCase()
  }
}

var a1 = new Animal()
var a2 = new Animal('codebusters')

console.log(a1.name)
console.log(a2.getName())
