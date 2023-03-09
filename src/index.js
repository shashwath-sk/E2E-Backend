const express =  require('express');
const contentRouter =require('./routes/contentRoutes.js');

const app = express();
const port = 5050;


app.use(express.json());
app.use('/', contentRouter);


app.get('/', (req, res) => {
    res.send('We have a request at the root');
});

app.listen(port, () => {
    console.log(`The server is listening on port : ${port}`);
});