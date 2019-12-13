const mongoose = require("../database");
const saltRounds = 10;
const schema = {
    name: { type: mongoose.SchemaTypes.String, required: true },
    email: { type: mongoose.SchemaTypes.String, required: true },
    password: {
        type: mongoose.SchemaTypes.String,
        required: true,
        select: false,
        trim: true
    }
};
const collectionName = "user"; // Name of the collection of documents
const userSchema = mongoose.Schema(schema);
userSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
    next();
});
const User = mongoose.model(collectionName, userSchema);
module.exports = User;