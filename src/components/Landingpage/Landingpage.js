import React, {Component} from 'react';
import './Landingpage.css';
import { connect } from "react-redux";
import {getAllUserz} from '../../redux/reducer';
import {Link} from 'react-router-dom'


class Landingpage extends Component{
         
componentDidMount(){
    this.props.getAllUserz()
}

    render(){
        
        
        
        const {allUserz} = this.props.state
        
        var sorted_arr = allUserz.slice().sort(function(a, b){return b-a});

        var results = [];

         for (let i = 0; i < sorted_arr.length -1; i++) {
                if (sorted_arr[i].user_id == 1 || 2 || 3 || 4 || 5 || 6) { 
                    results.push(sorted_arr[i]);
                }
        }

        console.log(sorted_arr)

        console.log(results)


        const previewMap = sorted_arr.map((e, i) => {
            if(e.user_id !== null){ 
            return (
                <Link to={`/home/${e.user_id}/${e.user_logo}`} key={i} className="antherContainer">
                <div className="landingpagecontainer">
                <div><img  className="containImg" src={e.hero_img}/></div>
                <div className="containText">{e.blog_about_text}</div>
                </div>
                </Link>
            )}
        })


        return(
            <div>
            <div className="madSkrilla">MadSkrilla</div>
            <div className="first">
            
                <img src="https://i.postimg.cc/dtKpMthd/antique-backdrop-background-733853.jpg"/>
           
                <div className="createUser">
                <a href={process.env.REACT_APP_LOGIN}>  get started  </a>
                </div>
            </div>

            <div className="divider">
            <br></br>
            
            <div className="aboutMad">
                <div>
                MadSkrilla is dedicated to providing a free and easy way for our users to create beautiful blogs with eCommerce capability.
                </div>
                <div>

                There's no need to purchase a domain or stylied templates like on other "free" blog platforms. 
                </div>
                <br></br>
                Check out some of our user's pages!
            </div>
              {previewMap}
            </div>
            <div className="myAbout">
                founded in late 2018, MadSkrilla was named after the totally badass creator, T-Bone MadSkrilla.
            </div>
        </div>
        )
    }
}
function mapStatetoProps(state){
    return {state};
}

export default connect(
    mapStatetoProps, 
    { getAllUserz }
    )(Landingpage);
    
    //const map = user.map((e,i)=>{
        //<div key={i}>
        //user[user.length -1] && user[user.length -1].hero_img
        //</div>
    //})
    
    // function heroImg (){ if (user.user_id === 1) {return user[user.length -1] && user[user.length -1].hero_img}}
    // function homeBlog () {if (user.user_id ===1){return user[user.length -1] && user[user.length -1].blog_about_text}} 
    // console.log(heroImg)
    // console.log(allUserz)
    // let image 
    // if(allUserz.user_id === 1){image = allUserz[allUserz.length -1] && allUserz[allUserz.length-1].hero_img}
    // console.log(image)
    //   allUserz[allUserz.length-1].hero_img
    // console.log(image)
    // function heroImg2 (){ if (user.user_id === 2) {return user[user.length -1] && user[user.length -1].hero_img}}
    // function homeBlog2 () {if (user.user_id ===2){return user[user.length -1] && user[user.length -1].blog_about_text}} 











    // {/* <Link to="/home"className="antherContainer">
    // <div className="landingpagecontainer"> */}
    // {/* <div>
    // <img className="containImg"src={image}/>
    // </div> */}
    //     {/* <div className="containText">
    //     {homeBlog}
    //     </div>
    // </div>  */}
    
    // {/* </Link> */}
    // {/* <Link to="/home"className="antherContainer">
    // <div className="landingpagecontainer">
    // <div>
    // <img className="containImg"src={heroImg2}/>
    // </div>
    // <div className="containText">
    // {homeBlog2}
    // </div>
    // </div>
    // </Link> */}


    // console.log(allUserz)
        // var arr = this.props.state
        
        // let find1 = sorted_arr.find(e => e.user_id == 1 && !null)
        // let finder = [find1]
        // console.log(finder)
        // let find2 = sorted_arr.find(e => e.user_id == 2 && !null)
        // console.log(find1)
        // console.log(find2 && find2.blog_about_text) // this 100% works but time consuming 