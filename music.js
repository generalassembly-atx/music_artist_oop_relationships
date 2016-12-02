function Name() {
}

function Artist() {
  this.name = name;
  this.songs = [];
}

function Song(title, artist) {
    this.title = title;
    this.artist = artist;
    this.playcount = 0;
    this.artist.songs.push(this)
}
Song.prototype.play = function() {
  this.playcount++;
}
var vanHalen = new Artist("Van Halen");
var jump = new Song("Jump!", vanHalen);

jump.play();

console.log(jump.playcount);
