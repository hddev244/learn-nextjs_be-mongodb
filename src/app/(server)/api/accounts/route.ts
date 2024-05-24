// Accout routes for the API (GET, POST, PUT, DELETE). routes.ts for AccountModel use accountService.ts to handle CRUD operations.

import { NextResponse } from "next/server";
import AccountService from "../../Service/AccoutService";

const service = new AccountService();

export async function GET(): Promise<NextResponse>{
  let res =  await service.getAccounts();
  return NextResponse.json(res);
}

export async function POST(req: Request): Promise<NextResponse>{
    const dt:Account = await req.json();
    try {
        const res = await service.createAccount(dt);
        return NextResponse.json(res);
      } catch (err: any) {
        return NextResponse.json({ errMsg: err.message });

      }
}

