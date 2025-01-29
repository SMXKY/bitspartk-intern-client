import { configureStore } from "@reduxjs/toolkit";
import navigationReducer from "./navigation/navigation.slice";
import formProgressReducer from "./formProgress/formProgress";
import alertReducer from "./Alert/Alert.Slice";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    formProgress: formProgressReducer,
    alert: alertReducer,
  },
});
