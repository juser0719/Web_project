import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render(){
        return(
            <div style= {{width: '100%',margin: 'auto'}}>
                <Grid className = "landing-grid">
                    <Cell col={12}>
                        <img src="https://i.ya-webdesign.com/images/avatar-png-icon-6.png"
                         alt = "avatar" className = "avatar-img"
                        />
                        <div className = "banner-text">
                            <h1>A Curious Web Developer</h1>
                            <hr/>
                            <p>HTML/CSS/ | Bootstrap | JS | React | NodeJS | Spring boot | C++/C/Java/Python | Android Studio | FireBase</p>
                                
                            <div className = "social-link">
                                {/* linked in list */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true" />
                                </a>
                                {/* github in list */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square"  aria-hidden="true" />
                                </a>
                                {/* linked in list */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-facebook-square"  aria-hidden="true" />
                                </a>                                
                                {/* linked in list */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-instagram"  aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
               
            </div>
        )
    }
}

export default Landing;