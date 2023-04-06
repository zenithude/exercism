// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  if (playlist.length < 1) {
    return playlist;
  }
  let setPlaylist = new Set();
  let newPlaylist = []
  for (let i = 0; i < playlist.length; i++) {
    setPlaylist.add(playlist[i]);
  }
  newPlaylist = [...setPlaylist]
  return newPlaylist;
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  let setPlaylist = new Set(playlist);
  return setPlaylist.has(track);
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  let setPlaylist = new Set(playlist).add(track);
  let newPlaylist = [...setPlaylist]
  return newPlaylist
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  let setPlaylist = new Set(playlist)
  setPlaylist.delete(track)
  let newPlaylist = [...setPlaylist];
  return newPlaylist;
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  let artist = new Set();
  for (let i = 0; i < playlist.length; i++) {
    artist.add(playlist[i].split('-')[1].trim());
  }
  let uniqArtist = [...artist];
  return uniqArtist;
}
