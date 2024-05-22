import dbConnect from "./app/(server)/_libs/mongodb";
export async function register() {
    await dbConnect();
}