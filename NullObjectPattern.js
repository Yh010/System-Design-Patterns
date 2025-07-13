//normal code:
// class User {
//     constructor(id, name) {
//         this.id = id
//         this.name = name
//     }

//     hasAccess() {
//         return this.name === 'Bob'
//     }
// }

// const users = [
//     new User(1, 'Bob'),
//     new User(2, 'John')
// ]

// function getUser(id) {
//     return users.find(user => user.id === id)
// }


// function printUser(id) {
//     const user = getUser(id)
//     let name = 'Guest'
//     if (user != null && user.name != null) name = user.name

//     console.log('hello ' + name)

//     if (user != null && user.hasAccess != null && user.hasAccess()) {
//         console.log('You have access')
//     } else {
//         console.log('you are not allowed')
//     }
// }

// problems with the above code:
// 1) repeated null checks for checking if the user exists / has hasAccess
// 2) since we are repeating code, its very easy to commit mistakes, which can later become difficult to track (for eg in the spelling of user name)

//code with Null Object pattern:
class User {
    constructor(id, name) {
        this.id = id
        this.name = name
    }

    hasAccess() {
        return this.name === 'Bob'
    }
}

class NullUser {
    constructor() {
        this.id = -1
        this.name = 'Guest'
    }

    hasAccess() {
        return false
    }
}

const users = [
    new User(1, 'Bob'),
    new User(2, 'John')
]

function getUser(id) {
    const user = users.find(user => user.id === id)
    //changed
    if (user == null) {
        return new NullUser()
    } else {
        return user
    }
}


function printUser(id) {
    const user = getUser(id)

    //dont need these checks below
    // let name = 'Guest'
    // if (user != null && user.name != null) name = user.name

    console.log('hello ' + user.name)

    //same here
    // if (user != null && user.hasAccess != null && user.hasAccess()) {
    //     console.log('You have access')
    // } else {
    //     console.log('you are not allowed')
    // }

    if (user.hasAccess()) {
        console.log('You have access')
    } else {
        console.log('you are not allowed')
    }
}

//advantages:
//1) no need to do those null checks repeatedly