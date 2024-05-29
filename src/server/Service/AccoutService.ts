// class accoutservice handles CURD actions for the account mongoDB collection, use mongoose to interact with the database

import mongoose, { Schema } from "mongoose";
import AccountModel from "../models/AccountModel";
import { Account } from "../types/Account";

const ObjectId = mongoose.Types.ObjectId;

export default class AccountService {
    // const ObjectId = mongoose.Types.ObjectId;
    // create a new account
    async createAccount(account: Account) {
        const accountExist = await AccountModel.findOne({ email: account.email });
        if (accountExist) {
            throw new Error('Email already exists');
        }

        account._id = new ObjectId();
        return await AccountModel.create(account);
    }

    // get all accounts
    async getAccounts() {
        return await AccountModel.find();
    }

    // get account by id
    async getAccountById(id: string) {
        return await AccountModel.findById(id);
    }

    // get account by email
    async getAccountByEmail(email: string) {
        return await AccountModel.findOne({ email: email });
    }

    // update account by id
    async updateAccount(id:string, account: Account) {
        return await AccountModel.findByIdAndUpdate(
                                    {_id : new ObjectId(id)},
                                    {roles : account.roles},
                                    { new: true });
    }

    async updateRoles(id:string, roles: string[]) {
        return await AccountModel.findByIdAndUpdate(
                                    {_id : new ObjectId(id)},
                                    {roles : roles},
                                    { new: true });
    }

    // delete account by id
    async deleteAccount(id: string): Promise<any> {
        return await AccountModel.findByIdAndDelete({
            _id: new ObjectId(id)
        });
    }
}
