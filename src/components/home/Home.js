import React, {Component} from 'react';
import './Home.css';
import { connect } from "react-redux";
import {getAllUserz} from '../../redux/reducer';
import {Link} from 'react-router-dom';

import Nav from '../nav/Nav'

class Home extends Component{
  

    componentDidMount(){
        this.props.getAllUserz()
    }



    render(){
        const {allUserz} = this.props.state
        console.log(this.props.match.params.user_id)
        console.log(allUserz[allUserz.length -1]  && allUserz[allUserz.length -1].user_id)

        let find = allUserz.filter(e => e.user_id === +this.props.match.params.user_id)
        console.log(find) 

        const aboutInfo = find[find.length -1] 

        // console.log(heroImg)
        return(
            <div>
            <Nav/>
            
            <div className="homeCenter">

            <div className="background1">

                <div>
                   <img className="imgContainer" src={aboutInfo && aboutInfo.hero_img}/>
                </div>
                <br></br>
                
                <div className="blogText">
                    {aboutInfo && aboutInfo.blog_about_text}
                </div>
            </div>
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
    )(Home);
    
    
    
    
    // this.heroImg = this.props.state.user.map((e,i)=>{
        //     return (
            //         <div key={i}>
            //         {e.hero_img}
            //         </div>
            //     )
            // })
            
            // this.homeBlog = this.props.state.user.map((e,i)=>{
                //     return (
                    //         <div key={i}>
                    //         {e.blog_about_text}
                    //         </div>
                    //     )
                    // })
                    
                    
                    
                    //TESTING SERVER GET CONNECTION BEFORE REDUX WAS SET UP{
                        // constructor(){
                            //     super();
                            //     this.state={
                                //         user: []
                                //     };
                                // }
                                // componentDidMount(){
                                    //     axios.get("/api/user").then( res => {
                                        //         console.log(res.data)
                                        //         this.setState({user: res.data})
                                        //     });
                                        // }
                                        
                                        

                                        // const heroImg = this.state.user.map((e,i) =>{
                                            //     return (
                                                //         <div key={i}>
                                                //         {e.hero_img}
                                                //         </div>
                                                //     )
                                                // })
                                                // {/* {heroImg} */}}
                                                // console.log(this.props.match.params.id)
                                                // let user = allUserz.find(e => e.user_id === this.props.match.params.id);
                                                // console.log( this.props.match.params.id)
                                                // const heroImg = allUserz.hero_img
                                                // const homeBlog = allUserz.blog_about_text
                                                // const homeBlog =user1[user.length -1] && user1[user.length -1].blog_about_text
                                                // const heroImg =user1[user.length -1] && user1[user.length -1].hero_img
                                                
                                                // const heroImg = allUserz.map((e, i) => {
                                                    //     if(allUserz[allUserz.length -1 ] && allUserz[allUserz.length -1].user_id === this.props.match.params){ 
                                                        //     return (
                                                            //         <div key={i}>
                                                            //         <img className="imgContainer" src={allUserz.hero_img} />
                                                            //         </div>
                                                //     )}
                                                // })
                                                // console.log(heroImg)
                                                // const homeBlog = allUserz.map((e, i) => {
                                                    //     if(allUserz.user_id === this.props.match.params){ 
                                                        //     return (
                                                            //         <div key={i}>
                                                            //         {allUserz.blog_about_text}
                                                            //         </div>
                                                //     )}
                                                // })
                                                // console.log(homeBlog)
                                                // let map = user.map((e,i)=>{})

                                                
                                                
                                                // console.log(allUserz[for(i=0; i<allUserz.length -1; i++){
                                                //     if(allUserz[i].user_id === this.props.match.params.user_id){return allUserz[i].user_id}}])
                                                // console.log(this.props.match.params.user_id)
                                                // console.log(allUserz[allUserz.length -1]  && allUserz[allUserz.length -1].user_id)
                                                // let user_id = allUserz.find(allUserz => allUserz[].user_id === this.props.match.params.user_id)
                                                // console.log(user_id) 
                                                // console.log(allUserz[5].about_id)
                                                // console.log(allUserz[allUserz.length -1] && allUserz[allUserz.length -1].user_id)
                                                // let user = allUserz.find(e => e.user_id === this.props.match.params.id);
                                                //for loop inside [] for(i=0; i < allUserz.length -1; i++){if (allUserz[i].user_id === this.props.match.param.id){return allUserz[i]}}
                                                //       let user = (allUserz) => {
                                                //           for(let i=0; i < allUserz.length -1; i++){if (allUserz[i].user_id === this.props.match.param.id){return allUserz[i]}}}
                                                // console.log(user())
                                                
                                                
                                                
                                                
                                                
                                                
                                                
                                                
                                                
                                                
                                                
                                                

                                                

                                                
                                                

                                                

                                                
                                                
                                                
                                                
                                                
                                                
                                                
                                                












