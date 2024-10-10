import express from 'express';
import userRoutes from './routes/userRoutes.mjs';
import fs from 'fs';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.set('views', './views');
app.set('view engine', 'cat');









app.use('/user', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
