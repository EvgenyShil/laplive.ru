import { z } from 'zod';
import { NextResponse } from 'next/server';

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const parsed = ContactSchema.parse(data);

    // TODO: интеграция — почта/CRM/webhook
    // const webhook = process.env.CONTACT_INBOX_WEBHOOK;
    // if (webhook) await fetch(webhook, { method: 'POST', body: JSON.stringify(parsed) });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message ?? 'Validation error' }, { status: 400 });
  }
}
