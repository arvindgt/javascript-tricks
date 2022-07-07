
const P1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is P1 resolved!");
    }, 2000);
});

const P2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is P2 resolved!");
    }, 1000);
});

const P3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is P3 resolved!");
    }, 3000);
});

const P4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is P4 resolved!");
    }, 4000);
});

Promise.all([P1, P2, P3, P4]).then(result => {
    console.log("All Promises Resolved. The results are - ");
    console.log(result);
});