import React, {Component} from 'react';
import { Grid, Cell , ProgressBar} from 'react-mdl';

class Skill extends Component {
    render() {
        return(
            <Grid>
                <Cell col={2}>
                    {this.props.skill}
                </Cell>
                <Cell col={10}>
                    <div style ={{display: 'flex'}}>
                        
                        <ProgressBar style ={{margin:'auto', width: '70%'}} progress={this.props.progress}/>
                        
                    </div>
                </Cell>
            </Grid>
        )
    }
} export default Skill; 