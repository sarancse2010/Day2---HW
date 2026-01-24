function userProfile(name) {
    console.log("Hello, " + name + "!");
}
userProfile("Saranya");


// Task 2
const double = (num) => {
    return num * 2;
};
console.log(double(5));


// Task 3
setTimeout(function () {
    console.log("This message is delayed by 2 seconds");
}, 2000);


// Task 4
function getUserData(callback) {
    setTimeout(function () {
        callback();
    }, 3000);
}

getUserData(function () {
    console.log("Call Back Function");
});


