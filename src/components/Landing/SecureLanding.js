import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../ducks/userReducer';
import Landing from './Landing';
import NotLogged from '../NotLogged/NotLogged';

class SecureLanding extends Component{
    componentDidMount(){
        // this.props.getUser();
    }
render(){
    // console.log(this.props)
    return(
        <div className="secureLog">
        {this.props.user.isAuthed ? <Landing /> : <NotLogged />}
        </div>
        )
    }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps, {getUser})(SecureLanding);