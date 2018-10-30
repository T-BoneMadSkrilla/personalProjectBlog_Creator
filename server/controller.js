const getUser = (req, res)=>{
    req.app.get('db')
    .get_user()
    .then(response => res.status(200).json(response))
}


const addAbout = ( req, res)=>{
    const dbInstance = req.app.get('db');
    const{user_logo, hero_img, blog_about_text} = req.body;
    
    dbInstance
    .add_about(user_logo, hero_img, blog_about_text)
    .then( response => res.status(200).json(response))
}

const deleteAbout = (req, res)=>{
    const dbInstance = req.app.get('db');
    const {id} = req.params
    dbInstance
    .delete_about(id)
    .then(response => {res.status(200).json(response)})
}

const updateAbout = (req, res) =>{
    const dbInstance = req.app.get('db');

    dbInstance
    .update_about(id)
    .then(response => res.status.json(response))
}

module.exports={
    getUser,
    addAbout,
    deleteAbout,
    updateAbout
}












// const addBlogImg = ( req, res)=>{
//     const dbInstance = req.app.get('db');
//     const{hero_img} = req.body;

//     dbInstance
//     .add_blog_img(hero_img)
//     .then( response => res.status(200).json(response))
// }

// const addLogo = ( req, res)=>{
//     const dbInstance = req.app.get('db');
//     const{user_logo} = req.body;

//     dbInstance
//     .add_logo(user_logo)
//     .then( response => res.status(200).json(response))
// }




























