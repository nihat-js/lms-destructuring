const user1 = {
    name: "John",
    years: 30
};

const user2 = {
    name: user1.name,
    age: user1.years,
    isAdmin: user1.isAdmin || false
}


console.log(user2)