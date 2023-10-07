import React from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';

const AboutMe  = () => {
   
    return (
        <div className="container sections-wrapper py-5">  
            <div className="row"> 
               
            <div className="primary col-lg-8 col-12">
                        <section className="about section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading">About Me</h2>
                        <div className="content">
                            <p>Data analyst with a background in computer science. Earned a certificate from The University 
                               of Kansas Data Analytics and Visualization Boot Camp. Proficient in utilizing data Visualization
                               tools and programming languages to extract insights from large sets of data that drive strategic
                               decisions.  Strong analytical problem-solving skills and excels in team collaboration, 
                               driven by passion for continuous learning.
                                                     
                            </p>
                         
                        </div>
                    </div>                
                </section>
                <aside class="skills aside section">
                <div className="section-inner shadow-sm rounded">
                        <h2 className="heading">Skills</h2>
                        <div className="content">
                            <p className="intro">
                                I possess a diverse technical skillset, proficient in Python, R, and experienced with tools like Excel,Tableau
                                , databases. 
                            </p>
                            
                            <div className="skillset">
                               
                                <div className="item">
                                    <h3 className="level-title">Python &amp; R<span className="level-label" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="You can use the tooltip to explain more about your skill level..."><i className="fas fa-info-circle"></i>Expert</span></h3>

                                    <div className="level-bar progress">
									    <div className="progress-bar level-bar-inner" role="progressbar" style={{width: '96%'}} aria-valuenow="96"  aria-valuemin="0" aria-valuemax="96"></div>
									</div>                              
                                </div>
                                
                                <div className="item">
                                    <h3 className="level-title">SQL &amp; NoSql<span className="level-label" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="You can use the tooltip to explain more about your skill level..."><i className="fas fa-info-circle"></i>Expert</span></h3>
                                    <div className="level-bar progress">
									    <div className="progress-bar level-bar-inner" role="progressbar" style={{width: '94%'}} aria-valuenow="94"  aria-valuemin="0" aria-valuemax="94"></div>
									</div>                                  
                                </div>
                                
                                <div className="item">
                                    <h3 className="level-title">JavaScript ,HTML &amp; CSS<span className="level-label" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="You can use the tooltip to explain more about your skill level..."><i className="fas fa-info-circle"></i>Expert</span></h3>
                                    <div className="level-bar progress">
									    <div className="progress-bar level-bar-inner" role="progressbar" style={{width: '93%'}} aria-valuenow="93"  aria-valuemin="0" aria-valuemax="96"></div>
									</div>                                 
                                </div>
                                
                                <div className="item">
                                    <h3 className="level-title">Tableau &amp; Excel<span className="level-label" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-title="You can use the tooltip to explain more about your skill level..."><i className="fas fa-info-circle"></i>Expert</span></h3>
                                    <div className="level-bar progress">
									    <div className="progress-bar level-bar-inner" role="progressbar" style={{width: '86%'}} aria-valuenow="86"  aria-valuemin="0" aria-valuemax="96"></div>
									</div>                                  
                                </div>
                                
                                <p><a className="more-link" href="https://www.linkedin.com/in/sabar-data-science/details/skills/"><i className="fas fa-external-link-alt"></i>More on LinkedIn</a></p> 
                            </div>              
                        </div>
                </div>         
                    </aside>          
                </div>
                <div className="secondary col-lg-4 col-12">
                <aside class="info aside section">
                    <div class="section-inner shadow-sm rounded">
                        <h2 class="heading ">Get in Touch</h2>
                        <div class="content">
                            <ul class="list-unstyled">
                                <li><i class="fas fa-map-marker-alt"></i><span class="sr-only">Location:</span>Kansas City, US</li>
                                <li><i class="fas fa-envelope"></i><span class="sr-only">Email:</span><a href="#">mourisabar@gmail.com</a></li>
                                {/* <li><i class="fas fa-link"></i><span class="sr-only">Website:</span><a href="#">https://www.website.com</a></li> */}
                            </ul>
                        </div>
                    </div>              
                </aside>
                <aside className="education aside section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading">Education</h2>
                        <div className="content">
                           <div className="item">
                                <h3 className="title"><i className="fas fa-graduation-cap"></i> Data Analytics Bootcamp</h3>
                                <h4 className="university">Kansas University <span className="year">(September 2023)</span></h4>
                            </div>
                            <div className="item">                      
                                <h3 className="title"><i className="fas fa-graduation-cap"></i> BSc Computer Science</h3>
                                <h4 className="university">University Of Missouri Kansas City <span className="year">(2019-2022)</span></h4>
                            </div>
                            
                        </div>
                    </div>
                </aside>
                <aside className="languages aside section">
                    <div className="section-inner shadow-sm rounded">
                        <h2 className="heading">Languages</h2>
                        <div className="content">
                            <ul className="list-unstyled">
                                <li className="item">
                                    <span className="title"><strong>English:</strong></span>
                                    <span className="level"> Professional Proficiency <br className="visible-xs"/><i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> </span>
                                </li>
                                <li className="item">
                                    <span className="title"><strong>French:</strong></span>
                                    <span className="level"> Professional Proficiency <br className="visible-sm visible-xs"/><i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </aside>
                </div>
            </div>
        </div>

        
    );
}

export default AboutMe