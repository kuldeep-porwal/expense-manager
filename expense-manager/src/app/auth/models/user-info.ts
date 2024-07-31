import { UserTokenDetail } from './user-token-detail';

export interface UserInfo {
    userName: string;
    role: string;
    tokenInfo?: UserTokenDetail;
}
