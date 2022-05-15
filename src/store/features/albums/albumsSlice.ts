import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';

import { Album } from '../../../common/types';

type AlbumsState = {
  list: Album[];
};

const initialState: AlbumsState = {
  list: [],
};

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    addAlbum: (state, { payload }: PayloadAction<string>) => {
      state.list.push({
        id: v4(),
        dateAdded: new Date().toISOString(),
        name: payload,
        liked: false,
      });
    },
    removeAlbum: (state, { payload }: PayloadAction<string>) => {
      state.list = state.list.filter(({ id }) => id !== payload);
    },
    likeAlbum: (state, { payload }: PayloadAction<string>) => {
      const index = state.list.findIndex(({ id }) => id === payload);

      if (index === -1) {
        return;
      }

      state.list[index].liked = !state.list[index].liked;
    },
  },
});

export const { addAlbum, removeAlbum, likeAlbum } = albumsSlice.actions;
export default albumsSlice.reducer;
