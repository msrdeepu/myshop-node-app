const express = require("express");

const PORT = 5000;

const app = express();

// importing routes form OfflineAudioCompletionEvent.js
const adminRoutes = require("./routes/admin");
const userRoutes = require("./routes/user");

// using imported routes
app.use("/admin", adminRoutes);
app.use(userRoutes);
app.use((req, res, next) => {
  res.status(404).send("<h1>ERROR 404 NOT FOUND. PLEASE CHECK URL</h1>");
});

app.listen(PORT, () => {
  console.log(`The Server is Started in the port number ${PORT}`);
});
