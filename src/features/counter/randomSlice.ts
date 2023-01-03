import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface randomState {
  randomObject: {
    prop1: boolean,
    prop2: number
  }
  status: 'idle' | 'loading' | 'failed';
}

const initialState: randomState = {
  randomObject: {
    prop1: false,
    prop2: 0,
  },
  status: 'idle',
};

export const randomSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    toggle: (state) => {
      state.randomObject.prop1 = !state.randomObject.prop1;
    },
    incrementProp2: (state) => {
      state.randomObject.prop2 += 1;
    },
    decrementProp2: (state) => {
      state.randomObject.prop2 -= 1;
    },
  },
});

export const { incrementProp2, decrementProp2, toggle } = randomSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default randomSlice.reducer;
