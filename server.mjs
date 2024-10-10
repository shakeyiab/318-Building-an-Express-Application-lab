import express from 'express';
import userRoutes from './routes/userRoutes.mjs';
import fs from 'fs';

const app = express();
const PORT = 3000;
app.use(express.static('./styles'));
app.get('/', (req, res) => {
    res.send('Hello !');
});

app.set('views', './views');

const Middleware = function(req,res,next){
    console.log("thanks for stopping by")
};
app.use(Middleware);
app.use((err, req, res, next) => {
  res.status(400).send(err.message);
})








app.use('/user', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
