
function Artist(n,s) {
  this.name = n
  this.songs = []
}


function Song(t,a) {
  this.title = t
  this.artist = a
  this.playCount = 0
  this.artist.songs.push(this)
}

Song.prototype.play = function() {
  this.playCount++;
  console.log(this.playCount);
}

var vanHalen = new Artist("Van Halen");
var jump = new Song("Jump!", vanHalen);
