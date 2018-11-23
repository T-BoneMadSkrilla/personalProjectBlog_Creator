import React, {Component} from 'react';
import './Nav.css';
import {Link, withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import { getAllUserz } from '../../redux/reducer';

class Nav extends Component{
    

    componentDidMount(){
        
        this.props.getAllUserz()
    }

    


    render(){

        const {allUserz} = this.props.state

        let find = allUserz.filter(e => e.user_id === +this.props.match.params.user_id)
        
        const aboutInfo = find[find.length -1]

        
        return(
        <div>
            <div className="homeStyle">
                <Link to="/">back to home</Link>
            </div>

                <div className="sizing"> 

                    <div className="topMiddle">
            

                    <div className="logo">
                    <Link to={`/home/${aboutInfo && aboutInfo.user_id}`}> {aboutInfo && aboutInfo.user_logo} </Link>
                    </div>

                    <div className="posts">
                    <Link to={`/blog/${aboutInfo && aboutInfo.user_id}`} >Posts</Link>
                    </div>

                    <div className="posts">
                        <Link to={`/store/${aboutInfo && aboutInfo.user_id}`}>Shop</Link>
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

export default withRouter(connect(
    mapStatetoProps, 
    { getAllUserz }
    )(Nav));