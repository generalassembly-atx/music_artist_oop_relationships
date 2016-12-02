// Define the Artist constructor function here, with a 'name' property that can be set at instantiation,
// and a 'songs' property that is an empty array to start
function Artist(name) {
  this.name = name;
  this.songs = [];

})

// Define the Song constructor function here, with 'title' and 'artist' properties that can be set at instantiation,
// and a 'playCount' property that is set to 0
function Song(title,artist) {
  var self = this;
  this.title = title;
  this.artist = artist;
  this.playCount = 0;

  this.artist.songs.push(this.title)

  //since 'artist' is a paramater, and that parameter is eqal to the instantiated variable of Artist, (ex: var vanHalen = new Artist("Van Halen"))... then the vanHalen variable becomes equal to this.artist. this is how you can refer to the Artist function and add to its empty songs array even though you aren't in it. So you could then do this.artist(which is equal to vanHalen).songs(vanHalen.songs is equal to the empty array).push(this.title) to add the song title into the Artist this.songs empty array.
  // So, saying this.artist.songs.push(this.title) is the same thing as (theoretically) saying vanHalen.songs.push("Jump") although you wouldn't write it like that, that's just to see how this is working.
}
  // When a new song is instantiated, you'll want to add that song to its artist's 'songs' array.
  // You'll probably want to do that in here somewhere...


}

// This is how we should be able to use your constructor functions once they work!
var vanHalen = new Artist("Van Halen");
var jump = new Song("Jump!", vanHalen);
