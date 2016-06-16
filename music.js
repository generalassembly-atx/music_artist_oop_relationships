function Artist(name) {
  this.name = name;
  this.songs = [];
}

function Song(title, artist) {
  this.title = title;
  this.artist = artist;
  this.playCount = 0;
  Artist.prototype.add = function(title) {
    this.songs.push(title)
  }
  artist.add(title);
}

// function play(title) {
//   Song.prototype.add = function() {
//     this.playCount++;
//   }
//   title.add()
// }
// This is how we should be able to use your constructor functions once they work!
var vanHalen = new Artist("Van Halen");
var jump = new Song("Jump!", vanHalen);
play("Jump!");

console.log(vanHalen);
console.log(jump)
