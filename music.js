// Define the Artist constructor function here, with a 'name' property that can be set at instantiation,
// and a 'songs' property that is an empty array to start
function Artist(naam) {
this.name = naam;
this.song = [];
}

// Define the Song constructor function here, with 'title' and 'artist' properties that can be set at instantiation,
// and a 'playCount' property that is an empty array to start
function Song(tl, art) {
this.title = tl;
this.artist = art;
this.playCount = 0;


  // When a new song is instantiated, you'll want to add that song to its artist's 'songs' array.

  Artist.prototype.newSong = function (tl) {
    this.song.push(tl)

  }
    art.newSong(tl)
  // You'll probably want to do that in here somewhere...
}
console.log('newSong');
// This is how we should be able to use your constructor functions once they work!
var vanHalen = new Artist("Van Halen");
var jump = new Song("Jump!", vanHalen);
