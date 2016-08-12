// Define the Artist constructor function here, with a 'name' property that can be set at instantiation,
// and a 'songs' property that is an empty array to start

function Artist(name) {
  this.name = name;
  this.songs = [];
}

// Define the Song constructor function here, with 'title' and 'artist' properties that can be set at instantiation,
// and a 'playCount' property that is an empty array to start

function Song(title, artist) {
  this.title = title;
  this.artist = artist;
  this.playCount = 0;
  this.artist.songs.push(this);
};

Song.prototype.play = function () {
  this.playCount++
};

// This is how we should be able to use your constructor functions once they work!
var vanHalen = new Artist("Van Halen");
console.log(vanHalen.songs);
var jump = new Song("Jump!", vanHalen);
console.log(vanHalen.songs);
console.log(jump.playCount)
jump.play()
console.log(jump.playCount);
