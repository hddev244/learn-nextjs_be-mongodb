import dbConnect from "./server/libs/mongodb";

export async function register() {
    await dbConnect();
}