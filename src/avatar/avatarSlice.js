import {
  createSlice
} from '@reduxjs/toolkit';

const initialState = []




export const imgArrSlice = createSlice({
  name: 'imgArr',
  initialState,
  reducers: {
    addImg: (state, action) => {
      state.push(action.payload);
    },
  },
});


export const {
  addImg
} = imgArrSlice.actions;

export const selectImgArr = (state) => state.imgArr;



export default imgArrSlice.reducer;