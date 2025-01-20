```javascript
const { MongoClient } = require('mongodb');

const uri = "YOUR_MONGODB_URI"; // Replace with your MongoDB connection string

async function run() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    const database = client.db('mydatabase');
    const collection = database.collection('mycollection');

    const doc = { name: 'Document1', value: 1 };
    const result = await collection.insertOne(doc);
    console.log(`Inserted document with _id: ${result.insertedId}`);
  } catch (err) {
    console.error("Error inserting document:", err);
  } finally {
    // Ensures that the client will close when you finish/
    // or if you exit before your query completes
    await client.close();
  }
}
run().catch(console.dir);
```
This improved version includes a `try...catch` block to handle potential errors during the insertion process.  The `catch` block logs any errors to the console, providing valuable debugging information.  The `finally` block remains unchanged to ensure the database connection is closed regardless of success or failure.