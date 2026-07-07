import { NextResponse } from 'next/server';
import { waterSeed } from '../../../../../lib/seeds';

export const dynamic = 'force-dynamic';

export async function POST(
  _request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const seed = await waterSeed(params.id);
    if (!seed) {
      return NextResponse.json({ error: 'Seed not found.' }, { status: 404 });
    }
    return NextResponse.json({ seed });
  } catch {
    return NextResponse.json({ error: 'Could not water seed.' }, { status: 500 });
  }
}
