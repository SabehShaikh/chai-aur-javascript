// fetch('https://something.com').then().catch().finally()

// creation of promise
const promiseOne = new Promise((resolve, reject) => {
    // Do an async task
    // DB Calls, Cryptographhy, network
    setTimeout(() => {
        console.log("Asynch task is complete");
        resolve()
    }, 1000)
})

// pehle task complete hua then resolve mei aya..
promiseOne.then(() => {
    console.log("promise consumed");
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000)
}).then(() => {
    console.log("Async 2 resolved");
})

// pass data from resolve to .then
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "chai", email: "chai@chaiaurcode.com" })
    }, 1000)
})

promiseThree.then((user) => {
    console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {

    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "sabeh", password: "123" })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

// chaining
promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch((err) => {
    console.log(err); // it will run if error = true
}).finally(() => {
    console.log("The promise is either resolved or rejected");
})

// new approach to consume
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

const consumePromiseFive = async () => {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};
consumePromiseFive()

// JSON KRTE WAQT BHI AWAIT LGEGAA
// const getAllUsers = async () => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     }
//     catch (error) {
//         console.log("error-->", error);
//     }
// }

// getAllUsers()

// Direct Fetch 
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    })