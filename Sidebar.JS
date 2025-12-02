const sidebar = document.getElementById('sidebar');
const btnLibrary = document.getElementById('library');
const book = document.getElementById('icon');
const body = document.getElementById('body');
const btnBrowser = document.getElementById('browser');
const sidebarContainer = document.getElementById('sidebar-container');
const content = document.getElementById('content');
const audio = document.getElementById('audio');
const images = document.getElementById('image');
const h3Id = document.getElementById('h3')
const paragraph = document.getElementById('paragraph')
const container = document.getElementById('container')


let playlist = [
{
    nombre: 'Your Likes',
    img: '/assets/img/yourlikes.jpg',
    type: 'Playlist',
    artist: '711 songs'
},    
{
    nombre: 'Callaita',
    img: '/assets/img/callaita.jpg',
    link: '/assets/music/Callaita.mp3',
    type: 'Album',
    artist: 'Bad Bunny'
},
{
    nombre: 'Columbia',
    img: '/assets/img/columbia.jpg',
    link: '/assets/music/Columbia.mp3',
    type: 'Sencillo',
    artist: 'Quevedo'
},
{
    nombre: 'Danzakuduro',
    img: '/assets/img/danzakuduro.jpg',
    link: '/assets/music/Danzakuduro.mp3',
    type: 'Album',
    artist: 'Don Omar'
},
{
    nombre: 'Deportivo',
    img: '/assets/img/deportivo.jpg',
    link: '/assets/music/Deportivo.mp3',
    type: 'Sencillo',
    artist: 'Anuel AA y Blessed'
},
{
    nombre: 'Verte ir',
    img: '/assets/img/verte-ir.jpg',
    link: '/assets/music/Verte-ir.mp3',
    type: 'Sencillo',
    artist: 'Anuel AA y Mabo Kingz'  
}
];

let short = false

images.addEventListener('mouseenter', function(){


})

function libraryEfects(list) {

    sidebar.classList.toggle('short');
    btnLibrary.classList.toggle('short');


    if (!short) {

        btnLibrary.textContent = '🕮';

        short = true;

    } else {

        btnLibrary.textContent = 'Your library';


        short = false;
    }

}


btnLibrary.addEventListener('click', libraryEfects);




function playlistsGenerator(params) {
    playlist.forEach(n =>{
        
        const  {nombre, img, type, artist, link} = n;
        
        const image = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const div = document.createElement('div');
        const div2 = document.createElement('div');
        
        image.src = img;
        h3.textContent = nombre
        h3.className = 'h3'
        p.textContent = `${type} ● ${artist}`
        div.className = 'container'
        div2.className = 'content'
        
        sidebarContainer.appendChild(div);
        div.appendChild(image);
        div.appendChild(div2);
        div2.appendChild(h3);
        div2.appendChild(p);

        div.addEventListener('click', function(){
        audio.src = link;
        audio.play();
        })
    })
    
};

let inputOn = false

playlistsGenerator();

btnBrowser.addEventListener('click', browserInput);


function browserInput() {
    const input = document.createElement('input');
    input.placeholder = 'Type to apply filters';
    input.className = 'input-normal';

    if (inputOn) {
        return;
    } else {
        btnBrowser.appendChild(input);
        inputOn = true
    }



 input.addEventListener('input', function () {
    const text = input.value.trim().toLowerCase();

    if (text === '') {
        sidebarContainer.innerHTML = '';
        playlistsGenerator();
        return;
    }

    const resultados = playlist.filter(song => {
        const nombre = song.nombre.toLowerCase();
        const artista = song.artist.toLowerCase();
        const tipo = song.type.toLowerCase();

        return (nombre.includes(text) || artista.includes(text) || tipo.includes(text));
    });
    sidebarContainer.innerHTML = '';

    if (resultados.length === 0) {
        const msg = document.createElement('p');
        msg.textContent = 'No matching results';
        msg.style.color = 'gray';
        msg.style.margin = '20px';
        sidebarContainer.appendChild(msg);
        return;
    }

    resultados.forEach(song => {
        const {nombre, img, link, type, artist} = song;

        const image = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const div = document.createElement('div');
        const div2 = document.createElement('div');

        image.src = img;
        h3.textContent = nombre;
        p.textContent = `${type} ● ${artist}`;

        div.className = 'container';
        div2.className = 'content';
        h3.className = 'h3';
        div2.className = 'content';

        
        sidebarContainer.appendChild(div);
        div.appendChild(image);
        div.appendChild(div2);
        div2.appendChild(h3);
        div2.appendChild(p);

        div.addEventListener('click', function(){
            audio.src = link;
            audio.play();
        })
    });
});

}
