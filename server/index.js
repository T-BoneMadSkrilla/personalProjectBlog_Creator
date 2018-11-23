require('dotenv').config()

const express = require('express');
const {json} = require('body-parser');
const massive = require('massive');
const cors = require('cors');
const app = express();
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');


const port = 3011;

app.use(json());
app.use(cors());

app.use( session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false
}));

app.use( passport.initialize() );
app.use( passport.session() );

passport.use( new Auth0Strategy({
  domain:       process.env.DOMAIN,
  clientID:     process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  callbackURL:  '/login',
  scope: "openid email profile"
 },
 function(_, __, ___, profile, done) {
  //  let userData = profile._json
   return done(null, profile);
 }
) );

passport.serializeUser( (user, done) => {
    const db = app.get('db');
console.log(`play o' play`,user)
    db.get_auth(user.id).then( response =>{
      if(!response[0]){
        db.add_auth(user.emails[0].value, user.id).then(
          res=> done(null, res[0])
          .catch( err => {done(err,null)})
        )
      } else {
        return done(null, response[0])
      }}
    ).catch(err=> done(err,null))
  });

passport.deserializeUser( (obj, done) => {
        done( null, obj );
      });

      
      
      
      const {getAllUserz, getUser, addAbout, deleteAbout, updateAbout, getBlog, addBlog, getProdz,addProdz} = require('./controller');
      
      massive(process.env.CONNECTION_STRING).then(dbInstance => {
              app.set('db', dbInstance)
        }).catch(err => console.log(err))
        
        app.get( '/login',
        passport.authenticate('auth0',
          { successRedirect: 'http://localhost:3000/user', failureRedirect: '/login'}
        )
      );

      app.get('/api/getuser/', ( req, res, next) => { //just a test
        console.log(req.user)
        if ( !req.user ) {
          res.redirect('/login');
        } else {
          res.status(200).send( JSON.stringify( req.user, null, 10 ) );
        }
      });

app.get('/api/alluserz', getAllUserz)
app.get('/api/user', getUser)
app.post('/api/user', addAbout)
app.delete('/api/user/:id', deleteAbout)
app.put('/api/updateabout/:id', updateAbout)

app.get('/api/blog', getBlog)
app.post('/api/blog', addBlog)

app.get('/api/store', getProdz)
app.post('/api/store', addProdz)

app.listen(port, ()=> console.log(`up in dis bich listening to ${port}`));


