console.log("WElCOME TO MUSICALLY");
let songIndex=0;


let audioElement= new Audio('music/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myprogress=document.getElementById('myprogress');
let gif=document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songitem'));


let songs=[
    
    {songName:"ranjha",filePath:"music/1.mp3",coverPath:"images/Shershaah-Ranjha-Song-Lyrics-starring-Sidharth-Malhotra-and-Kiara-Advani-696x419.png"},
    {songName:"rattan",filePath:"music/2.mp3",coverPath:"images/shruti.jpg"},
    {songName:"uchiyan",filePath:"music/3.mp3",coverPath:"images/hellooo.jpg"},
    {songName:"Baarish",filePath:"music/4.mp3",coverPath:"images/ghnh.jpg"},
    {songName:"Churalia",filePath:"music/5.mp3",coverPath:"images/4067_4.jpg"},
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
        audioElement.src = `music/${songIndex+1}.mp3`;
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
    audioElement.src = `music/${songIndex+1}.mp3`;
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
    audioElement.src = `music/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})