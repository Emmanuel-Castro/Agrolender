const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;


/* MENU */
const menuRouter = express.Router();

menuRouter.use(express.static(path.join(__dirname, 'menu')));

menuRouter.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'menu', 'menu.html'));
});


/* LOAN REQUEST */
const loanRouter = express.Router();

loanRouter.use(express.static(path.join(__dirname, 'loan-request')));

loanRouter.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'loan-request', 'loan-request.html'));
});


/* CALCULATORS */
const calculatorRouter = express.Router();

calculatorRouter.use(express.static(path.join(__dirname, 'calculators')));

calculatorRouter.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'calculators', 'loan-calculator.html'));
});


// Routes
app.use('/menu', menuRouter);
app.use('/loan-request', loanRouter);
app.use('/calculator', calculatorRouter);


// Server
app.listen(PORT, () => console.log('Server Running...'));