const PORT = 4321;
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const uRoutes = require('./router/userRoutes');
const postRoutes = require('./router/routes');
const server = express();


server.use(cors())
server.use(express.json())

server.use('/api/v1/auth/', uRoutes)
server.use('/api/v1/post/', postRoutes)

server.get('/', (req, res) => {
    res.status(200);
})




server.listen(PORT, ()=> {
    console.log(`LISTENING TO PORT : ${PORT }`)
})