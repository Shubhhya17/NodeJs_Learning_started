let express = require('express');
let app = express();
let port =  7900;
app.get('/', (req, res)=>
{
    res.send('server is running fine')
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
})