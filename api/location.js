export default async function handler(req, res) {
  const response = await fetch("http://152.53.54.225:35260/location", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req.body),
  });

  const text = await response.text();
  res.status(200).send(text);
}
