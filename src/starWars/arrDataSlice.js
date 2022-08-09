import {
  createSlice
} from '@reduxjs/toolkit';

const initialState = {
  arrData: ['Прообразом Чубакки стал пес режиссера.', 'Актерам разрешили подобрать любимый цвет для своих световых мечей.', 'В фильме «Звездные войны-V: Империя наносит ответный удар» среди космических объектов можно заметить парящий ботинок и картофелину.', 'Дыхание Дарта Вейдера — это звуки дыхательной маски, подключенной к аквалангу.', 'Планета Татуин названа в честь реального города в Тунисе – стране, где происходила часть съемок'],
  value: '',
};




export const avatarSlice = createSlice({
  name: 'arr',
  initialState,
  reducers: {
    cahngeValue: (state, action) => {
      state.value = action.payload;
    },
  },
});


export const {
  cahngeValue
} = avatarSlice.actions;

export const selectArr = (state) => state;



export default avatarSlice.reducer;