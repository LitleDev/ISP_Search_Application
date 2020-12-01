import React, { Component } from 'react';
import { Badge,Media,Card, Button, CardText, CardBody,
    CardTitle, Toast, ToastHeader,ToastBody, Col,Row, Navbar} from 'reactstrap';

class LeftComponent extends Component {
    constructor (props) {
        super(props)

        this.state = {
            selectrdProvider:null,
            search:''
        }

    }

    updateSearch(event) {
        this.setState({search: event.target.value.substr(0,20)});
    }

    onProviderSelect(provider){
        this.setState({selectrdProvider:provider});

    }

    renderProvider(provider) {
        if (provider != null) {
            return(
                <div>
                    <Card>
                        <CardBody>
                        <div className="p-3 bg-primary my-2 rounded">
                            <Toast>
                            <ToastHeader>
                                <CardTitle>{provider.name}</CardTitle>
                            </ToastHeader>
                            <ToastBody>
                                <p>Max Speed: {provider.speed} mbps</p>
                                <p>Phone: {provider.phone}</p>
                                <p>email: {provider.email}</p>
                                <p>Min. Plan: {provider.price}/=</p>
                            </ToastBody>
                            </Toast>
                        </div>
                        <h1>Rating {provider.rating}</h1>
                            <Card>
                                <CardText> {provider.description}</CardText>

                            </Card>
                            
                        </CardBody>
                            <Row>
                                <Col><Button >Link</Button></Col>
                                <Col><Button >Share</Button></Col>
                                <Col><Button >Download</Button></Col>
                            </Row>

                   </Card>
                </div>

            );
        }
         else {
             return(
                 <div></div>
             );
         }
           

    }


    render() {
        let filteredList = this.props.network.filter(
            (provider)=> {
                return provider.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }

        );
        
        const list = filteredList.map((provider) =>{
            return(
                <div key={provider.id} className="col-15 mt-3">
                     <Card onClick ={ () => this.onProviderSelect(provider) } >
                         <Media color="primary">
                         <Media className="col-10">{provider.name}  </Media>
                         <Media className="col-10">  &#x20B9; {provider.price}</Media>
                         </Media>
                     </Card>

                </div>
            );

        });



        return (
                <div>
                    
                        <Row>
                            <Col>
                             
                            <div >
                                <Navbar className=""><h3><a href="/">Home</a></h3> 
                                <input type="text" placeholder="Search.."
                                    value={this.state.search}
                                    onChange= {this.updateSearch.bind(this)}
                                /> 
                                
                                </Navbar>
                                <Media list>
                                    {list}
                                </Media>

                                    <form>
                                        <div className="container">
                                        <h3> 
                                        <Badge color="light">Sort By</Badge>
                                        <Badge className="badge badge-secondary">
                                            <div className="radio">
                                                <label><input type="radio" value="Price" name="option" />Price</label>
                                                <label><input type="radio" value="Rating" name="option"/>Rating</label>
                                            </div>
                                        </Badge>
                                        </h3>
                                        </div>
                                    </form>

                                </div>

                            </Col>
                            <Col>
                                <div>
                                    <Media>
                                        {this.renderProvider(this.state.selectrdProvider)}
                                    </Media>
                                 </div>
                            </Col>
                        </Row>
                    
            </div>
        );
    }
}

export default LeftComponent;