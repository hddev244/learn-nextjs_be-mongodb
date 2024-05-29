import { Schema } from "mongoose";

export interface Account {
    _id?: any;
    roles: any[];
    name: string;
    email: string;
    password: string;
}