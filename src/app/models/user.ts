export interface Roles {
    user?: boolean;
    admin?: boolean;
};

export interface UserInterface {
    id?: string;
    email?: string;
    password?: string;
    roles: Roles;
}