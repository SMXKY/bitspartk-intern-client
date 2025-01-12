import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  firstName: "",
  lastName: "",
  gender: "",
  dob: null,
  email: "",
  phoneNumber: "",
  school: "",
  department: "",
  level: "",
  internshipTopic: "",
  studyStack: "",
  durationInMonths: 0,
  cv: "",
  supportDocumentr: "",
  writtenApplication: "",
};

const navigationSlice = createSlice({
  name: "formInformation",
  initialState,
  reducers: {
    updateProp: (state, action) => {
      if (state.sidebarOff) {
        state.sidebarOff = false;
      } else {
        state.sidebarOff = true;
      }
    },

    toggleNavLInks: (state, action) => {
      const links = Object.keys(state.navigationLinks);

      links.forEach((link) => {
        console.log(link, action.payload);
        if (link === action.payload) {
          state.navigationLinks[link] = true;
        } else {
          state.navigationLinks[link] = false;
        }
      });

      console.log(state.navigationLinks.becomeAnIntern);
    },
  },
});

export const { toggleSideBar, toggleNavLInks } = navigationSlice.actions;

export default navigationSlice.reducer;
