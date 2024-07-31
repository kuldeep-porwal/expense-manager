export enum UserRole {
    Admin = 'Admin'
}

export const isAdmin = (role: string) => role === UserRole.Admin;
