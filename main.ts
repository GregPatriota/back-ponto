import * as restify from 'restify';

const server = restify.createServer({
    name: 'e-dot-api',
    version: '0.1.0'
})

server.get('/hello', (req, res, next) => {
    res.json({message: 'hello'})
    return next()
})

server.listen(3000, ()=>{
    console.log('API running on port 3000')
})