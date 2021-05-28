import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skill from './skill';
class About extends Component {
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4} >
                        <div style={{textAlign: 'center'}}>
                            <img src="https://i.ya-webdesign.com/images/avatar-png-icon-6.png" alt="avatar" style={{height:'200px'}}/>
                        </div>
                        <h2 style={{paddingTop: '2em'}}>WoongJae Jeon</h2>
                        <h4 style={{color:'gray'}}>Programmer</h4>
                        <hr style={{borderTop:'3px solid #833fb2', width: '50%'}} />
                        <p style={{fontFamily:'Oxyzen'}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <hr style={{borderTop:'3px solid #833fb2', width: '50%'}} />
                        <h5>e-mail</h5>
                        <p>sinsa0719@naver.com / woongjae0719@gmail.com</p>
                        <h5>phone</h5>
                        <p> (+82) 010 - 5495 - 3655</p>
                        <hr style={{borderTop:'3px solid #833fb2', width: '50%'}} />
                    </Cell>
                    <Cell col={8} className="aboutme-right-col">
                        <h2>Education</h2>
                        <Education  startYear= {2012} endYear ={2014} schoolName="Neungin Highschool"
                         schoolDescription = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." 
                        />
                        <Education  startYear= {2015} endYear ={2021} schoolName="Dankook Univ"
                         schoolDescription = "Mobile System Engineering" 
                        />
                        <hr style = {{borderTop: '3px solid #e22947'}}/>
                        <h2>Experience</h2>
                        <Experience startYear={2019.03} endYear={2019.11} Name=" 'DONGHANG' Student Council " Description = "Planning department conductor"/>
                        <Experience startYear={2019.05} endYear={2020.03} Name="1D1S" Description = "Web, App Production Student Club"/>
                        <Experience startYear={2019.06} endYear={2019.08} Name="SK C&C IT camp" Description = "Front-end (HTML/CSS/Bootstrip/JS/Ajax/Jquery), Back-end(Spring-boot), DB(MongoDB) education and practice"/>
                        <Experience startYear={2019.10} endYear={2019.11} Name="My Account book" Description = "Based on the opinions of students in the department, the total usage of the app will be changed to percent according to the amount of spending, and users will be notified if they use more than the schedule."/>
                        <Experience startYear={2020.01} endYear={2020.04} Name="오와열?홌!" Description = "An app that lets you know if a sweet shop is open in front of the school. Since the opening hours of popular sweets shops in school are irregular, the school community listened every day and created a service."/>
                        <hr style = {{borderTop: '3px solid #e22947'}}/>
                        <h1>Skill</h1>
                        <Skill skill ="c++/c" progress = {90} />
                        <Skill skill ="Java" progress = {80} />
                        <Skill skill ="Python" progress = {70} />
                        <Skill skill ="HTML/CSS/Bootstrap" progress = {80} />
                        <Skill skill ="JS" progress = {87} />
                        <Skill skill ="React" progress = {90} />
                        <Skill skill ="NodeJs" progress = {70} />
                        <Skill skill ="Spring boot" progress = {70} />
                        <Skill skill ="Andriod Studio" progress = {80} />
                        <Skill skill ="Firebase DB" progress = {80} />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;