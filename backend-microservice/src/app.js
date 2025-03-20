const express = require("express");
const cors = require("cors");
const { authenticate } = require("./config/apiClient");


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", require("./routes/userRoutes"));
app.use("/api", require("./routes/postRoutes"));

const PORT = 5000;

authenticate().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
