import Express from "express";
import cors from "cors";
import multer from "multer";
const app = Express();
const upload = multer({ dest: "./files/" });

app.use(cors());
app.get("/", (req, res) => {
  return res.send("Hello Hono!");
});

app.get("/timeout", async (req, res) => {
  const from = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });
  await new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 120 * 1000);
  });
  const to = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" });

  return res.json({ from, to });
});

app.get("/upload", upload.any(), async (req, res) => {
  console.log(req.files);

  return res.json({});
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
