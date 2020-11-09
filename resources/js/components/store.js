import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'

import oauthReducer from "./oauth/oauthSlice";
import sideNavReducer from "./elements/navbars/sideNavSlice";

export default configureStore({
    reducer: {
        oauth: oauthReducer,
        sideNav: sideNavReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
     }).concat(logger),
});
