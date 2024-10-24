export interface User {
    authUser: string
    authPass: string
}

export interface Profile {
    name: string
    email: string
    password: string,
    admin: 0 | 1,
}
export interface ProfileResponse {
    name: string
    email: string
    password: string
    id: string
    admin: 0|1
}

export interface Publisher {
  id: number;
  name: string;
  country: string;
  founded: number;
  website: string;
}
 export interface Credentials{
    email: string;
    pass: string;
 }

