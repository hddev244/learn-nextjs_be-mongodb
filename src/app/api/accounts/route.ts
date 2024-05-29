// Accout routes for the API (GET, POST, PUT, DELETE). routes.ts for AccountModel use accountService.ts to handle CRUD operations.

import { NextRequest, NextResponse } from "next/server";
import AccountService from "@/server/Service/AccoutService";
import { Account } from "@/server/types/Account";
import { Types } from "mongoose";

const service = new AccountService();

export async function GET(): Promise<NextResponse> {
  try {
    const res = await service.getAccounts();
    return NextResponse.json({ messge: 'Accounts fetched', data: res }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ errMsg: err.message }, { status: 500 });
  }
}

export async function POST(req: Request): Promise<NextResponse> {
  const body: Account = await req.json();
  try {
    const res = await service.createAccount(body);
    return NextResponse.json({ msg: 'Account created', data: res }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ errMsg: err.message }, { status: 400 });

  }
}

export async function PUT(req: Request): Promise<NextResponse> {
  try {
    const body = await req.json();

    const { userId, newRoses }: { userId: string, newRoses: string[] } = body;

    if (!userId || !newRoses) {
      return NextResponse.json({ errMsg: 'Missing required fields' }, { status: 400 });
    }

    if (!Types.ObjectId.isValid(userId)) {
      return NextResponse.json({ errMsg: 'Invalid user ID' }, { status: 400 });
    }

    const updateAccount = await service.updateRoles(userId, newRoses);

    if (!updateAccount) {
      return NextResponse.json({ errMsg: 'Account not found' }, { status: 404 });
    }

    return NextResponse.json({ msg: 'Account updated', data: updateAccount }, { status: 200 });

  } catch (err: any) {
    return NextResponse.json({ errMsg: err.message }, { status: 500 });

  }
}

export const PATCH = async (req: Request): Promise<NextResponse> => {
  console.log('PATCH');
  try {
    const body = await req.json();

    const { userId, newRoles }: { userId: string, newRoles: string[] } = body;

    if (!userId || !newRoles) {
      return NextResponse.json({ errMsg: 'Missing required fields' }, { status: 400 });
    }

    if (!Types.ObjectId.isValid(userId)) {
      return NextResponse.json({ errMsg: 'Invalid user ID' }, { status: 400 });
    }

    const updateAccount = await service.updateRoles(userId, newRoles);

    if (!updateAccount) {
      return NextResponse.json({ errMsg: 'Account not found' }, { status: 404 });
    }

    return NextResponse.json({ msg: 'Account updated', data: updateAccount }, { status: 200 });

  } catch (err: any) {
    return NextResponse.json({ errMsg: err.message }, { status: 500 });

  }
}

export const DELETE = async (req: Request): Promise<NextResponse> => {
  try {
    const  {searchParams} = new URL(req.url);

    const userId  = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json({ errMsg: 'Missing required fields' }, { status: 400 });
    }

    if (!Types.ObjectId.isValid(userId)) {
      return NextResponse.json({ errMsg: 'Invalid user ID' }, { status: 400 });
    }

   const deletedAccount =  service.deleteAccount(userId);

   if (!deletedAccount) {
      return NextResponse.json({ errMsg: 'Account not found' }, { status: 404 });
   }  

    return NextResponse.json({ msg: 'Account deleted', data: deletedAccount }, { status: 200 });
  } catch (err: any) {
    return NextResponse.json({ errMsg: err.message }, { status: 500 });
  }
}

