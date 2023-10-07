import React from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import './Navigation.css'
import Profile from "../Profile/Profile";
import AboutMe from "../AboutMe";
import Projects from "../Projects";
import Books from "../Books";
import DarkModeSwitch from "../Dark-Mode-Switch/darkMode"

function Panel(props) {
    const { children, value, index } = props;

    return (
        <div>
            {value === index && (
                <Box p={3} style={{ alignContent: 'center', margin: 'auto' }}>
                    {children}
                </Box>
            )}
        </div>
    );
}
const Navigation  = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <nav className="header" style={{display: 'flex', justifyContent: 'flex-end'}}>
                    {/* <p className = 'f3 link dim black underline pa3 pointer'>SKILLS</p>, */}
                <Profile/>
                
                <div className="pa3 col-12 col-md-auto">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        showLabels
                    >
                        <Tab label="About me" />
                        <Tab label="Projects" />
                        {/* <Tab label="Skills" /> */}
                        <Tab label="Books" style={{ marginRight: "35px" }}/>
                        <Button variant= "contained" color ="dark"  href="" target="_blank">
                            Contact Me
                        </Button>
                    </Tabs>
                        <div className="pa3" style={{display: 'flex', justifyContent: 'flex-end'}}> 
                           <DarkModeSwitch/> 
                        </div>
                </div>
            </nav>
            <Panel value={value} index={0}>
                <AboutMe/>
            </Panel>
            <Panel value={value} index={1}>
                <Projects/>
            </Panel>
            
            <Panel value={value} index={2}>
                <Books/>
            </Panel>
        </div>
        
    );
}

export default Navigation