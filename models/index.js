module.exports = {
    User: require('./User'),
    Room: require('./Room'),
    Hotel: require('./Hotel'),
}

mongoose.connect( process.env.MONGODB_URI || "mongodb+srv://brian:brian@cluster0.ubtyygm.mongodb.net/?retryWrites=true&w=majority");
