const express = require('express');

const app = express();

//define port
const port = 8000;


app.listen(port,(err)=>{
    if(err){
        console.log('TRY again...',err);
        //interpolation learn
        console.log(`Error is running the server: ${err}`);
    }

    console.log(`${port} Server looking Cool...🦄 🐢 🙆...`);

})