import {
  configureStore
} from '@reduxjs/toolkit';
import arrDataSlice from '../starWars/arrDataSlice';
import imgArrSlice from '../avatar/avatarSlice';

export const store = configureStore({
  reducer: {
    arr: arrDataSlice,
    imgArr: imgArrSlice,
  },
});