import express from 'express';

const app: express.Application = express();

app.get('/',(req, res) => {
    console.log(req);
    res.send({hi: 'Yes'});
});

const PORT:string|number|undefined = process.env.PORT || 5000;


app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}`);
});