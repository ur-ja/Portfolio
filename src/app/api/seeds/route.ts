import { NextResponse } from 'next/server';
import { listSeeds, plantSeed } from '../../../lib/seeds';

export const dynamic = 'force-dynamic';

export async function GET() {
  const seeds = await listSeeds();
  return NextResponse.json({ seeds });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const title = typeof body.title === 'string' ? body.title.trim() : '';
    const gardener = typeof body.gardener === 'string' ? body.gardener.trim() : '';

    if (!title || title.length < 3) {
      return NextResponse.json(
        { error: 'Please describe your idea in a few words.' },
        { status: 400 },
      );
    }

    if (title.length > 120) {
      return NextResponse.json(
        { error: 'Keep your idea under 120 characters.' },
        { status: 400 },
      );
    }

    const seed = await plantSeed(title, gardener);
    return NextResponse.json({ seed }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Could not plant seed.' }, { status: 500 });
  }
}
