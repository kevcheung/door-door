import React, { Component } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
// import {getUser} from '../../ducks/userReducer';
import {addHoaInfo} from '../../ducks/hoaReducer';
import User from '../User/User';
import './Admin.css';

class Admin extends Component {
    constructor(props){
        super(props);
        this.state = {
            hoaname: '',
            maintenancefee: '',
            transferfee: '',
            refinancefee: '',
            resalecertfee: '',
            otherfees: '',
            mailingaddress: ''
        }
    }
enterHoaHandler = e => {
    // console.log(e.target.value);
    this.setState({[e.target.name]: e.target.value})
};

    render() {
        // console.log(this.props)
        const { hoaname, maintenancefee, transferfee, refinancefee, resalecertfee, otherfees, mailingaddress } = this.state;
      return (
          <div className="adminRender">
            <div className="searchAndComment">
                <User />
            </div>
            <div className="input">
            <p className="addHoaTitle">Create an HOA</p>
                <p className="addInfo">HOA Name</p>
                <input
                    value={this.state.hoaname}
                    onChange={this.enterHoaHandler}
                    type="text"
                    name="hoaname"
                />
                <p className="addInfo">Maintenance Fee</p>
                <input
                    value={this.state.maintenancefee}
                    onChange={this.enterHoaHandler}
                    type="number"
                    name="maintenancefee"
                />
                <p className="addInfo">Transfer Fee</p>
                <input
                    value={this.state.transferfee}
                    onChange={this.enterHoaHandler}
                    type="number"
                    name="transferfee"
                />
                <p className="addInfo">Refinance Fee</p>
                <input
                    value={this.state.refinancefee}
                    onChange={this.enterHoaHandler}
                    type="number"
                    name="refinancefee"
                />
                <p className="addInfo">Resale Certificate Fee</p>
                <input
                    value={this.state.resalecertfee}
                    onChange={this.enterHoaHandler}
                    type="number"
                    name="resalecertfee"
                />
                <p className="addInfo">Other Fees</p>
                <input
                    value={this.state.otherfees}
                    onChange={this.enterHoaHandler}
                    type="number"
                    name="otherfees"
                />
                <p className="addInfo">Mailing Address</p>
                <input
                    value={this.state.mailingaddress}
                    onChange={this.enterHoaHandler}
                    type="text"
                    name="mailingaddress"
                />
                <div>
                    <button className="addHoaButton" onClick={ () => this.props.addHoaInfo(hoaname, maintenancefee, transferfee, refinancefee, resalecertfee, otherfees, mailingaddress)}>Add HOA</button>
                </div>
            </div>
        </div>
      );
    }
  }

  const mapStateToProps = state => state;

  export default connect(mapStateToProps, {addHoaInfo})(Admin);