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

  // When a new song is instantiated, you'll want to add that song to its artist's 'songs' array.
  // You'll probably want to do that in here somewhere...

    Artist.prototype.newSong = function(title) {
      this.songs.push(title);
    }
  artist.newSong(title);
};

// This is how we should be able to use your constructor functions once they work!
var vanHalen = new Artist("Van Halen");
var jump = new Song("Jump!", vanHalen);
console.log(jump)
