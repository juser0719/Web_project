import React, {Component} from 'react';
import { Tabs, Tab , Grid, Cell , Card , CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
    constructor (props) {
        super(props);
        this.state = {activeTab: 0};
    }
    toggelCategories(){
     var tab_state = this.state.activeTab;
     if(tab_state === 0){
        return(
        <div className = "project-grid">
           {/* React project1 */}
           <Card shadow={5} style = {{minWidth: '450', margin:'auto'}}>
               <CardTitle style = {{color: '#fff', height: '176px', background:'url(https://cdn.jootc.com/wp-content/uploads/2020/03/react-logo-gray.png) center / cover'}}>
                   React project #1
               </CardTitle>
               <CardText>
               This portfolio site was created as the first REACT project, and it was created with the goal of using Component with the basic REACT grammar. 
               </CardText>
               <CardActions border>
                    <Button colored onClick="window.open('https://github.com/juser0719/react_portfolio.git')">GitHub</Button>
                    <Button colored>Live_Demo</Button>
               </CardActions>
               <CardMenu style ={{color : '#ff'}}>
                   <IconButton name = "share" style = {{color : '#fff'}}/>
               </CardMenu>
           </Card>
           {/* React project2 */}
           <Card shadow={5} style = {{minWidth: '450', margin:'auto'}}>
               <CardTitle style = {{color: '#fff', height: '176px', background:'url(https://cdn.jootc.com/wp-content/uploads/2020/03/react-logo-gray.png) center / cover'}}>
                   React project #2
               </CardTitle>
               <CardText>
               Even very poor ability, I want to help prevent the spread of COVID-19.
               This website using REACT and React HOOK that allows you to easily view information on the progress of COVID-19 distributed around the world such as infected, treated, and dead people through APIs.
               </CardText>
               <CardActions border>
                <Button colored onClick="window.open('https://github.com/juser0719/covid19.git')">GitHub</Button>
                <Button colored>Live_Demo</Button>
               </CardActions>
               <CardMenu style ={{color : '#ff'}}>
                   <IconButton name = "share" style = {{color : '#fff'}}/>
               </CardMenu>
           </Card>
           {/* React project3 */}
           <Card shadow={5} style = {{minWidth: '450', margin:'auto'}}>
               <CardTitle style = {{color: '#fff', height: '176px', background:'url(https://cdn.jootc.com/wp-content/uploads/2020/03/react-logo-gray.png) center / cover'}}>
                   React project #3
               </CardTitle>
               <CardText>
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
               </CardText>
               <CardActions border>
                <Button colored>GitHub</Button>
                <Button colored>Live_Demo</Button>
               </CardActions>
               <CardMenu style ={{color : '#ff'}}>
                   <IconButton name = "share" style = {{color : '#fff'}}/>
               </CardMenu>
           </Card>
        </div>
        )
    }else if (tab_state === 1){
        return(
            <div className = "project-grid">
            {/* Android project1 */}
            <Card shadow={5} style = {{minWidth: '450', margin:'auto'}}>
                <CardTitle style = {{color: '#fff', height: '176px', background:'url(https://ak7.picdn.net/shutterstock/videos/31474717/thumb/1.jpg) center / cover'}}>
                Android project #1
                </CardTitle>
                <CardText>
                This is an Android app that lets you know whether dessert shops in front of the university are open or not.
                </CardText>
                <CardActions border>
                     <Button colored onClick = "window.open('https://play.google.com/store/apps/details?id=com.main.customer')">Google Store</Button>
                     <Button colored>Live_Demo</Button>
                </CardActions>
                <CardMenu style ={{color : '#ff'}}>
                    <IconButton name = "share" style = {{color : '#fff'}}/>
                </CardMenu>
            </Card>
            {/* Android project2 */}
            <Card shadow={5} style = {{minWidth: '450', margin:'auto'}}>
                <CardTitle style = {{color: '#fff', height: '176px', background:'url(https://ak7.picdn.net/shutterstock/videos/31474717/thumb/1.jpg) center / cover'}}>
                Android project #2
                </CardTitle>
                <CardText>
                In order to make it easier for students and office workers to manage their salaries a little more during the month, they calculate the percentage of their monthly salaries according to their consumption and inform users if they are more than a certain amount.
                check branch- design upgrade
                </CardText>
                <CardActions border>
                 <Button colored onClick = "window.open('https://github.com/jryang-19/Accountbook.git')" >GitHub</Button>
                 <Button colored>Live_Demo</Button>
                </CardActions>
                <CardMenu style ={{color : '#ff'}}>
                    <IconButton name = "share" style = {{color : '#fff'}}/>
                </CardMenu>
            </Card>
            {/* Android project3 */}
            <Card shadow={5} style = {{minWidth: '450', margin:'auto'}}>
                <CardTitle style = {{color: '#fff', height: '176px', background:'url(https://ak7.picdn.net/shutterstock/videos/31474717/thumb/1.jpg) center / cover'}}>
                Android project #3
                </CardTitle>
                <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                </CardText>
                <CardActions border>
                 <Button colored>GitHub</Button>
                 <Button colored>Live_Demo</Button>
                </CardActions>
                <CardMenu style ={{color : '#ff'}}>
                    <IconButton name = "share" style = {{color : '#fff'}}/>
                </CardMenu>
            </Card>
         </div>
        )
    }else if (tab_state === 2){
        return(
            <div className = "project-grid">
            {/* SW project1 */}
            <Card shadow={5} style = {{minWidth: '450', margin:'auto'}}>
                <CardTitle style = {{color: '#fff', height: '176px', background:'url(https://image.freepik.com/free-vector/blue-cyber-cpu-circuit-future-technology-concept-background_42077-1957.jpg) center / cover'}}>
                Computer System project #1
                </CardTitle>
                <CardText>
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                </CardText>
                <CardActions border>
                     <Button colored>GitHub</Button>
                     <Button colored>Live_Demo</Button>
                </CardActions>
                <CardMenu style ={{color : '#ff'}}>
                    <IconButton name = "share" style = {{color : '#fff'}}/>
                </CardMenu>
            </Card>
            {/* SW project2 */}
            <Card shadow={5} style = {{minWidth: '450', margin:'auto'}}>
                <CardTitle style = {{color: '#fff', height: '176px', background:'url(https://image.freepik.com/free-vector/blue-cyber-cpu-circuit-future-technology-concept-background_42077-1957.jpg) center / cover'}}>
                Computer System project #2
                </CardTitle>
                <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                </CardText>
                <CardActions border>
                 <Button colored>GitHub</Button>
                 <Button colored>Live_Demo</Button>
                </CardActions>
                <CardMenu style ={{color : '#ff'}}>
                    <IconButton name = "share" style = {{color : '#fff'}}/>
                </CardMenu>
            </Card>
            {/* SW project3 */}
            <Card shadow={5} style = {{minWidth: '450', margin:'auto'}}>
                <CardTitle style = {{color: '#fff', height: '176px', background:'url(https://image.freepik.com/free-vector/blue-cyber-cpu-circuit-future-technology-concept-background_42077-1957.jpg) center / cover'}}>
                Computer System project #3
                </CardTitle>
                <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                </CardText>
                <CardActions border>
                 <Button colored>GitHub</Button>
                 <Button colored>Live_Demo</Button>
                </CardActions>
                <CardMenu style ={{color : '#ff'}}>
                    <IconButton name = "share" style = {{color : '#fff'}}/>
                </CardMenu>
            </Card>
         </div>
        )
    }else if (tab_state === 3){
        return(
            <div className = "project-grid">
            {/* Alorithm project1 */}
            <Card shadow={5} style = {{minWidth: '450', margin:'auto'}}>
                <CardTitle style = {{color: '#fff', height: '176px', background:'url(https://cdn1.vectorstock.com/i/1000x1000/20/10/algorithm-outline-blue-icon-on-dark-vector-18592010.jpg) center / cover'}}>
                Alorithm project #1
                </CardTitle>
                <CardText>
                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                </CardText>
                <CardActions border>
                     <Button colored>GitHub</Button>
                     <Button colored>Live_Demo</Button>
                </CardActions>
                <CardMenu style ={{color : '#ff'}}>
                    <IconButton name = "share" style = {{color : '#fff'}}/>
                </CardMenu>
            </Card>
            {/* Alorithm project2 */}
            <Card shadow={5} style = {{minWidth: '450', margin:'auto'}}>
                <CardTitle style = {{color: '#fff', height: '176px', background:'url(https://cdn1.vectorstock.com/i/1000x1000/20/10/algorithm-outline-blue-icon-on-dark-vector-18592010.jpg) center / cover'}}>
                Alorithm project #2
                </CardTitle>
                <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                </CardText>
                <CardActions border>
                 <Button colored>GitHub</Button>
                 <Button colored>Live_Demo</Button>
                </CardActions>
                <CardMenu style ={{color : '#ff'}}>
                    <IconButton name = "share" style = {{color : '#fff'}}/>
                </CardMenu>
            </Card>
            {/* Alorithm project3 */}
            <Card shadow={5} style = {{minWidth: '450', margin:'auto'}}>
                <CardTitle style = {{color: '#fff', height: '176px', background:'url(https://cdn1.vectorstock.com/i/1000x1000/20/10/algorithm-outline-blue-icon-on-dark-vector-18592010.jpg) center / cover'}}>
                Alorithm project #3
                </CardTitle>
                <CardText>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                </CardText>
                <CardActions border>
                 <Button colored>GitHub</Button>
                 <Button colored>Live_Demo</Button>
                </CardActions>
                <CardMenu style ={{color : '#ff'}}>
                    <IconButton name = "share" style = {{color : '#fff'}}/>
                </CardMenu>
            </Card>
         </div>
        )
    }   
    }
    

    render(){
        return(
            <div className = "catagory-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId })} ripple>
                    <Tab>WEB</Tab>
                    <Tab>Android</Tab>
                    <Tab>Computer System</Tab>
                    <Tab>Algorithm</Tab>
                </Tabs>

               
                    <Grid>
                        <Cell col = {12}>
                            <div className="content">
                                {this.toggelCategories()}
                            </div>
                        </Cell>
                    </Grid>      
               
            </div>
        )
    }
}

export default Projects;