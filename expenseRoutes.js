const express = require("express");

const router = express.Router();

let expenses = [
    {
        id: 1,
        title: "Food",
        amount: 150,
        category: "Food"
    },
    {
        id: 2,
        title: "Transport",
        amount: 80,
        category: "Transport"
    },
    {
        id: 3,
        title: "Shopping",
        amount: 500,
        category: "Shopping"
    }
];

// Get all expenses
router.get("/", (req, res) => {
    res.json(expenses);
});

// Add expense
router.post("/", (req, res) => {
    const { title, amount, category } = req.body;

    if (!title || !amount || !category) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const newExpense = {
        id: Date.now(),
        title,
        amount: Number(amount),
        category
    };

    expenses.push(newExpense);

    res.status(201).json(newExpense);
});

// Update expense
router.put("/:id", (req, res) => {
    const id = Number(req.params.id);

    const expense = expenses.find(item => item.id === id);

    if (!expense) {
        return res.status(404).json({
            message: "Expense not found"
        });
    }

    const { title, amount, category } = req.body;

    expense.title = title;
    expense.amount = Number(amount);
    expense.category = category;

    res.json(expense);
});

// Delete expense
router.delete("/:id", (req, res) => {
    const id = Number(req.params.id);

    const index = expenses.findIndex(item => item.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Expense not found"
        });
    }

    expenses.splice(index, 1);

    res.json({
        message: "Expense deleted successfully"
    });
});

module.exports = router;
