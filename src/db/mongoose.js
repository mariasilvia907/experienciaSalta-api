const mongoose = require('mongoose');
const uri = "mongodb+srv://mariasilvia907:JKZHloMPpbKjnxQH@cluster0.jgsdp.mongodb.net/ExperienciaSalta?retryWrites=true&w=majority";

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});