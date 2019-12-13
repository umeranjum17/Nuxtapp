
const mongoose = require("mongoose");
const dbPath = "mongodb+srv://umer:rpkcAS2kYvKwEzdF@cluster0-twrhf.mongodb.net/nuxtDB";
mongoose.connect(dbPath, {
    useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", () => {
    console.log("> error occurred from the database");
});
db.once("open", () => {
    console.log("> successfully opened the database");
});
module.exports = mongoose;
