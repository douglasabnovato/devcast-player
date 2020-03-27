import audios from './data.js';
import { path } from './utils.js';
import elements from './playerElements.js';

export default{
    audioData: audios,
    currentAudio: {},
    currentPlaying:0,
    isPlaying : false,
    start(){
      elements.get.call(this);
      elements.actions.call(this);
      this.update();
      this.audio.onended = () => this.next();
    },
    play(){
        this.isPlaying = true;
        this.audio.play();
        this.playPause.innerText = "pause";
    },
    pause(){
        this.isPlaying = false;
        this.audio.pause();
        this.playPause.innerText = "play_arrow";
    },
    togglePausePlay(){
        if(this.isPlaying){
            this.pause();
        }else{
            this.play();
        }
    },
    toggleMute(){
        this.audio.muted = !this.audio.muted;
        this.mute.innerText = this.audio.muted ? "volume_down" : "volume_up";
    },
    next(){
        this.currentPlaying++;
        if(this.currentPlaying == this.audioData.length) this.restart(); 
        this.update(); 
    },
    setVolume(value){
        this.audio.volume = value / 100;
    },
    setSeek(value){
        this.audio.currentTime = value;
    },
    update(){
        this.currentAudio = this.audioData[this.currentPlaying];

        this.cover.style.background = `url('${path(this.currentAudio.cover)}') no-repeat center center / cover` ;
        this.title.innerText = this.currentAudio.title;
        this.artist.innerHTML = `<i class='material-icons'>account_circle</i>${this.currentAudio.artist}`;
        elements.createAudioElement.call(this, path(this.currentAudio.file));
    },
    restart(){
        this.currentPlaying = 0;
        this.update();
    }
};