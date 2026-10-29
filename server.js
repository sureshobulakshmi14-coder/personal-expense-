const express = require("express");
const cors = require("cors");

const expenseRoutes = require("./routes/expenseRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/expenses", expenseRoutes);

app.get("/", (req, res) => {
    res.send("Expense Tracker Backend is running!");
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
