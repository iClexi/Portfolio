export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const ADMIN_LAN_IP = process.env.PORTFOLIO_ADMIN_IP ?? '192.168.68.83';

export function GET(request: Request) {
  const h = request.headers;
  // Si la petición pasó por Cloudflare, los headers cf-* están presentes.
  // En ese caso jamás somos "admin local", aunque alguien envíe X-Forwarded-For falso.
  if (h.get('cf-ray') || h.get('cf-connecting-ip')) {
    return Response.json({ eligible: false });
  }
  const xff = h.get('x-forwarded-for') ?? '';
  const claim = xff.split(',')[0].trim();
  return Response.json({ eligible: claim === ADMIN_LAN_IP });
}
