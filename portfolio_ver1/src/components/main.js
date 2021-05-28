import React from 'react';
import { Route , Switch } from 'react-router-dom';
import LandingPage from './landingpage';
import AboutPage from './aboutme';
import ContactPage from './contact';
import ProjectPage from './projects';
import ResumePage from './resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/project" component={ProjectPage} />
        <Route path="/resume" component={ResumePage} />
    </Switch>
)

export default Main;