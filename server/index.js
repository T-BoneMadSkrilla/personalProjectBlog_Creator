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
   return done(null, profile);
 }
) );

passport.serializeUser( (user, done) => {
        done(null, { clientID: user.id, email: user._json.email, name: user._json.name });
      });

passport.deserializeUser( (obj, done) => {
        done( null, obj );
      });

      
      
      
      const {getUser, addAbout, deleteAbout, updateAbout, getBlog, addBlog} = require('./controller');
      
      massive(process.env.CONNECTION_STRING).then(dbInstance => {
              app.set('db', dbInstance)
        }).catch(err => console.log(err))
        
        app.get( '/login',
        passport.authenticate('auth0',
          { successRedirect: 'http://localhost:3000/user', failureRedirect: '/login', failureFlash: true  }
        )
      );

      app.get('/api/user/:id', ( req, res, next) => {
        if ( !req.user ) {
          res.redirect('/login');
        } else {
          res.status(200).send( JSON.stringify( req.user, null, 10 ) );
        }
      });

app.get('/api/user', getUser)
app.post('/api/user', addAbout)
app.delete('/api/user/:id', deleteAbout)
app.put('/api/updateabout/:id', updateAbout)

app.get('/api/blog', getBlog)
app.post('/api/blog', addBlog)

app.listen(port, ()=> console.log(`up in dis bich listening to ${port}`));


