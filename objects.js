var playlist = {artistName: 'Song Title'};

function updatePlaylist(playlist,artistName,songTitle){
  var newPlaylist = Object.assign({}, artistName,songTitle);
  return newPlaylist;
}
