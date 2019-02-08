import express from 'express';
import { passPortCall } from './services/passport';
import { authRoutes } from './routes/authRoutes';

const app: express.Application = express();
passPortCall();
authRoutes(app);

const PORT:string|number|undefined = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}`);
});
