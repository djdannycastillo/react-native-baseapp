const selectAuth = state => state.auth;
export const selectIsAuthenticated = state => state.auth.isAuthenticated;
export const selectCurrentUser = state => state.auth.user;
export const selectError = state => state.auth.error;

export default selectAuth;