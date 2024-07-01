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

export default app;
