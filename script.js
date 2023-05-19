console.log("Welcome to spotify");

//navbar
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
}
//Initialize the variables
let songIndex = 0;
let audioElement = new Audio("Music\\1.mp3")
let masterPlay = document.getElementById("masterPlay")
let myProgressBar = document.getElementById("myProgressBar")
let gif = document.getElementById("gif")
let songItems = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById("masterSongName")

//List of song
let songs = [
    {songName: "Kahan Tak", filePath: "Music\\1.mp3", coverPath: "MusicCover\\KahanTak.jpeg"},
    {songName: "I Guess", filePath: "Music\\2.mp3", coverPath: "MusicCover\\IGuess.jpeg"},
    {songName: "No Cap", filePath: "Music\\3.mp3", coverPath: "MusicCover\\NoCap.jpeg"},
    {songName: "Speed Se Badho", filePath: "Music\\4.mp3", coverPath: "MusicCover\\SpeedSeBadho.jpeg"},
    {songName: "Never Back Down", filePath: "Music\\5.mp3", coverPath: "MusicCover\\NeverBackDown.jpeg"},
    {songName: "Aage Chal", filePath: "Music\\6.mp3", coverPath: "MusicCover\\Aage Chal.jpeg"},
    {songName: "Price Tag", filePath: "Music\\7.mp3", coverPath: "MusicCover\\PriceTag.jpeg"},
    {songName: "Fate", filePath:"Music\\8.mp3", coverPath: "MusicCover\\Fate.jpeg"},
    {songName: "Beat Do", filePath: "Music\\9.mp3", coverPath: "MusicCover\\BeatDo.jpeg"},
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

//Handle play pause click
masterPlay.addEventListener('click', () =>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity = 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // updateSeekBar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;

})

myProgressBar.addEventListener('change', () =>{
    audioElement.currentTime = ((myProgressBar.value * audioElement.duration) / 100);    
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
    element.addEventListener('click', (e) =>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);  
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `Music\\${songIndex + 1}.mp3`
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle')
    })
})

document.getElementById('next').addEventListener('click', () =>{
    if(songIndex > 9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `Music\\${songIndex + 1}.mp3`
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle')
})

document.getElementById('previous').addEventListener('click', () =>{
    if(songIndex < 0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `Music\\${songIndex + 1}.mp3`
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle')
})




