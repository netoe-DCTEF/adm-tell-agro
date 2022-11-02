const express = require("express");
const path = require('path');
const PORT = 3000;
const app = express();
const adminRouter = require('./routes/adm/adminRoutes');



app.use(express.static(path.join(__dirname + '/public')));
app.set('view engine','ejs');
app.use('/adm',adminRouter);

app.get('/',(req,res)=>{
    res.send('welcome to the fucking jungle');
});

app.listen(PORT,()=>
{
    console.log('CLOG-Running in port:' + PORT);
});
