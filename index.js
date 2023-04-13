const express = require('express');
const bodyParser = require('body-parser');
const EmployeeDetails = require('./routes/employee')
const app = express();

app.use(bodyParser.json());

app.use(EmployeeDetails);

app.listen(3001 , ()=>{
    console.log('server is running on port 3001');
})