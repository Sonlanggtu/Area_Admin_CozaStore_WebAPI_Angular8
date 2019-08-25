export class LoggedInUser{
    constructor(public access_token: string, username: string,
        fullname: string, email: string, avatar: string, roles: string, permissions: string){
            this.access_token = access_token;
            this.id = this.id;
            this.username = username;
            this.fullname = fullname;
            this.email = email;
            this.avatar = avatar;
            this.roles = roles;
            this.permissions = permissions;
            

    }

    public id : string;
   // public access_token: string;
    public username: string;
    public fullname: string;
    public email: string;
    public avatar: string;
    public permissions: string;
    public roles: string;
}