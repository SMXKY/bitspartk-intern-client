import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  complete: {
    partOne: false,
    partTwo: false,
    partThree: false,
  },
  isOn: {
    partOne: true,
    partTwo: false,
    partThree: false,
  },
  progress: 0,
};

const formProgressSlice = createSlice({
  name: "formProgress",
  initialState,
  reducers: {
    updatePart: (state, action) => {
      console.log("active");
      if (action.payload.part === 1 && action.payload.method === "activate") {
        state.complete.partOne = true;
        state.isOn.partTwo = true;
        state.progress = 8;
      } else if (
        action.payload.part === 1 &&
        action.payload.method === "de-activate"
      ) {
        state.complete.partOne = false;
        state.isOn.partTwo = false;
        state.progress = 8;
      } else if (
        action.payload.part === 2 &&
        action.payload.method === "activate"
      ) {
        state.complete.partTwo = true;
        state.isOn.partThree = true;
        state.progress = 12;
      } else if (
        action.payload.part === 2 &&
        action.payload.method === "de-activate"
      ) {
        state.complete.partTwo = false;
        state.isOn.partThree = false;
        state.progress = 12;
      } else if (
        action.payload.part === 3 &&
        action.payload.method === "activate"
      ) {
        state.complete.partThree = true;
        state.progress = 16;
      } else if (
        action.payload.part === 3 &&
        action.payload.method === "de-activate"
      ) {
        state.complete.partThree = false;
      }
    },

    incrementProgress: (state, action) => {
      // console.log("incrmented");
      if (state.progress < 16) {
        state.progress += 1;
      }
    },

    decrementProgress: (state, action) => {
      if (state.progress > 1) {
        state.progress -= 1;
      }
    },

    resetProgees: (state, action) => {
      state.progress = 0;
      state.complete.partOne = false;
      state.complete.partTwo = false;
      state.complete.partThree = false;
    },
  },
});

export const {
  updatePart,
  incrementProgress,
  decrementProgress,
  resetProgees,
} = formProgressSlice.actions;

export default formProgressSlice.reducer;
