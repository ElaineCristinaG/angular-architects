export interface User {
    authUser: string
    authPass: string
}

export interface Profile {
    name: string
    email: string
    password: string
}
export interface ProfileResponse {
    name: string
    email: string
    password: string
    id: string
}

export interface Publisher {
  id: number;
  name: string;
  country: string;
  founded: number;
  website: string;
}
