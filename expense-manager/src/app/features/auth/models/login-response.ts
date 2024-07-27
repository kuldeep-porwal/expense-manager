import { BaseApiResponse } from 'src/app/core/models';

export default interface LoginResponse extends BaseApiResponse {
    userName: string;
    expireAt: number | undefined;
}
