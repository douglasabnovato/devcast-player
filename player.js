import audios from './data.js';
import { path } from './utils.js';
import elements from './playerElements.js';

export default{
    audioData: audios,
    currentAudio: {},
    currentPlaying:0,
    start(){
      elements.get.call(this);
      this.update();
      this.audio.onended = () => this.next();
    },
    next(){
        this.currentPlaying++;
        if(this.currentPlaying == this.audioData.length) this.restart(); 
        this.update(); 
    },
    update(){
        this.currentAudio = this.audioData[this.currentPlaying];

        this.cover.style.background = `url('${path(this.currentAudio.cover)}') no-repeat center center / cover` ;
        this.title.innerText = this.currentAudio.title;
        this.artist.innerHTML = `<i class='material-icons'>account_circle</i>${this.currentAudio.artist}`;
        this.audio.src = path(this.currentAudio.file);
    },
    restart(){
        this.currentPlaying = 0;
        this.update();
    }
};