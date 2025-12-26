const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = process.env.Mongodb_URI;
dbName = process.env.DBNAME;
const collection = {
  PRODUCTS: "products",
};

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const dbConnect = async (CollectionName) => {
  return client.db(dbName).collection(CollectionName);
};
