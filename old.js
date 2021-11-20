console.log("WElCOME TO MUSICALLY");
let songIndex=0;


let audioElement= new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myprogress=document.getElementById('myprogress');
let gif=document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songitem'));


let songs=[
    
    {songName:"Rashke Kamar",filePath:"songs/1.mp3",coverPath:"https://a10.gaanacdn.com/gn_img/albums/JD2KJyAbOL/D2KJML6ObO/size_xxl.webp"},
    {songName:"oooh Haseena Jhulfo Wali",filePath:"songs/2.mp3",coverPath:"https://i1.sndcdn.com/artworks-000224755490-b2dpkm-t500x500.jpg"},
    {songName:"Pal Pal Dil k Pass",filePath:"songs/3.mp3",coverPath:"https://1.bp.blogspot.com/-6lfvXM4-7Hs/XqguhpM23QI/AAAAAAAAAKk/KMas7NQGf8wYybrt078WmFTFXOXf0rZAwCEwYBhgL/s1600/pal-pal-dil-ke-paas-lyrics.jpg"},
    {songName:"Ankhion se Goli",filePath:"songs/4.mp3",coverPath:"https://a10.gaanacdn.com/gn_img/albums/a7LWBaz3zX/7LWBkpmRbz/size_xxl.webp"},
    {songName:"Chori Chori Chupke Chupke",filePath:"songs/5.mp3",coverPath:"https://m.media-amazon.com/images/M/MV5BYWU3YzY4OGMtNTYwMi00OTVmLWFlMzUtNmM2M2M3NmUyZTM1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg"},
  ]

  songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

//audioelement.play();

//handle play/pause click

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        
    }
})

audioElement.addEventListener('timeupdate',()=>{
    
    
    progress=parseInt((audioElement.currentTime/audioElement.duration)* 100);
    
    myprogress.value=progress;
})

myprogress.addEventListener('change',()=>{
    audioElement.currentTime=myprogress.value * audioElement.duration/ 100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=5){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})