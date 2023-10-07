import React from "react";
import Latestproject from '../assets/project-featured.jpeg'
import taxiAnalysis from '../assets/multiple_plots.jpeg'
import Bulldozer from '../assets/Machine_prediction.jpeg'
import HeartDisease from '../assets/Heart_disease.jpeg'
import Crowdfunding from '../assets/Crowdfunding.jpeg'
import hotels from '../assets/hotel_api.jpeg'
const Projects  = () => {
   
    return (
      <div className="container sections-wrapper py-5">
        <div className="row">
           <div className="primary col-lg-8 col-12">
              <section className="latest section">
                <div className="section-inner shadow-sm rounded">
                    <h2 className="heading">Latest Projects</h2>
                    <div className="content">   
                                        
                        <div className="item featured text-center">
                            
                            <div className="featured-image has-ribbon">
                                <a href="https://github.com/dilqvl62/Airlines_Data_Visualization" target="_blank">
                                <img className="img-fluid project-image rounded shadow-sm" src={Latestproject} alt="project name" />
                                </a>
                                <div className="ribbon">
                                    <div className="text">New</div>
                                </div>
                            </div>
                            
                            <h3 className="title mb-3"><a href="https://github.com/dilqvl62/Airlines_Data_Visualization" target="_blank">DataViz - Use the visualization to help choose your next Flight</a></h3>
                                
                            <div className="desc text-start">                                    
                                <p>Airlines Data Visualization is an engaging project that presents a story about US airline on-time performance through visualization. This project uses Python Flask-powered API, Pandas, HTML/CSS, JavaScript, D3, and PostgreSQL database.</p>
                            </div>        
                            <a className="btn btn-cta-secondary" href="https://github.com/dilqvl62/Airlines_Data_Visualization" target="_blank"><i className="fas fa-thumbs-up"></i> Back my project</a>                 
                        </div>
                        <hr className="divider" />
                        <div className="item row">
                            <a className="col-md-4 col-12" href="https://github.com/dilqvl62/Taxi-Analysis_EDA" target="_blank">
                            <img className="img-fluid project-image rounded shadow-sm" src={taxiAnalysis} alt="project name" />
                            </a>
                            <div className="desc col-md-8 col-12">
                                <h3 className="title"><a href="https://github.com/dilqvl62/Taxi-Analysis_EDA" target="_blank">EDA NYC Taxi - Perform the Exploratory Data Analysis on the NYC yellow cap</a></h3>
                                <p className="mb-2">The purpose of this project is to perform the Exploratory Data Analysis on the NYC yellow cap trip record in order to predict the duration of each trip.</p>
                                <p><a className="more-link" href="https://github.com/dilqvl62/Taxi-Analysis_EDA" target="_blank"><i className="fas fa-external-link-alt"></i>Find out more</a></p>
                            </div>                        
                        </div>
                        
                        <div className="item row">
                            <a className="col-md-4 col-12" href="https://github.com/dilqvl62/Bulldozer_price_prediction" target="_blank">
                            <img className="img-fluid project-image rounded shadow-sm" src={Bulldozer} alt="project name" />
                            </a>
                            <div className="desc col-md-8 col-12">
                                <h3 className="title"><a href="https://github.com/dilqvl62/Bulldozer_price_prediction" target="_blank">Machine Learning -Predict the auction sale price for a heavy equipement</a></h3>
                                <p className="mb-2"> Use machine learning with the goal of predicting the sale price of bulldozers. it is going to be a regression problem since i want to predict a number. I am going to use the evaluation metric ( root mean square log error or RMSLE) with the goal of minimizing the error.</p>
                                <p><a className="more-link" href="https://github.com/dilqvl62/Bulldozer_price_prediction" target="_blank"><i className="fas fa-external-link-alt"></i>Find out more</a></p>
                            </div>                         
                        </div>
                        
                        <div className="item row">
                            <a className="col-md-4 col-12" href="https://github.com/dilqvl62/Heart_disease_machine_learning" target="_blank">
                            <img className="img-fluid project-image rounded shadow-sm" src={HeartDisease} alt="project name" />
                            </a>
                            <div className="desc col-md-8 col-12">
                                <h3 className="title"><a href="https://github.com/dilqvl62/Heart_disease_machine_learning" target="_blank">Predict Heart Disease - Predicting heart disease using machine learning</a></h3>
                                <p className="mb-2">using various Python-based machine learning and data science libraries in an attempt to build a machine leaning model capable of predicting wheather or not someone has heart disease based on their medical attributes.</p>
                                <p><a className="more-link" href="https://github.com/dilqvl62/Heart_disease_machine_learning" target="_blank"><i className="fas fa-external-link-alt"></i>Find out more</a></p>
                            </div>                         
                        </div>
                        
                        <div className="item row">
                            <a className="col-md-4 col-12" href="https://github.com/SamuelTHaynes/Crowdfunding_ETL/tree/main" target="_blank">
                            <img className="img-fluid project-image rounded shadow-sm" src={Crowdfunding} alt="project name" />
                            </a>
                            <div className="desc col-md-8 col-12">
                                <h3 className="title"><a href="https://github.com/SamuelTHaynes/Crowdfunding_ETL/tree/main" target="_blank">Crowdfunding_ETL - Building an ETL pipeline </a></h3>
                                <p className="mb-2"> This is a team project to build a pipeline using Python, Pandas, and Python dictionary methods to extract and transform the data.</p>
                                <p><a className="more-link" href="https://github.com/SamuelTHaynes/Crowdfunding_ETL/tree/main" target="_blank"><i className="fas fa-external-link-alt"></i>Find out more</a></p>
                            </div>                        
                        </div>                           
                        <div className="item row">
                            <a className="col-md-4 col-12" href="https://github.com/dilqvl62/python-api-challenge" target="_blank">
                            <img className="img-fluid project-image rounded shadow-sm" src={hotels} alt="project name" />
                            </a>
                            <div className="desc col-md-8 col-12">
                                <h3 className="title"><a href="https://github.com/dilqvl62/python-api-challenge" target="_blank"> API`s - Python requests, API`s and JSON traversals</a></h3>
                                <p className="mb-2"> What is the weather like as we approach the equator? “That’s obvious. It gets hotter.” But, if pressed for more information, how would you prove that?

                               </p>
                                <p><a className="more-link" href="https://github.com/dilqvl62/python-api-challenge" target="_blank"><i className="fas fa-external-link-alt"></i>Find out more</a></p>
                            </div>                         
                        </div>
                        
                    </div>
                </div>            
            </section>
            
         </div>
           <div className="secondary col-lg-4 col-12">
            <aside className="info aside section">
            <div className="section-inner shadow-sm rounded">
                        <h2 className="heading">Other Projects</h2>
                        <div className="content">
                            <div className="item">
                                <h5 className="title"><a href="https://github.com/dilqvl62/VBA-Chalenge" target="_blank">VBA - Crodfunding platforms</a></h5>
                                <p className="summary">Crowdfunding platforms like Kickstarter and Indiegogo have been growing in success and popularity since the late 2000s. More and more people are using crowdfunding to launch new products, but not every project has found success.</p>
                                <p><a className="more-link" href="https://github.com/dilqvl62/VBA-Chalenge" target="_blank"><i className="fas fa-external-link-alt"></i>GitHub Link</a></p>
                            </div>
                            <div className="item">
                                <h5 className="title"><a href="https://github.com/dilqvl62/deep-learning-challenge" target="_blank">Deep Learning - binary classifier that can predict applicants success3. </a></h5>
                                <p className="summary">The nonprofit foundation Alphabet Soup wants a tool that can help it select the applicants for funding with the best chance of success in their ventures.</p>
                                <p><a className="more-link" href="https://github.com/dilqvl62/deep-learning-challenge" target="_blank"><i className="fas fa-external-link-alt"></i>GitHub Link</a></p>
                            </div>
                            <div className="item">
                                <h5 className="title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/nova-bootstrap-landing-page-template-for-mobile-apps/" target="_blank">Big Data - Use SparkSQL on Home sales data</a></h5>
                                <p className="summary">use your knowledge of SparkSQL to determine key metrics about home sales data. Then you'll use Spark to create temporary views, partition the data, cache and uncache a temporary table, and verify that the table has been uncached.</p>
                                <p><a className="more-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/nova-bootstrap-landing-page-template-for-mobile-apps/" target="_blank"><i className="fas fa-external-link-alt"></i>GitHub Link</a></p>
                            </div>
                            <div className="item">
                                <h5 className="title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/nova-bootstrap-landing-page-template-for-mobile-apps/" target="_blank">Big Data - Use SparkSQL on Home sales data</a></h5>
                                <p className="summary">use your knowledge of SparkSQL to determine key metrics about home sales data. Then you'll use Spark to create temporary views, partition the data, cache and uncache a temporary table, and verify that the table has been uncached.</p>
                                <p><a className="more-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/nova-bootstrap-landing-page-template-for-mobile-apps/" target="_blank"><i className="fas fa-external-link-alt"></i>GitHub Link</a></p>
                            </div>
                            <div className="item">
                                <h5 className="title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/nova-bootstrap-landing-page-template-for-mobile-apps/" target="_blank">Big Data - Use SparkSQL on Home sales data</a></h5>
                                <p className="summary">use your knowledge of SparkSQL to determine key metrics about home sales data. Then use Spark to create temporary views, partition the data, cache and uncache a temporary table, and verify that the table has been uncached.</p>
                                <p><a className="more-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/nova-bootstrap-landing-page-template-for-mobile-apps/" target="_blank"><i className="fas fa-external-link-alt"></i>GitHub Link</a></p>
                            </div>
                            <div className="item">
                                <h5 className="title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/nova-bootstrap-landing-page-template-for-mobile-apps/" target="_blank">Big Data - Use SparkSQL on Home sales data</a></h5>
                                <p className="summary">use your knowledge of SparkSQL to determine key metrics about home sales data. Then you'll use Spark to create temporary views, partition the data, cache and uncache a temporary table, and verify that the table has been uncached.</p>
                                <p><a className="more-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/nova-bootstrap-landing-page-template-for-mobile-apps/" target="_blank"><i className="fas fa-external-link-alt"></i>GitHub Link</a></p>
                            </div>
                            <div className="item">
                                <h5 className="title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/nova-bootstrap-landing-page-template-for-mobile-apps/" target="_blank">Big Data - Use SparkSQL on Home sales data</a></h5>
                                <p className="summary">use your knowledge of SparkSQL to determine key metrics about home sales data. Then you'll use Spark to create temporary views, partition the data, cache and uncache a temporary table, and verify that the table has been uncached.</p>
                                <p><a className="more-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/nova-bootstrap-landing-page-template-for-mobile-apps/" target="_blank"><i className="fas fa-external-link-alt"></i>GitHub Link</a></p>
                            </div>
                            <div className="item">
                                <h5 className="title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/nova-bootstrap-landing-page-template-for-mobile-apps/" target="_blank">Big Data - Use SparkSQL on Home sales data</a></h5>
                                <p className="summary">use your knowledge of SparkSQL to determine key metrics about home sales data. Then you'll use Spark to create temporary views, partition the data, cache and uncache a temporary table, and verify that the table has been uncached.</p>
                                <p><a className="more-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/nova-bootstrap-landing-page-template-for-mobile-apps/" target="_blank"><i className="fas fa-external-link-alt"></i>GitHub Link</a></p>
                            </div>
                            <div className="item">
                                <h5 className="title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/nova-bootstrap-landing-page-template-for-mobile-apps/" target="_blank">Big Data - Use SparkSQL on Home sales data</a></h5>
                                <p className="summary">use your knowledge of SparkSQL to determine key metrics about home sales data. Then you'll use Spark to create temporary views, partition the data, cache and uncache a temporary table, and verify that the table has been uncached.</p>
                                <p><a className="more-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/nova-bootstrap-landing-page-template-for-mobile-apps/" target="_blank"><i className="fas fa-external-link-alt"></i>GitHub Link</a></p>
                            </div>
                            
                            <a className="btn btn-cta-secondary" href="#">More on GitHub <i className="fas fa-chevron-right pt-1"></i></a>
                            
                        </div>
                    </div>           
            </aside>
           </div>
       </div> 
    </div>
       
    );
}

export default Projects