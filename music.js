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
  playCount = [];
  // When a new song is instantiated, you'll want to add that song to its artist's 'songs' array.
  // You'll probably want to do that in here somewhere...
  Artist.prototype.addSong = function(title){
    this.songs.push(title);
  }
  artist.addSong(title);
}

// This is how we should be able to use your constructor functions once they work!
var vanHalen = new Artist("Van Halen");
var GWAR = new Artist("GWAR!!");
var bringBacktheBomb = new Song ("Bring Back the Bomb", GWAR);
var stormIsComing = new Song("Storm is Coming", GWAR);
var jump = new Song("Jump!", vanHalen);
console.log(GWAR);
