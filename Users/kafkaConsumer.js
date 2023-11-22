const { Kafka } = require('kafkajs');
const User = require('./models/userModel');

const kafka = new Kafka({
  clientId: 'my-todo-app',
  brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'todo-group' });

const run = async () => {
  // Consuming
  await consumer.connect();
  await consumer.subscribe({ topic: 'todo-topic', fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        value: message.value.toString(),
      });
      const user = await User.findById(message.value.toString());
      user.completedTasks += 1;
      await user.save();
    },
  });
};

run().catch(console.error);
