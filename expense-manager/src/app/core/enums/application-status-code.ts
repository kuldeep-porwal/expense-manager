export enum ApiStatusCode {
    Ok = 200,
    Error = 999
}

export const isOk = (status: number) => status === ApiStatusCode.Ok;
