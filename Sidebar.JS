const sidebar = document.getElementById('sidebar');
const btnLibrary = document.getElementById('library');
const book = document.getElementById('icon');
const body = document.getElementById('body');
const btnBrowser = document.getElementById('browser');



let short = false

function libraryEfects() {

    sidebar.classList.toggle('short');
    btnLibrary.classList.toggle('short')
    if (!short) {

        btnLibrary.textContent = '🕮'

        short = true

    } else {

        btnLibrary.textContent = 'Your library'


        short = false
    }

}


btnLibrary.addEventListener('click', libraryEfects)
let inputOn = false


function browserInput() {
    const input = document.createElement('input');
    input.placeholder = 'Type to apply filters';
    input.className = 'input-normal';
    if (!inputOn) {
        btnBrowser.appendChild(input);
        inputOn = true
    }

}



btnBrowser.addEventListener('click', browserInput)
