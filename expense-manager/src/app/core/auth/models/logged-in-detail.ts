export default class LoggedInDetail {
    userName: string;
    expireAt: number | undefined;
    constructor(uName: string, expiredAt: number | undefined = undefined) {
        this.userName = uName;
        this.expireAt = expiredAt ?? new Date().getSeconds() + 24 * 60 * 60;
    }
}
