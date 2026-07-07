import { NextResponse } from 'next/server';
import { bloomSeed } from '../../../../../lib/seeds';
import { verifySeedsAdminKey } from '../../../../../lib/seedsAdmin';

export const dynamic = 'force-dynamic';

export async function POST(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const authError = await verifySeedsAdminKey(request);
    if (authError) return authError;

    const seed = await bloomSeed(params.id);
    if (!seed) {
      return NextResponse.json(
        { error: 'Seed not found or not ready to bloom yet.' },
        { status: 404 },
      );
    }

    return NextResponse.json({ seed });
  } catch {
    return NextResponse.json({ error: 'Could not bloom seed.' }, { status: 500 });
  }
}
