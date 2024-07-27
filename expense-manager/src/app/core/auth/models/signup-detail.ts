export default class SignupDetail {
    userName: string;
    passWord: string;
    mobileNumber: string;

    constructor(uName: string, uPass: string, mob: string) {
        this.userName = uName;
        this.passWord = uPass;
        this.mobileNumber = mob;
    }
}
