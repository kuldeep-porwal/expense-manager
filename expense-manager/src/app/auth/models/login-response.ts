import { BaseApiResponse } from 'src/app/core/models';

import { UserTokenDetail } from './user-token-detail';

export default interface LoginResponse extends BaseApiResponse {
    userName: string;
    tokenInfo: UserTokenDetail;
}
