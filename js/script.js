/*
Consegna
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.
*/

//prendere il pulsante Play dal DOM:

const buttonPlay = document.getElementById('play');
let containerGrid = document.getElementById('grid');

buttonPlay.addEventListener('click', function () {
    grid.innerHTML = '';
    let level = document.getElementById('level').value;
    console.log(level);
    let row = 0;
    let col = 0;
    let numbers = [];
    let blackListNumbers = [];


    //a seconda della difficoltà selezionata cambiare collone, righe e numeri:
    switch (level) {
        case 'easy':
            row = 10;
            col = 10;
            blackListNumbers = getRandomIntInclusive(1, 100);
            console.log(blackListNumbers);
            break;
        case 'intermediate':
            row = 9;
            col = 9;
            blackListNumbers = getRandomIntInclusive(1, 100);
            console.log(blackListNumbers);
            break;
        case 'difficult':
            row = 7;
            col = 7;
            blackListNumbers = getRandomIntInclusive(1, 49);
            console.log(blackListNumbers);
            break;
    }

    //calcolare la grandezza della griglia 
    let numberSquare = row * col;

    for (let index = 0; index < numberSquare; index++) {

        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `calc(100% / ${col})`;
        square.style.height = `calc(100% / ${row})`;

        containerGrid.append(square);
        numbers.push(index + 1);

        square.append(numbers[index]);

        //se dentro ai quadrati c'è un numero che corrisponde all'array della blacklist, aggiungo la classe blacklist
        if (blackListNumbers.includes(parseInt(square.innerText))) {
            square.classList.add('black-list');
        }

        square.addEventListener('click', function () {

         if (square.classList.contains('black-list')) {

         let element = document.querySelectorAll('.black-list');
            for (let index = 0; index < element.length; index++) {
                    element[index].classList.add('active-red');
            }
          let h4 = `
            <div class="lost"> 
            <h3>Cavolo hai perso...altra partita?</h3>
            <button class="btn-blue" type="submit" onClick="refreshPage()">Gioca ancora</button>
            </div>`;
        setTimeout(function () {
                grid.innerHTML += h4;
                }, 800);
            } else { 
                this.classList.add('active');
            }
        })
    }
})

//giocare di nuovo
function refreshPage() {
    window.location.reload();
}

//numeri random dentro la backlist
function getRandomIntInclusive(min, max) {

let blackListNumbers = [];

 for (let index = 0; index < 16; index++) {
        min = Math.ceil(min);
        max = Math.floor(max);
        let element = blackListNumbers[index];
        element = Math.floor(Math.random() * (max - min + 1) + min);

       while (blackListNumbers.includes(element)) {
            element = Math.floor(Math.random() * (max - min + 1) + min);
        }
        blackListNumbers.push(element);

    }
    return blackListNumbers;
}