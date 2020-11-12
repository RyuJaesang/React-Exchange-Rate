const express = require('express');
const path = require('path');

const app = express();

// app.get('/favicon.ico', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build', 'favicon.ico'));
// })

// app.use((req, res) => {
//     res.sendFile(path.join(__dirname, '../build', 'index.html'));
// })

app.use(
    express.static(
        path.join(__dirname, '../build')
    )
);

app.listen(8000, () => {
    console.log('서버 시작');
})