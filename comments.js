// Create web server
const express = require("express");
const app = express();
// Create a route for the comments
app.get("/comments", (req, res) => {
  res.json({ comments: ["Hello", "Hi", "How are you?"] });
});
// Start the server
app.listen(4001, () => {
  console.log("Comments service started on port 4001");
});
