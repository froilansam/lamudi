const { MongoClient } = require("mongodb");
const client = new MongoClient(
  "mongodb+srv://lamudi:lamudi@cluster0.cazz3.mongodb.net/auth?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

exports.handler = async function (event) {
  console.log("Event: ", event);

  try {
    await client.connect();
    await client.db("auth").collection("creds").insertOne({
      username: "user",
      password: "password",
      username1: "user1",
      password1: "password1",
    });
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
};
