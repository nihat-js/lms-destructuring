const characters = [
    {
        name: "Elena",
        lastName: "Gilbert",
        age: 17,
        gender: "woman",
        status: "human"
    },
    {
        name: "Caroline",
        lastName: "Forbes",
        age: 17,
        gender: "woman",
        status: "human"
    },
    {
        name: "Alaric",
        lastName: "Saltzman",
        age: 31,
        gender: "man",
        status: "human"
    },
    {
        name: "Damon",
        lastName: "Salvatore",
        age: 156,
        gender: "man",
        status: "vampire"
    },
    {
        name: "Rebekah",
        lastName: "Mikaelson",
        age: 1089,
        gender: "woman",
        status: "vampire"
    },
    {
        name: "Klaus",
        lastName: "Mikaelson",
        age: 1093,
        gender: "man",
        status: "vampire"
    }
];

let charactersShortInfo = []

characters.forEach((c) => {
    charactersShortInfo = [ ...charactersShortInfo , {name : c.name , surname : c.lastName , age : c.age }]
})

console.log(charactersShortInfo);