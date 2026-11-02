import { buildProfileJson } from '../../../lib/machineReadable';

export const dynamic = 'force-static';

export function GET() {
  return Response.json(buildProfileJson(), {
    headers: {
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
