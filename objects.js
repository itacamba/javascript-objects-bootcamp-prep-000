var playlist = {artistName: 'Song Title'};

function updatePlaylist(playlist,artistName,songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist,artistName){
  var updatedPlaylist = delete playlist.artistName;
  return updatedPlaylist;
}
