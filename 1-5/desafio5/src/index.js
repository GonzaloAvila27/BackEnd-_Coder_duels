const server = require('./services/server')

const port = 3788;
server.listen(port, () => {
    console.log(`Server listening port ${port} xD`);
})

