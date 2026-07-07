import { NextResponse } from 'next/server';
import { verifySeedsAdminKey } from '../../../../lib/seedsAdmin';
import { deleteSeed } from '../../../../lib/seeds';

export const dynamic = 'force-dynamic';

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } },
) {
  try {
    const authError = await verifySeedsAdminKey(request);
    if (authError) return authError;

    const deleted = await deleteSeed(params.id);
    if (!deleted) {
      return NextResponse.json({ error: 'Seed not found.' }, { status: 404 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Could not delete seed.' }, { status: 500 });
  }
}
