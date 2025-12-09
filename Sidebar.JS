//sidebar section⬇️

const sidebar = document.getElementById('sidebar');
const audio = document.getElementById('audio');
const header = document.getElementById('header')
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

//reproductor section ⬇️
const repImage = document.getElementById('rep-image');
const h3Rep = document.getElementById('h3Rep');
const singers = document.getElementById('singers');
const btnPlay = document.getElementById('play');
const btnPrevious = document.getElementById('previous');
const btnNext = document.getElementById('next');
const btnRepeat = document.getElementById('repeat');
const btnRandom = document.getElementById('random');
const currentTime = document.getElementById('current-time');
const totalDuration = document.getElementById('duration');
const timeBar = document.getElementById('time-bar');

//center seciton⬇️
const centerSection = document.getElementById('center');
const centerSongList = document.getElementById('center-songlist');
const centerSectionList = document.getElementById('center-section');
const centerContent = document.getElementById('center-content');
const centerImageHeader = document.getElementById('header-image');
const centerH4Header = document.getElementById('h4-header');
const centerH1Header = document.getElementById('h1-header');
const centerPHeader = document.getElementById('p-header');



let playlist = [
{
    nombre: 'Your Likes',
    img: '/assets/img/yourlikes.jpg',
    type: 'Playlist',
    artist: '711 songs',
    background: '#5f33ffff',
    songsList: [
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
    ]
},    
{
    nombre: 'Callaita',
    img: '/assets/img/callaita.jpg',
    link: '/assets/music/Callaita.mp3',
    type: 'Album',
    artist: 'Bad Bunny',
    background: '#ffa724ff'

},
{
    nombre: 'Columbia',
    img: '/assets/img/columbia.jpg',
    link: '/assets/music/Columbia.mp3',
    type: 'Sencillo',
    artist: 'Quevedo',
    background: '#ffaf36'
},
{
    nombre: 'Danzakuduro',
    img: '/assets/img/danzakuduro.jpg',
    link: '/assets/music/Danzakuduro.mp3',
    type: 'Album',
    artist: 'Don Omar',
    background: '#9b1a1a'
},
{
    nombre: 'Deportivo',
    img: '/assets/img/deportivo.jpg',
    link: '/assets/music/Deportivo.mp3',
    type: 'Sencillo',
    artist: 'Anuel AA y Blessed',
    background: '#a30000ff'
},
{
    nombre: 'Verte ir',
    img: '/assets/img/verte-ir.jpg',
    link: '/assets/music/Verte-ir.mp3',
    type: 'Sencillo',
    artist: 'Anuel AA y Mabo Kingz',
    background: '#00a581'
},


{
    nombre: 'Amanecio',
    img: '/assets/img/amanecio.jpg',
    link: '/assets/music/Amanecio.mp3',
    type: 'Album',
    artist: 'Quevedo, De La Rose, De La...',
    background: '#636363ff'
},
{
    nombre: 'Gyal you a party animal Remix',
    img: '/assets/img/Gyal-you-a-party.jpg',
    link: '/assets/music/GyalYouAPartyAnimalRemix.mp3',
    type: 'Sencillo',
    artist: 'Charly black, Daddy Yankee',
    background: 'red'
},
{
    nombre: 'Kloufrens',
    img: '/assets/img/kloufrens.jpg',
    link: '/assets/music/Kloufrens.mp3',
    type: 'Album',
    artist: 'Bad Bunny',
    background: '#405820FF'
},
{
    nombre: 'La plena',
    img: '/assets/img/laplena.jpg',
    link: '/assets/music/Laplena.mp3',
    type: 'Sencillo',
    artist: 'Beele y Wsound',
    background: '#d64106ff'  
},
];



let short = false

function libraryEfects() {
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
    buttonsHeader.classList.toggle('short');

    if (!short) {

        btnLibrary.textContent = '🕮';
        centerSection.style.marginLeft = '96px'
        short = true;

    } else {

        btnLibrary.textContent = 'Your library';
        centerSection.style.marginLeft = '380px'

        short = false;
    }

}


btnLibrary.addEventListener('click', libraryEfects);

//function to get minutes and seconds of audio

function formatDuration(a) {
  const minutes = Math.floor(a / 60);
  const seconds = Math.floor(a % 60);
  const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
  return `${minutes}:${formattedSeconds}`; 
}



//Sidebar playlist generator

function playlistsGenerator(params) {
    playlist.forEach((n, i) =>{
        
        const  {nombre, img, type, artist, link, background} = n;
        
        const image = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const div = document.createElement('div');
        const div2 = document.createElement('div');
        
        image.className = 'image';
        image.src = img;
        h3.textContent = nombre;
        h3.className = 'h3';
        p.textContent = `${type} ● ${artist}`;
        div.className = 'container';
        div2.className = 'content';
        
        sidebarContainer.appendChild(div);
        div.appendChild(image);
        div.appendChild(div2);
        div2.appendChild(h3);
        div2.appendChild(p);

        div.addEventListener('dblclick', function(){
            audio.src = link;

        audio.addEventListener('loadedmetadata', function handler() {
        
            let songDuration = Math.floor(audio.duration);
            totalDuration.textContent = `${formatDuration(songDuration)}`;
        
            audio.removeEventListener('loadedmetadata', handler);
        });
            btnPlay.textContent = '⏸️';
            
            singers.textContent = artist
            h3Rep.textContent = nombre;
            repImage.src = img;
            
            audio.play();
            
            
        })

                  
    div.addEventListener('click', function () {
        console.log(background)
        centerSectionList.innerHTML = ""; 
        centerSectionList.classList.add('songs'); // conecta con CSS .songs
        centerImageHeader.src = img;
        centerH4Header.textContent = type;
        centerH1Header.textContent = nombre;
        centerPHeader.textContent = artist;
        centerContent.style.background = background;
        

        if (n.songsList) {
            n.songsList.forEach((song, i) => {
    
            const { nombre, img, artist, type, link } = song;
    
            const row = document.createElement('div');
            row.className = "center-songlist";
    
    
            const songDiv = document.createElement('div');
            songDiv.className = "song";
    
    
            const index = document.createElement('h1');
            const cover = document.createElement('img');
            const details = document.createElement('div');
            const title = document.createElement('h4');
            const artists = document.createElement('p');
            const album = document.createElement('h3');
            const timeAgo = document.createElement('h3');
            const duration = document.createElement('p');
    
            timeAgo.className = 'h3-center'
            album.className = 'h3-center'
            duration.className = 'duration';
    
            details.className = "song-details";
    
            index.textContent = i + 1;
            cover.src = img;
            title.textContent = nombre;
            artists.textContent = artist;
            album.textContent = type;
            timeAgo.textContent = "Hace 20 horas";
            duration.textContent = "3:20";
    
            centerSectionList.appendChild(row);
            row.appendChild(songDiv);
    
            songDiv.appendChild(index);
            songDiv.appendChild(cover);
            songDiv.appendChild(details);
    
            details.appendChild(title);
            details.appendChild(artists);
    
            songDiv.appendChild(album);
            songDiv.appendChild(timeAgo);
            songDiv.appendChild(duration);

            songDiv.addEventListener('dblclick', function(){
                btnPlay.textContent = '⏸️';

                audio.addEventListener('loadedmetadata', function handler() {
        
                let songDuration = Math.floor(audio.duration);
                totalDuration.textContent = `${formatDuration(songDuration)}`;
        
                audio.removeEventListener('loadedmetadata', handler);
                });
            
                singers.textContent = artist
                h3Rep.textContent = nombre;
                repImage.src = img;
            
                audio.src = link;
                audio.play();
            })
    
        });
        } else {
            
            const { nombre, img, artist, type, link } = n;
            console.log(nombre)
            const row = document.createElement('div');
            row.className = "center-songlist";
    
    
            const songDiv = document.createElement('div');
            songDiv.className = "song";
    
    
            const index = document.createElement('h1');
            const cover = document.createElement('img');
            const details = document.createElement('div');
            const title = document.createElement('h4');
            const artists = document.createElement('p');
            const album = document.createElement('h3');
            const timeAgo = document.createElement('h3');
            const duration = document.createElement('p');
    
            timeAgo.className = 'h3-center'
            album.className = 'h3-center'
            duration.className = 'duration';
    
            details.className = "song-details";
    
            index.textContent = 1;
            cover.src = img;
            title.textContent = nombre;
            artists.textContent = artist;
            album.textContent = type;
            timeAgo.textContent = "Hace 20 horas";
            duration.textContent = "3:20";
    
            centerSectionList.appendChild(row);
            row.appendChild(songDiv);
    
            songDiv.appendChild(index);
            songDiv.appendChild(cover);
            songDiv.appendChild(details);
    
            details.appendChild(title);
            details.appendChild(artists);
    
            songDiv.appendChild(album);
            songDiv.appendChild(timeAgo);
            songDiv.appendChild(duration);



            songDiv.addEventListener('dblclick', function(){
                btnPlay.textContent = '⏸️';

                audio.addEventListener('loadedmetadata', function handler() {
        
                let songDuration = Math.floor(audio.duration);
                totalDuration.textContent = `${formatDuration(songDuration)}`;
        
                audio.removeEventListener('loadedmetadata', handler);
                });
            
                singers.textContent = artist
                h3Rep.textContent = nombre;
                repImage.src = img;
            
                audio.src = link;
                audio.play();
            })
        }

});
        
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
        const {nombre, img, link, type, artist,background} = song;

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

            audio.addEventListener('loadedmetadata', function handler() {
        
            let songDuration = Math.floor(audio.duration);
            totalDuration.textContent = `${formatDuration(songDuration)}`;
        
            audio.removeEventListener('loadedmetadata', handler);
            });

            btnPlay.textContent = '⏸️'
            
            repImage.src = img;
            singers.textContent = artist;
            h3Rep.textContent = nombre;
            repImage.src = img;
            
            audio.play();
        });

        div.addEventListener('click', function () {
        console.log(background)
        centerSectionList.innerHTML = ""; 
        centerSectionList.classList.add('songs'); // conecta con CSS .songs
        centerImageHeader.src = img;
        centerH4Header.textContent = type;
        centerH1Header.textContent = nombre;
        centerPHeader.textContent = artist;
        centerContent.style.background = background;
        

        if (song.songsList) {
            song.songsList.forEach((song, i) => {
    
            const { nombre, img, artist, type, link } = song;
    
            const row = document.createElement('div');
            row.className = "center-songlist";
    
    
            const songDiv = document.createElement('div');
            songDiv.className = "song";
    
    
            const index = document.createElement('h1');
            const cover = document.createElement('img');
            const details = document.createElement('div');
            const title = document.createElement('h4');
            const artists = document.createElement('p');
            const album = document.createElement('h3');
            const timeAgo = document.createElement('h3');
            const duration = document.createElement('p');
    
            timeAgo.className = 'h3-center'
            album.className = 'h3-center'
            duration.className = 'duration';
    
            details.className = "song-details";
    
            index.textContent = i + 1;
            cover.src = img;
            title.textContent = nombre;
            artists.textContent = artist;
            album.textContent = type;
            timeAgo.textContent = "Hace 20 horas";
            duration.textContent = "3:20";
    
            centerSectionList.appendChild(row);
            row.appendChild(songDiv);
    
            songDiv.appendChild(index);
            songDiv.appendChild(cover);
            songDiv.appendChild(details);
    
            details.appendChild(title);
            details.appendChild(artists);
    
            songDiv.appendChild(album);
            songDiv.appendChild(timeAgo);
            songDiv.appendChild(duration);

            songDiv.addEventListener('dblclick', function(){
                btnPlay.textContent = '⏸️';
            
                singers.textContent = artist
                h3Rep.textContent = nombre;
                repImage.src = img;
            
                audio.src = link;
                audio.play();
            })
    
        });
        } else {
            
            const { nombre, img, artist, type, link } = song;
            console.log(nombre)
            const row = document.createElement('div');
            row.className = "center-songlist";
    
    
            const songDiv = document.createElement('div');
            songDiv.className = "song";
    
    
            const index = document.createElement('h1');
            const cover = document.createElement('img');
            const details = document.createElement('div');
            const title = document.createElement('h4');
            const artists = document.createElement('p');
            const album = document.createElement('h3');
            const timeAgo = document.createElement('h3');
            const duration = document.createElement('p');
    
            timeAgo.className = 'h3-center'
            album.className = 'h3-center'
            duration.className = 'duration';
    
            details.className = "song-details";
    
            index.textContent = 1;
            cover.src = img;
            title.textContent = nombre;
            artists.textContent = artist;
            album.textContent = type;
            timeAgo.textContent = "Hace 20 horas";
            duration.textContent = "3:20";
    
            centerSectionList.appendChild(row);
            row.appendChild(songDiv);
    
            songDiv.appendChild(index);
            songDiv.appendChild(cover);
            songDiv.appendChild(details);
    
            details.appendChild(title);
            details.appendChild(artists);
    
            songDiv.appendChild(album);
            songDiv.appendChild(timeAgo);
            songDiv.appendChild(duration);



            songDiv.addEventListener('dblclick', function(){
                btnPlay.textContent = '⏸️';
            
                singers.textContent = artist
                h3Rep.textContent = nombre;
                repImage.src = img;
            
                audio.src = link;
                audio.play();
            })
        }

});
    });
});

}

//global event

document.addEventListener('click', function(e) {


    if (!browserInputElement) return;

    
    if (btnBrowser.contains(e.target) || browserInputElement.contains(e.target) || btnLibrary.contains(e.target) || e.target.closest('.container') || browserInputElement.value.length) {
        
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
        const playList = song.type;
        
        return(playList === 'Playlist')
    });

    sidebarContainer.innerHTML = '';

    if (playListOn) {
        btnPlaylist.style.backgroundColor = '#ffffff1a';
        btnPlaylist.style.color = 'white';
        playlistsGenerator();
        playListOn = false
        return;
    }

    sidebarContainer.innerHTML = '';

    
    if (!playListOn) {
        btnPlaylist.style.backgroundColor = 'white';
        btnPlaylist.style.color = 'black';
        
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
                
                audio.addEventListener('loadedmetadata', function handler() {
        
                let songDuration = Math.floor(audio.duration);
                totalDuration.textContent = `${formatDuration(songDuration)}`;
        
                audio.removeEventListener('loadedmetadata', handler);
                });

                btnPlay.textContent = '⏸️';
                audio.play();
            });
        })
    }
        playListOn = true
});

let albumListOn = false

btnAlbums.addEventListener('click', function () {
        const resultados = playlist.filter(song => {
        const album = song.type;
        
        return(album === 'Album')
    });
    sidebarContainer.innerHTML = '';

    if (albumListOn) {
        playlistsGenerator();
        btnAlbums.style.backgroundColor = '#ffffff1a';
        btnAlbums.style.color = 'white';
        albumListOn = false;
        return;
    }


    
    if (!albumListOn) {

        btnAlbums.style.backgroundColor = 'white';
        btnAlbums.style.color = 'black';
        
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

            audio.addEventListener('loadedmetadata', function handler() {
        
            let songDuration = Math.floor(audio.duration);
            totalDuration.textContent = `${formatDuration(songDuration)}`;
        
            audio.removeEventListener('loadedmetadata', handler);
            });
            
            btnPlay.textContent = '⏸️';
            audio.play();
            });
        })
        albumListOn = true;
}
})

sidebar.addEventListener('scroll', function() {
    if (sidebar.scrollTop > 5) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})

//Reproductor 

function reproducer() {
    if (audio.paused) {
        btnPlay.textContent = '⏸️';
        audio.play();
    } else {
       btnPlay.textContent = '▶️';
           audio.pause();
    }

};


btnPlay.addEventListener('click', reproducer)



function nextSong() {
    const result = playlist.filter(song => audio.src.includes(song.link))[0];

    const index = playlist.findIndex(song => song.nombre === result.nombre);

    if (index >= playlist.length - 1 ) return;


    const next = playlist[index + 1];
    const {nombre, img, artist} = next;

    repImage.src = img;
    h3Rep.textContent = nombre;
    singers.textContent = artist;

    audio.addEventListener('loadedmetadata', function handler() {
        
        let songDuration = Math.floor(audio.duration);
        totalDuration.textContent = `${formatDuration(songDuration)}`;
        
        audio.removeEventListener('loadedmetadata', handler);
    });

    audio.src = next.link;
    audio.play();
}


function previousSong() {
    const result = playlist.filter(song => audio.src.includes(song.link))[0];
    
    const index = playlist.findIndex(song => song.nombre === result.nombre);

    if (index <= 0 || playlist[index - 1].type === 'Playlist') return;

    const previous = playlist[index - 1];

    const {nombre, img, artist} = previous;

    repImage.src = img;
    h3Rep.textContent = nombre;
    singers.textContent = artist;

    audio.addEventListener('loadedmetadata', function handler() {
        
        let songDuration = Math.floor(audio.duration);
        totalDuration.textContent = `${formatDuration(songDuration)}`;
        
        audio.removeEventListener('loadedmetadata', handler);
    });

    audio.src = previous.link;
    audio.play();
}

btnNext.addEventListener('click', nextSong);

btnPrevious.addEventListener('click',  previousSong);

let repeat = false

let random = false

function repeatSong() {
    if(repeat){
        repeat = false;
        btnRepeat.style.color = 'white';
    } else {
        btnRepeat.style.color = '#1db954';
        repeat = true;
    }
}

btnRepeat.addEventListener('click', repeatSong);



audio.addEventListener('ended', function () {
    if(repeat){
        audio.play();
    } else if(random){
        let randomPlay = playlist[Math.floor(Math.random() * playlist.length)].link;
        audio.src = randomPlay;
        audio.play();
    } else{
        nextSong();
    }
});

btnRandom.addEventListener('click', function(){
    if (random) {
        btnRandom.style.color = 'white';
        random = false;
    } else {
        btnRandom.style.color = '#1db954';
        random = true;
    }
})

function updateProgress() {
    timeBar.value = audio.currentTime;
    let songDuration = Math.floor(audio.duration);
    timeBar.min = 0;
    timeBar.max = songDuration;
}

audio.addEventListener('timeupdate', updateProgress)

function updateProgress() {
    timeBar.value = audio.currentTime;
    let songDuration = Math.floor(audio.duration);
    timeBar.min = 0;
    timeBar.max = songDuration;
    let currentAudio = Math.floor(audio.currentTime);
    currentTime.textContent = `${formatDuration(currentAudio)}`;
}
audio.addEventListener('timeupdate', updateProgress)

timeBar.addEventListener('input', function(){
    let songDuration = Math.floor(audio.duration);
    timeBar.min = 0;
    timeBar.max = songDuration;
    let currentAudio = Math.floor(audio.currentTime);
    currentTime.textContent = `${formatDuration(currentAudio)}`;
    totalDuration.textContent = `${formatDuration(songDuration)}`;
    audio.currentTime = timeBar.value;
});

const topSearch = document.getElementById("browser-top");
const searchResults = document.getElementById("top-search-results");

topSearch.addEventListener("input", function () {
        console.log(topSearch.value)

    const query = topSearch.value.trim().toLowerCase();

    if (query === "") {
        searchResults.style.display = "none";
        searchResults.innerHTML = "";
        console.log('primero')
        return;
    }

    const filtered = playlist.filter(item =>
        item.nombre.toLowerCase().includes(query) ||
        item.artist.toLowerCase().includes(query)
    );

    searchResults.innerHTML = "";

    if (filtered.length === 0) {
        searchResults.style.display = "none";
        console.log('segundo')
        return;
    }

    filtered.forEach(item => {
        const{artist, nombre, img} = item;
        const div = document.createElement("div");
        div.className = 'search-result'
        div.textContent = `${item.nombre} — ${item.artist}`;

        div.addEventListener("click", () => {
            audio.addEventListener('loadedmetadata', function handler() {
        
            let songDuration = Math.floor(audio.duration);
            totalDuration.textContent = `${formatDuration(songDuration)}`;
        
            audio.removeEventListener('loadedmetadata', handler);
        });


            singers.textContent = artist
            h3Rep.textContent = nombre;
            repImage.src = img;

            audio.src = item.link;
            audio.play();
        });


        searchResults.appendChild(div);
        
    });
        console.log('tercero')
    

    searchResults.style.display = "block";
});
