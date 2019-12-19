// Action Creator
export const selectSong = () => {
  // return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
