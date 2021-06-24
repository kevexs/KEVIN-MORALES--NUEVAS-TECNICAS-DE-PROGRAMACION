const data = require('./data.json')

//console.log(data);

var modifiedData = data.map((person) =>{
    person.first_name = person.first_name.toUpperCase()
    return person
})

var filterResult =modifiedData.fliter((person) => person.id === 3)

//consola.log(modifiedData)
console.log(filterResult)
