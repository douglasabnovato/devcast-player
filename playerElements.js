export default{
    get(){
        this.cover = document.querySelector(".card-image");
        this.title = document.querySelector(".card-content h5");
        this.artist = document.querySelector(".artist");
        this.playPause = document.querySelector("#play-pause");
        this.mute = document.querySelector("#mute");
        this.volume = document.querySelector("#vol-control");
        this.seekbar = document.querySelector("#seekbar");
    },
    createAudioElement(audio){
        this.audio = new Audio(audio);
    },
    actions(){
        this.playPause.onclick = () => this.togglePlayPause();
        this.mute.onclick = () => this.toggleMute();

        this.volume.oninput = () => this.setVolume(this.volume.value);
        this.volume.onchange = () => this.setVolume(this.volume.value);

        this.seekbar.oninput = () => this.setSeek(this.seekbar.value);
        this.seekbar.onchange = () => this.setSeek(this.seekbar.value);
    }
};