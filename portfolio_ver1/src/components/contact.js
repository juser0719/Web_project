import React, {Component} from 'react';
import { Grid , Cell, List, ListItem, ListItemContent} from 'react-mdl';

class Contact extends Component {
    render(){
        return(
            <div className = "contact-body"> 
                <Grid className="contact-grid">
                    <Cell col ={6}>
                        <h2>WoongJae Jeon</h2>
                        <img src="https://i.ya-webdesign.com/images/avatar-png-icon-6.png"
                         alt = "avatar" style = {{height: '250px'}}
                         />
                        <p style= {{width:'75%' , margin: 'auto', paddingTop: '1em'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </Cell>
                    <Cell col ={6}>
                        <h2>Contact me</h2>
                        <hr/>
                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontFamily:'Anton', fontSize:'30px'}}>
                                    <i className="fa fa-phone-square" aria-hidden/> 
                                    (+82) 010 - 5495 - 3655
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontFamily:'Anton', fontSize:'30px'}}>
                                    <i className="fa fa-envelope-square" aria-hidden/> 
                                    sinsa0719 @ naver . com
                                </ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent style={{fontFamily:'Anton', fontSize:'30px'}}>
                                    <i className="fa fa-instagram" aria-hidden/> 
                                    @ woongjae_jeon
                                </ListItemContent>
                            </ListItem>
                        </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;