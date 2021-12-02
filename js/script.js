/*
L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49
Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro
*/

const buttonPlay = document.getElementById('play');
let containerGrid = document.getElementById('grid');

//click
buttonPlay.addEventListener('click', function () {
    grid.innerHTML = '';
    const level = document.getElementById('level').value;

    let row = 0;
    let col = 0;

    if (level == 'easy') {
        row = 10;
        col = 10;
    } else if (level == 'intermediate') {
        row = 9;
        col = 9;
    } else if (level == 'difficult') {
        row = 7;
        col = 7;
    }

    /*
    //calcolare la  grandezza della griglia e i numeri random da inserire dentro
    let numberSquare = row * col;
    //creare i quadrati a seconda del numero di righe e colonne
    for (let index = 0; index < numberSquare; index++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `calc(100% / ${col})`;
        square.style.height = `calc(100% / ${row})`;
        containerGrid.append(square);
        //inserire il numero crescente nei quadrati
        square.append(index + 1);
        //al click del quadrato, si deve colorare d'azzurro
        square.addEventListener('click', function () {
            this.classList.add('active');
        })
    }*/
})