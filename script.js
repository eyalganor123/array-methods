'use strict';
const arrayElement = document.getElementById('array');
const stringArrayElement = document.getElementById('stringArray');
const objArrayElement = document.getElementById('objArr');
const output = document.getElementById('output');


const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const stringArr = ['Israel', 'Japan', 'Mexico', 'Brazil', 'Honduras', 'Singapore', 'Greece'];
const objArr = [
    { name: 'Eyal', lastName: 'Ganor', age: 50, gender: 'M' },
    { name: 'Dudu', lastName: 'Kochav', age: 14, gender: 'M' },
    { name: 'Pnina', lastName: 'Blum', age: 83, gender: 'F' },
    { name: 'Leah', lastName: 'Shabat', age: 27, gender: 'F' },
    { name: 'Simon', lastName: 'Garfunkel', age: 150, gender: 'M' }]

arrayElement.innerText = `[${arr}]`;
stringArrayElement.innerText = `[${stringArr}]`;
objArrayElement.innerText = JSON.stringify(objArr, null, 1);

function reverse(arr) {
    arr.reverse();
    arrayElement.innerText = `[${arr}]`;
}

function removeLast(arr) {
    arr.pop();
    arrayElement.innerText = `[${arr}]`;

}

function removeFirst(arr) {
    arr.shift();
    arrayElement.innerText = `[${arr}]`;

}

function sortStrings(arr) {
    arr.sort();
    stringArrayElement.innerText = `[${arr}]`;
}

function shuffle(arr) {
    let currentIndex = arr.length, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [arr[currentIndex], arr[randomIndex]] = [
            arr[randomIndex], arr[currentIndex]];
    }
    stringArrayElement.innerText = `[${arr}]`;
}
function findLongest(arr) {
    var longest = arr.reduce(
        function (a, b) {
            return a.length > b.length ? a : b;
        }
    );
    stringArrayElement.innerText = longest;
}

function findFemales(arr) {
    output.innerText = '';
    const females = arr.filter((element) => {
        return element.gender === 'F';
    })
    females.forEach((female) => {
        let li = document.createElement('li');
        li.innerText = `${female.name} ${female.lastName}`
        output.appendChild(li);
    });
}

function findOldest(arr) {
    let oldest = 0;
    let index;
    arr.forEach(person => {
        if (person.age > oldest) {
            oldest = person.age;
            index = arr.indexOf(person)
        }
    });
    output.innerText = '';
    output.innerText = `${arr[index].name} ${arr[index].lastName}`
}

function compareLastNames(a, b) {
    if (a.lastName < b.lastName) {
        return -1;
    }
    if (a.lastName > b.lastName) {
        return 1;
    }
    return 0;
}

function sortByLastName(arr) {
    arr.sort(compareLastNames);
    output.innerText = '';
    objArrayElement.innerText = JSON.stringify(arr, null, 1);
}
