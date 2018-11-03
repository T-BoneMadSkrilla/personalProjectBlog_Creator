require('dotenv').config()

const express = require('express');
const {json} = require('body-parser');
const session = require('express-session');
const massive = require('massive');
const cors = require('cors');
const app = express();

app.use(json());
app.use(cors());

const port = 3011;

const {getUser, addAbout, deleteAbout, updateAbout, getBlog, addBlog} = require('./controller');

massive(process.env.CONNECTION_STRING).then(dbInstance => {
        app.set('db', dbInstance)
}).catch(err => console.log(err))


app.get('/api/user', getUser)
app.post('/api/user', addAbout)
app.delete('/api/user/:id', deleteAbout)
app.put('/api/updateabout/:id', updateAbout)

app.get('/api/blog', getBlog)
app.post('/api/blog', addBlog)

app.listen(port, ()=> console.log(`up in dis bich listening to ${port}`));





// addBlogImg, addLogo,


// app.post('/api/user', addBlogImg)
// app.post('/api/userlogo', addLogo)
