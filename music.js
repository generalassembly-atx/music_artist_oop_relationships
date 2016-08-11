// Define the Artist constructor function here, with a 'name' property that can be set at instantiation,
// and a 'songs' property that is an empty array to start
function Artist(naam) {
this.name = naam;
this.song = [];
}

// Define the Song constructor function here, with 'title' and 'artist' properties that can be set at instantiation,
// and a 'playCount' property that is an empty array to start
function Song(tl, art) {
this.artist = art;
this.title = tl;
this.playCount = 0;

Artist.prototype.newSong = function (title) {
this.song.push(title)
}

  // When a new song is instantiated, you'll want to add that song to its artist's 'songs' array.
  // You'll probably want to do that in here somewhere...
} console.log('newsong');

// This is how we should be able to use your constructor functions once they work!
var vanHalen = new Artist("Van Halen");
var jump = new Song("Jump!", vanHalen);
