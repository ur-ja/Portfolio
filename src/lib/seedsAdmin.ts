import { NextResponse } from 'next/server';

export function getSeedsAdminKey(): string | undefined {
  return process.env.SEEDS_ADMIN_KEY;
}

export async function verifySeedsAdminKey(
  request: Request,
): Promise<NextResponse | null> {
  const adminKey = getSeedsAdminKey();
  if (!adminKey) {
    return NextResponse.json({ error: 'Admin actions are not configured.' }, { status: 503 });
  }

  const body = (await request.json()) as { adminKey?: string };
  if (body.adminKey !== adminKey) {
    return NextResponse.json({ error: 'Invalid key.' }, { status: 401 });
  }

  return null;
}
