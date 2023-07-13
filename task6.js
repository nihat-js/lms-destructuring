const employee = {
    name: 'Vitalii',
    surname: 'Klichko'
  }


const modifiedEmployee = {
    ...employee,
    age  : 24,
    salary : 400,
}

console.log(modifiedEmployee)
