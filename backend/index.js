const { Client } = require("pg");
const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

// PostgreSQL connection configuration
const client = new Client({
  user: "eric",
  host: "localhost",
  database: "dashboard",
  password: "admin123",
  port: 5432,
});

client.connect();

//middleware
app.use(cors());
app.use(express.json());

// INCOME

// GET all incomes
app.get("/income", async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM income");
    res.status(200).json({ income: result.rows });
  } catch (error) {
    console.error("Error fetching incomes:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

// POST a new income
app.post("/income", async (req, res) => {
  const { source, amount } = req.body;
  try {
    const { rows } = await client.query(
      "INSERT INTO income (source, amount) VALUES ($1, $2) RETURNING *",
      [source, amount]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error("Error creating income:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// PUT update an existing income by ID
app.put("/income/:id", async (req, res) => {
  const id = req.params.id;
  const { source, amount } = req.body;
  try {
    const { rows } = await client.query(
      "UPDATE income SET source = $1, amount = $2 WHERE id = $3 RETURNING *",
      [source, amount, id]
    );
    res.json(rows[0]);
  } catch (error) {
    console.error("Error updating income:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// DELETE an existing income by ID
app.delete("/income/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const { rows } = await client.query(
      "DELETE FROM income WHERE id = $1 RETURNING *",
      [id]
    );
    res.json(rows[0]);
  } catch (error) {
    console.error("Error deleting income:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// EXPENSES

// GET Expenses by Category
app.get("/expenses/:category", async (req, res) => {
  try {
    const category = req.params.category;

    // Query the database to retrieve expenses for the specified category
    const result = await client.query(
      "SELECT * FROM expenses WHERE category = $1",
      [category]
    );

    // Send the retrieved expenses as a JSON response
    res.status(200).json({ expenses: result.rows });
  } catch (error) {
    console.error("Error retrieving expenses:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

// GET all Expenses
app.get("/expenses", async (req, res) => {
  try {
    // Query the database to retrieve all expenses
    const result = await client.query("SELECT * FROM expenses");

    // Send the retrieved expenses as a JSON response
    res.status(200).json({ expenses: result.rows });
  } catch (error) {
    console.error("Error retrieving expenses:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Create Expense
app.post("/expenses", async (req, res) => {
  try {
    // Extract expense data from request body
    const { name, amount, category } = req.body;

    // Validate the incoming data
    if (!name || !amount || !category) {
      return res
        .status(400)
        .json({ message: "Name, amount, and category are required." });
    }
    if (isNaN(parseFloat(amount)) || !isFinite(amount)) {
      return res
        .status(400)
        .json({ message: "Amount must be a valid number." });
    }

    // Insert the expense data into the database
    const result = await client.query(
      "INSERT INTO expenses (name, amount, category) VALUES ($1, $2, $3) RETURNING *",
      [name, amount, category]
    );

    // Send a success response back to the client
    res.status(201).json({
      message: "Expense created successfully",
      expense: result.rows[0],
    });
  } catch (error) {
    console.error("Error creating expense:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Edit Expense
app.put("/expenses/:id", async (req, res) => {
  try {
    const { id } = req.params; // Extract expense ID from request parameters
    const { name, amount, category } = req.body; // Extract updated data from request body

    // Validate the incoming data
    if (!name || !amount || !category) {
      return res
        .status(400)
        .json({ message: "Name, amount, and category are required." });
    }
    if (isNaN(parseFloat(amount)) || !isFinite(amount)) {
      return res
        .status(400)
        .json({ message: "Amount must be a valid number." });
    }

    // Update the expense data in the database
    const result = await client.query(
      "UPDATE expenses SET name = $1, amount = $2, category = $3 WHERE id = $4 RETURNING *",
      [name, amount, category, id]
    );

    // Check if the expense was found and updated
    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Expense not found" });
    }

    // Send a success response back to the client
    res.status(200).json({
      message: "Expense updated successfully",
      expense: result.rows[0],
    });
  } catch (error) {
    console.error("Error updating expense:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Delete Expense
app.delete("/expenses/:id", async (req, res) => {
  const expenseId = req.params.id;

  try {
    // Delete the expense from the database
    const result = await client.query(
      "DELETE FROM expenses WHERE id = $1 RETURNING *",
      [expenseId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Expense not found." });
    }

    // Send a success response back to the client
    res.json({
      message: "Expense deleted successfully",
      expense: result.rows[0],
    });
  } catch (error) {
    console.error("Error deleting expense:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// GOALS
// GET all goals
app.get("/goals", async (req, res) => {
  try {
    const result = await client.query("SELECT * FROM goals");
    res.status(200).json({ goals: result.rows });
  } catch (error) {
    console.error("Error fetching goals:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
});

// POST a new goal
app.post("/goals", async (req, res) => {
  const { name, target_amount, target_weeks, selectedImageId } = req.body;
  try {
    const { rows } = await client.query(
      "INSERT INTO goals (name, target_amount, target_weeks, selectedImageId) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, target_amount, target_weeks, selectedImageId]
    );
    res.status(201).json(rows[0]);
  } catch (error) {
    console.error("Error creating goal:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// PUT update an existing goal by ID
app.put("/goals/:id", async (req, res) => {
  const id = req.params.id;
  const { saved_amount } = req.body; // Expect only savedAmount in request body

  try {
    const { rows } = await client.query(
      "UPDATE goals SET saved_amount = $1 WHERE id = $2 RETURNING *",
      [saved_amount, id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "Goal not found" });
    }

    res.json(rows[0]); // Return the updated goal data
  } catch (error) {
    console.error("Error updating goal:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// DELETE an existing goal by ID
app.delete("/goals/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const { rows } = await client.query(
      "DELETE FROM goals WHERE id = $1 RETURNING *",
      [id]
    );
    res.json(rows[0]);
  } catch (error) {
    console.error("Error deleting goal:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
