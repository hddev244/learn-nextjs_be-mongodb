import mongoose, { Schema } from "mongoose";

const accountSchema = new Schema({
    _id: Schema.Types.ObjectId,
    roles : {
        type: Array,
        required: true
    },
    name : {
        type: String,
        unique  : true,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique  : true
    },
    password : {
        type: String,
        required: true
    }
}, { timestamps: true});

const AccountModel = mongoose.model('Account', accountSchema);  

export default AccountModel;