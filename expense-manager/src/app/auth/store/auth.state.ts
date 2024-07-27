export interface AuthState {
    userName?: string;
    isLoggedIn: boolean;
}

export const _initialState: AuthState = {
    isLoggedIn: false
};
