const expenses = [
  {
    id: '1',
    category: 'Food',
    type: 'Dining Out',
    amount: 25.5,
    date: '2023-10-26'
  },
  {
    id: '2',
    category: 'Transportation',
    type: 'Fuel',
    amount: 40.0,
    date: '2023-10-25'
  }
];

const resolvers = {
  Query: {
    expenses: () => expenses,
  },
  Mutation: {
    addExpense: (_, { category, type, amount, date }) => {
      const expense = {
        id: expenses.length + 1,
        category,
        type,
        amount,
        date,
      };
      expenses.push(expense);
      return expense;
    },
  },
};

module.exports = resolvers;



