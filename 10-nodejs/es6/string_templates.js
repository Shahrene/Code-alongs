function greeting(name = 'dt') {
  return `hello ${ name }`  //string template
}


function greet(person) {
//return person.firstname + ' ' + person.lastname
return `${person.firstname} ${person.lastname}`
}

console.log(greet({ firstname: 'mike', lastname : 'goodwin'}))
