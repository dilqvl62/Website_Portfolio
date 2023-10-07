import React from "react";
import picture from '../../assets/Profile.png'
const Profile = () => {
    return(
        <div className="container">     
          <div className="row align-items-center">
	          <div className="col" style={{marginLeft: "270px"}}>         
              <img className="profile-image img-fluid float-start rounded-circle" src={picture} alt="profile image" />
              <div className="profile-content">
	               <h1 className="name">Sabar Mouri</h1>
	               <h2 className="desc">Data Scientist</h2>   
                    <ul className="social list-inline">
                        <li className="list-inline-item"><a href="https://twitter.com/morsab21" target="_blank"><i className="fab fa-twitter"></i></a></li>
                        <li className="list-inline-item"><a href="https://www.linkedin.com/in/sabar-data-science/" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                        <li className="list-inline-item last-item"><a href="https://github.com/dilqvl62/" target="_blank"><i className="fab fa-github-alt"></i></a></li>                   
                    </ul> 
	             </div>
               
            </div>
          </div>       
         </div> 

    );
}
export default Profile;