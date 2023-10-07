import React from 'react';
import './Header.css';
import picture from '../../assets/Profile.png'
import DarkModeSwitch from '../Dark-Mode-Switch/darkMode'
const Header = () =>{
	return (
		
	 <header className="header">
        <div className="container">     
          <div className="row align-items-center">
	          <div className="col">         
              <img className="profile-image img-fluid float-start rounded-circle" src={picture} alt="profile image" />
              <div className="profile-content">
	               <h1 className="name">Sabar Mouri</h1>
	               <h2 className="desc">Data Scientist</h2>   
                    <ul className="social list-inline">
                        <li className="list-inline-item"><a href="https://twitter.com/morsab21"><i className="fab fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a href="https://www.linkedin.com/in/sabar-data-science/"><i className="fab fa-linkedin-in"></i></a></li>
                        <li className="list-inline-item last-item"><a href="https://github.com/dilqvl62/"><i className="fab fa-github-alt"></i></a></li>                   
                    </ul> 
	             </div>
               
            </div>
          </div>       
         </div> 
       </header> /*header*/

		)
}

export default Header 