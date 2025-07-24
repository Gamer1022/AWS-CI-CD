const app = require("./app");
const config = require("dotenv").config;

config();

const PORT = process.env.PORT || 5001; // Changed from 5000 to 5001

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});