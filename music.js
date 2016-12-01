function Artist(name, songs) {
  this.name = name;
  this.songs = [];
}

function Song(title, artist) {
  this.title = title;
  this.artist = artist;
  this.playCount = 0;
  this.artist.songs.push(this.title);
}

Song.prototype.play = function() {
  this.playCount++;
}

var vanHalen = new Artist("Van Halen");
var jump = new Song("Jump!", vanHalen);
