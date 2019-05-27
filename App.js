const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('h2');
    p.style.color = 'red';
    p.style.fontSize = '50px';
}

// clearing
console.clear();

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string!', '💩');

// Styled
console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue')

// warning!
console.warn('OH NOOO');

// Error :|
console.error('Shit!');

// Info
console.info('Crocodiles eat 3-4 people per year');

// // Testing
const p = document.querySelector('h2');

console.assert(p.classList.contains('ouch'), 'That is wrong!');

// // Viewing DOM Elements
console.log(p);
console.dir(p);

// // Grouping together
dogs.forEach(dog => {
    console.groupCollapsed(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old`);
    console.groupEnd(`${dog.name}`);
});

// // counting

console.count('Abe');
console.count('Abe');
console.count('David');
console.count('David');
console.count('Abe');
console.count('David');
console.count('Abe');
console.count('David');
console.count('David');
console.count('David');
console.count('David');
console.count('David');

// // timing
console.time('fetching data');
fetch('https://api.github.com/users/ibrahim-mohamed1')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    });

console.table(dogs);