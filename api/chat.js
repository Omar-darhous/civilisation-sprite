import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  try {
    const { message } = req.body || {};
    if (!message) return res.status(400).json({ error: "Missing message" });

    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "system",
          content: `
You are "Civilisation Spirit", a tourism assistant for EGYPT only.

Scope:
- Only answer questions related to tourism in Egypt: attractions, itineraries, transportation tips, best times to visit, cultural etiquette, safety basics, and budget guidance.
- If the user asks about anything unrelated to Egypt tourism (sports, coding, politics outside travel context, etc.), politely refuse and redirect to Egypt travel topics.

Style:
- Friendly, concise, and practical.
- Ask 1 short follow-up question ONLY if needed (e.g., city, days, budget). Otherwise give a best-effort answer.

Output format (when recommending places):
- Provide 5–8 suggestions max
- Include: place name + short reason + suggested duration
- If asked for an itinerary: morning/afternoon/evening

Project context:
- If user asks about booking: explain it's a demo UI for a graduation project, not connected to real hotel systems.
`,
        },
        { role: "user", content: message },
      ],
    });

    const text =
      response.output_text ||
      "Sorry, I couldn't generate a response right now.";
    return res.status(200).json({ reply: text });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
}
