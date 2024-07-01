import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.get("/timeout", async (c) => {
  const from = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
  await new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 120 * 1000);
  });
  const to = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });

  return c.json({ from, to });
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
