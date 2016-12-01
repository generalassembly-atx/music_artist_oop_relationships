// Define the Artist constructor function here, with a 'name' property that can be set at instantiation,
// and a 'songs' property that is an empty array to start
function Artist(name, songs) {
  this.name =  name;
  this.songs = [];
}

// Define the Song constructor function here, with 'title' and 'artist' properties that can be set at instantiation,
// and a 'playCount' property that is set to 0
function Song(title, artist) {
  this.title = title;
  this.artist = artist;
  this.playCount = 0;
  // When a new song is instantiated, you'll want to add that song to its artist's 'songs' array.
  // You'll probably want to do that in here somewhere...

}

// This is how we should be able to use your constructor functions once they work!
var vanHalen = new Artist("Van Halen");
var jump = new Song("Jump!", vanHalen);

// Inside the Song constructor function, find the current song's artist property, and push the current song object into the artist's songs array property. This way, the song has a reference to the artist, and the artist has an array that contains all of their songs.
//
// Think about how to refer to the current Song. What keyword does an instance use to refer to itself?
