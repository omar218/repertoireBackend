const { response } = require('express')
const http = require('http')
const express = express()
const cors = cors()


app.use(express.json())
app.use(cors)

let persons = [
    {
        id:1,
        name:'fall',
        number:'47643420'
    },

    {
        id:2,
        name:'kouassi',
        number:'58659552'
    },

    {
        id:3,
        name:'kouakou',
        number:'78524625'
    },

    {
        id:4,
        name:'konan',
        number:'55482365'
    },


]

const app = http.createServer((request, response)=>{
    response.writeHead(200,{'Content-type':'text/plain'})    
})

app.get('/',(request, response) =>{
    response.send('<h1>serveur des personnes du repertoire</h1>')
})

app.get('/api/persons',(request,response)=>{
    response.json(persons)
})


app.post('/api/persons',(resquest,response)=>{
    const persons = resquest.body 
    console.log(persons)
    response.json(persons)
})


app.delete('/api/persons/:id',(request,response)=>{
    const id = persons(request.params.id)
    persons = persons.filter(persons=>persons.id !== id)
    response.status(200).end()
})




const PORT = 3001
app.listen(PORT)
console.log(`server runing $ {PORT}`)