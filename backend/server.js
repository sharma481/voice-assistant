const express = require("express");
const cors = require("cors");
const { openWebsite, searchGoogle } = require("./browser");
const { sendEmail } = require("./email");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/open", async (req, res) => {
  try {
    await openWebsite(req.body.site);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/search", async (req, res) => {
  try {
    await searchGoogle(req.body.query);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/send-email", async (req, res) => {
  try {
    await sendEmail(req.body.to, req.body.subject, req.body.text);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("✅ Backend running on http://localhost:5000"));
