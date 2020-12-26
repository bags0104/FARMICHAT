const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 5000;
const {MONGOURI} = require('./config/keys');

require('./models/user');
app.use(express.json())
app.use(require('./routes/auth'));


mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
    console.log("mongo db connected");
});
mongoose.connection.on('error', (err) => {
    console.log("error connecting", err);
})

// app.get('/', (req, res) => {
//     console.log("HELLOOO!!");
// });

app.listen(PORT, () => {
    console.log("YESS?", PORT);
});