import React from 'react';
import '../../styling/main.css';
import Layout from '../../components/Layout/Layout'
import '../../fontello/css/fontello.css';

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
                <h1 className="icon-user">Display Content </h1>
          
            </div> 
        </Layout>
        
    );
}

export default Home;