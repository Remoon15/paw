import { NextResponse } from "next/server";
import connectDB from "../../database/connectToDB";
import Transaction from "../../database/models/transaction";


connectDB()
export async function GET (request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  const transaction = await Transaction.findOne({transaction_id: id})
  return NextResponse.json({transaction} , {status: 200})

}
