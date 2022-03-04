// let age = prompt("enter age");

// if (parseInt(age) < 5) {
//     console.log("free");
// }
// else if (parseInt(age) < 10) {
//     console.log("$10");
// }
// else if (parseInt(age) < 65) {
//     console.log("$20");
// }

// else if (parseInt(age) > 65) {
//     console.log("$10");
// }

// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

// //YOU CODE GOES HERE:
// const rainBow = document.querySelectorAll('span');

// for (let i = 0; i < 7; i++) {
//     rainBow[i].style.color = colors[i];
// }




// const praca = document.querySelectorAll('li');
// for (let i = 0; i < 7; i++) {
//     praca[i].classList.toggle('highlight');
// }


const container = document.querySelector('#container');
const URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const poke = document.createElement('img');
    poke.src = `${URL}${i}.png`;
    pokemon.appendChild(poke);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}