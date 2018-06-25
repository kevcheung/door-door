import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getFavInfo, deleteFavInfo} from '../../ducks/favReducer';
import './Favorites.css';

class Favorites extends Component {
    constructor(props){
      super(props);
      this.state = {
      }
  }
  componentDidMount(){
    this.props.getFavInfo(this.props.user.user.id)
  }
  render() {
    // console.log(this.props)
    const favList = this.props.favorites.favoritesList.map((curr, index) => {
        return <div key = {index}>
        {/* <button onClick={() => this.props.getFavInfo(this.props.favorites.favoritesList[curr.id]) }>{curr.hoaname}</button> */}
            <div className="favoriteCSS">
                <p className="favInfo">HOA Name: {curr.hoaname}</p>
                <p className="favInfo">Maintenance Fee: {curr.maintenancefee}</p>
                <p className="favInfo">Refinance Fee: {curr.refinancefee}</p>
                <p className="favInfo">Resale Cert Fee: {curr.resalecertfee}</p>
                <p className="favInfo">Other Fees: {curr.otherfees}</p>
                <p className="favInfo">Mailing Address: {curr.mailingaddress}</p>
                <button className="deleteButton" onClick={ () => this.props.deleteFavInfo(curr.id)
                    .then(() => this.props.getFavInfo(this.props.user.user.id))}>Delete from Favorites</button>
            </div>
        </div>
    })
    return(
        <div className="favorites">
        <p className="title">Favorites</p>
            {favList}
        </div>
        )
    }
}
const mapStateToProps = state => state;

export default connect(mapStateToProps, {getFavInfo, deleteFavInfo})(Favorites);