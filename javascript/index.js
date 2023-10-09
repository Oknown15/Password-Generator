const passwords = document.getElementById("passwordBtn");
const passwordBox = document.getElementById("password");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const specChars = "@#$%&*";
const numbers = "0123456789";

const allChars =  lowerCase +specChars + numbers;

passwords.addEventListener('click', function() {
    //set the maximum length of the string to be displayed
    const length = 13;

    let password = "";
    //picks random numbers from the selected variable
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += specChars[Math.floor(Math.random() * specChars.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];

    while(length > password.length){
    password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value  = password;



});


const passwords1 = document.getElementById("passcodeBtn");
const passwordBox1 = document.getElementById("passcode");
const numbers4 = "0123456789";
const numbers3 = "0123456789";
const numbers2 = "0123456789*";
const numbers1 = "0123456789";

const allChars1 =  lowerCase +specChars + numbers;

passwords1.addEventListener('click', function() {
    const length = 4;

    let passcode = "";
    //picks random numbers from the selected variable
    passcode += numbers4[Math.floor(Math.random() * numbers4.length)];
    passcode += numbers3[Math.floor(Math.random() * numbers3.length)];
    passcode += numbers2[Math.floor(Math.random() * numbers2.length)];
    passcode += numbers1[Math.floor(Math.random() * numbers1.length)];


passwordBox1.value = passcode;


});

function copy() {
    document.getElementById("copy").style.display = "none"
    document.getElementById("pasted").style.display = "block"
    document.getElementById("pasted").style.color = "blue"
    passwordBox.select();
    try {
        document.execCommand("copy");
        console.log(passwordBox);
    } catch (err) {
        console.log("unable to copy");
    }
}

function copy1() {
    document.getElementById("copy1").style.display = "none"
    document.getElementById("pasted1").style.display = "block"
    document.getElementById("pasted1").style.color = "blue"
    passwordBox1.select();
    try {
        document.execCommand("copy");
        console.log(passwordBox1);
    } catch (error) {
        console.log("unable to copy");
    }
}