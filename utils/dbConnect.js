const { MongoClient, ServerApiVersion } = require("mongodb");

function dbConnect() {
    const uri = `mongodb+srv://furnitano-admin:${process.env.DB_PASS}@furnitano.ykxho.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    console.log('DB connected!')
}

module.exports = dbConnect;