const sidebar = document.getElementById('sidebar');
const audio = document.getElementById('audio');
const sidebarContainer = document.getElementById('sidebar-container');
const btnLibrary = document.getElementById('library');
const btnBrowser = document.getElementById('browser');
const btnPlaylist = document.getElementById('btnplaylist');
const btnAlbums = document.getElementById('btnAlbums');
const btnRecent = document.getElementById('recent');
const content = document.querySelectorAll('.content');
const images = document.getElementById('image');
const h3Id = document.getElementById('h3');
const paragraph = document.getElementById('paragraph');
const buttonsHeader = document.getElementById('buttons-header');



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


images.addEventListener('mouseenter', function(){
    
    
})

let short = false

function libraryEfects(list) {
    if (sidebarContainer.children[0].className === 'not-find') {
        sidebarContainer.innerHTML = ''
        playlistsGenerator();
    }

    const images = document.querySelectorAll('.image');

    images.forEach(c => {
        c.classList.toggle('short');
    });

    const contents = document.querySelectorAll('.content');

    contents.forEach(c => {
        c.classList.toggle('short');
    });

    sidebar.classList.toggle('short');
    btnLibrary.classList.toggle('short');
    btnRecent.classList.toggle('short');
    buttonsHeader.classList.toggle('short')

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
        
        image.className = 'image'
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

        div.addEventListener('dblclick', function(){
        audio.src = link;
        audio.play();
        })
    })
    
};



playlistsGenerator();

btnBrowser.addEventListener('click', browserInput);



//Browser function
let browserInputElement = null;
function browserInput() {

    if (browserInputElement) return;

    const input = document.createElement('input');
    input.placeholder = 'Type to apply filters';
    input.className = 'input-normal';

        btnBrowser.appendChild(input);
        browserInputElement = input;


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
        msg.textContent = `Cant find "${input.value}"`;
        msg.style.color = 'gray';
        msg.style.margin = '20px';
        msg.className = 'not-find'
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


        div.addEventListener('dblclick', function(){
            audio.src = link;
            audio.play();
        });
    });
});

}


document.addEventListener('click', function(e) {

    if (!browserInputElement) return;

    
    if (btnBrowser.contains(e.target) || browserInputElement.contains(e.target) || btnLibrary.contains(e.target)) {
        
        return;

    }
    sidebarContainer.innerHTML = ''
    playlistsGenerator();
    browserInputElement.remove();
    browserInputElement = null;
});

let playListOn = false

btnPlaylist.addEventListener('click', function () {
    const resultados = playlist.filter(song => {
        const playList = song.type
        
        return(playList === 'Playlist')
    });

    if (playListOn) {
        playlistsGenerator();
        playListOn = false
        return;
    }

    sidebarContainer.innerHTML = ''

    

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

        image.className = 'image';
        div.className = 'container';
        div2.className = 'content';
        h3.className = 'h3';
        div2.className = 'content'; 


        sidebarContainer.appendChild(div);
        div.appendChild(image);
        div.appendChild(div2);
        div2.appendChild(h3);
        div2.appendChild(p);

        div.addEventListener('dblclick', function(){
        audio.src = link;
        audio.play();
        });
    })
    playListOn = true
});

let albumListOn = false

btnAlbums.addEventListener('click', function () {
        const resultados = playlist.filter(song => {
        const album = song.type
        
        return(album === 'Album')
    });
    sidebarContainer.innerHTML = ''

    if (albumListOn) {
        playlistsGenerator();
        albumListOn = false
        return;
    }


    
    if (!albumListOn) {
    
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
    
            div.addEventListener('dblclick', function(){
            audio.src = link;
            audio.play();
            });
        })
        albumListOn = true
}
})
