const express = require('express');
const mongoose = require('mongoose');
const app = express();
const todoRoutes = require('./routes/todoRoutes');

const db = 'mongodb://localhost:27017/todo-app';
async function connectToMongoDB() {
  let dbOptions = {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  };
  await mongoose.connect(db, dbOptions);
  console.log('DB connected successfully...');
}

app.use(express.json());
app.use('/todos', todoRoutes);

connectToMongoDB()
  .then(() => {
    // Start Server
    const port = process.env.PORT || 4000;
    app.listen(port, () => {
      console.log(`Running on port: ${port}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1);
  });
