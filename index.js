const express = require('express');
const pool = require("./pool.js");

let port = 5050; // 新浪云中的NodeJS只支持5050端口
let app = express();

app.listen(port, ()=>{
    console.log('Server is Listening:', port);
});
app.use(express.static('static'));
app.get('/user', (req, res)=>{
    pool.query('SELECT * FROM xz_user',(err, result)=>{
        if (err) throw err;
        // 来自任何客户端都允许访问
        res.set('Access-Control-Allow-Origin', "*");
        res.json(result);
    });

});
