const getAllUserz = (req, res) => {
    const dbInstance = req.app.get('db');
    dbInstance
    .get_all_userz()
    .then(response => res.status(200).json(response))
}

const getUser = (req, res)=>{
    const dbInstance = req.app.get('db');
    console.log('booty-clappa',req.user.user_id)
    // const {user_id} = req.user
    dbInstance
    .get_user([req.user.user_id])
    .then(response => res.status(200).json(response))
}


const addAbout = ( req, res)=>{
    const dbInstance = req.app.get('db');
    const{user_logo, hero_img, blog_about_text} = req.body;
    const {user_id} = req.user
    dbInstance
    .add_about([user_logo, hero_img, blog_about_text, user_id])
    .then( response => res.status(200).json(response))
}

const deleteAbout = (req, res)=>{
    const dbInstance = req.app.get('db');
    const {id} = req.params
    console.log(req.body)
    dbInstance
    .delete_about(id)
    .then(response => {res.status(200).json(response)})
}

const updateAbout = (req, res) =>{

    const dbInstance = req.app.get('db');
    const {user_logo, hero_img, blog_about_text} = req.body
    console.log(req.body, req.params)
    dbInstance
    .update_about([req.params.id, user_logo, hero_img, blog_about_text])
    .then(response => {
        res.status(200).json(response)})
        .catch(err => console.log(err))
}

const getBlog = (req, res) => {
    req.app.get('db')
    .get_blogs()
    .then(response => res.status(200).json(response))
}

const addBlog = ( req, res)=>{
    const dbInstance = req.app.get('db');
    const{blog_text} = req.body;
    console.log(blog_text)
    const {user_id} = req.user
    dbInstance
    .add_blog(blog_text, user_id)
    .then( response => res.status(200).json(response))
    .catch(err=> {
        console.log(err)
    })
}

const getProdz = (req, res) => {
    req.app.get('db')
    .get_productz()
    .then(response => res.status(200).json(response))
}

const addProdz = ( req, res)=>{
    const dbInstance = req.app.get('db');
    const{product_title, product_text, product_img, product_price} = req.body;
    const {user_id} = req.user
    dbInstance
    .add_productz(product_title, product_text, product_img, product_price, user_id)
    .then( response => res.status(200).json(response))
    .catch(err=> {
        console.log(err)
    })
}

module.exports={
    getAllUserz,
    getUser,
    addAbout,
    deleteAbout,
    updateAbout,
    getBlog,
    addBlog,
    getProdz, 
    addProdz
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




























