// class accoutservice handles CURD actions for the account mongoDB collection, use mongoose to interact with the database

import mongoose from "mongoose";
import AccountModel from "../_models/AccountModel";

export default class AccountService {
    // create a new account
    async createAccount(account: Account) {
        const accountExist = await AccountModel.findOne({ email: account.email });
        if (accountExist) {
            throw new Error('Email already exists');
        }
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
        return await AccountModel.findByIdAndUpdate(id, account, { new: true });
    }

    // delete account by id
    async deleteAccount(id: string) {
        return await AccountModel.findByIdAndDelete(id);
    }
}
