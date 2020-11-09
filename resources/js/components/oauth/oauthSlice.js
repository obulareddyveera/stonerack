import { createSlice } from "@reduxjs/toolkit";

export const oauthSlice = createSlice({
    name: "oauth",
    initialState: {
        staff: {},
        statusCode: 0
    },
    reducers: {
        addStaff: (state, action) => {
            return {
                ...state,
                ...action.payload
            };
        },
        authorizationCheck: (state, action) => {
            return {
                statusCode: 1,
                date: new Date().getTime(),
                ...action.payload
            };
        },
        getAllStaff: (state, action) => {
            return {
                ...state,
                ...action.payload
            };
        }
    }
});

export const { addStaff, authorizationCheck, getAllStaff } = oauthSlice.actions;

export const doAuthorizationCheck = profile => async dispatch => {
    const { googleId } = profile;
    fetch(`/api/srsl/staff/${googleId}`, {
        method: "get"
    })
        .then(response => {
            return response.json();
        })
        .then(data => {
            let response = {...profile}
            if (data) {
                response = {...response, ...data};
            }
            dispatch(authorizationCheck({ profile: response }));
        })
        .catch(err => {
            // Do something for an error here
        });
};

export const addStaffAsync = params => async dispatch => {
    fetch("/api/srsl/staff", {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json, text-plain, */*",
            "X-Requested-With": "XMLHttpRequest"
        },
        method: "post",
        credentials: "same-origin",
        body: JSON.stringify(params)
    })
        .then(data => {
            dispatch(addStaff(data));
        })
        .catch(function(error) {
            console.log(error);
        });
};

export const oauthSelector = state => state.oauth;

export default oauthSlice.reducer;
