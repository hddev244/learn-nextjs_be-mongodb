import dbConnect from "./app/(server)/libs/mongodb";
export async function register() {
    await dbConnect();
}