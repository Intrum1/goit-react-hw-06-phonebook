import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: {
    contacts: [],
    filter: '',
  },
  // Об'єкт редюсерів
  reducers: {},
});

// Генератори екшенів
const {} = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;
