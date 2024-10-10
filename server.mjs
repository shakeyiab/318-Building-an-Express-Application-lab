import express from 'express';
import userRoutes from './routes/userRoutes.mjs';
import fs from 'fs';

const app = express();
const PORT = 3000;
app.set('view engine', 'ejs');
app.set('view engine', 'styles\styles2.css');
app.get('/', (req, res) => {
    res.send('Hello i dont understand how this didnt work  !');
});

app.set('views', './views');
app.set('stles', './styles/styles2.html');
const Middleware = function(req,res,next){
    console.log("thanks for stopping by")
};
app.use(Middleware);
app.use((err, req, res, next) => {
  res.status(400).send(err.message);
})
const downloadButton =document.createElementbyid("downloadButton")
document.getElementById('downloadButton').addEventListener('click', function() {
    window.location.href = "styles\styles2.html";
});







app.use('/user', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
