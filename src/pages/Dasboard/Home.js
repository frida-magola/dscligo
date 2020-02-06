import React from 'react';
import '../../styling/main.css';
import Layout from '../../components/Layout/Layout'

const Home = (props) => {
    const title = "Display all patients";
    return (
        <Layout
            username={props.username}
            openSlideMenu={props.openSlideMenu}
            closeSlideMenu={props.closeSlideMenu}
            title={title}
            openSearchInput={props.openSearchInput}
        >
           <div className="home">
                <h1>Display Content </h1>
          
            </div> 
        </Layout>
        
    );
}

export default Home;