export type User = {
    id: string;
    name: string;
    email: string;
    profilePhoto?:string;
    mobileNumber?: number;
    role: Role;
    createdAt: Date;
    updatedAt: Date;
  };
  
 export enum Role {
    USER = "USER",
    ADMIN = "ADMIN",
  }
  
  export type Product = {
    id: string;
    name: string;
    description: string;
    price: number;
    previousPrice?: number;
    tags?: string;
    category: string;
    rating: number;
    createdAt: Date;
    updatedAt: Date;
  };