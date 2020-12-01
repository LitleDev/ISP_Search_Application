import React, { Component } from 'react';
import { Nav,Navbar,NavbarBrand,NavItem,Button} from 'reactstrap';
import LeftComponent from './LeftComponent';
import { Network } from '../shared/providers';
import logo from '../components/logo.png';

class Menu extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          network:Network
        };
      }

    render() {
        return (
            <div>
                <Navbar dark color="primary" >
                    <Nav>
                    <img src={logo} alt="logo" width="40px" height="40px"/>
                        <NavbarBrand> &nbsp; <b>ISP</b>
                        &nbsp; &nbsp; <i>-searching ISP made easy!</i></NavbarBrand>
                    </Nav>
                    <Button> Total ISP: {}   |  API Hits: {} </Button>
                </Navbar>
                
                <div className="col-12">

                    <LeftComponent network={this.state.network}/>
                       
                </div>
            </div>
        );
    }
}

export default Menu;