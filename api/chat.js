export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const { messages, system } = await req.json();

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5-20251001',
      max_tokens: 1024,
      system: system || 'You are a helpful financial education assistant.',
      messages,
    }),
  });

  const data = await response.json();
  const reply = data.content?.map((b) => b.text || '').join('') || 'Error';

  return new Response(JSON.stringify({ reply }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
