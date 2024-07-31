import { UserInfo } from '../models';

export interface AuthState {
    userInfo?: UserInfo;
}

export const _initialState: AuthState = {
    userInfo: undefined
};
