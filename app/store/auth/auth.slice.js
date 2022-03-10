import { createSlice } from "@reduxjs/toolkit";

const initialState =  {
    isLoading: false,
    isAuthenticated: false,
    user: null,
    sessionToken: null,
    error: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        isLoading(state, action) {
            state.isLoading = !state.isLoading;
        },
        loginSuccess(state, action) {
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                user: action.payload.user,
                sessionToken: action.payload.user.sessionToken,
                error: null
            }
        },
        loginFailed(state, action) {
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }
        },
        logoutSuccess(state, action) {
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                user: null,
                sessionToken: null,
                error: null
            }
        },
    }
});

const { actions, reducer } = authSlice;
export const { isLoading, loginSuccess, loginFailed, logoutSuccess } = actions;
export default reducer;