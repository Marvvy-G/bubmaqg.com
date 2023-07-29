import React, {Component} from 'react';
import Header from '../Common/Header';
// this is the header image that extends from the navbar, to add to the code you have to type the following below after img. {img} please know that the url after img must be removed.
// import img from '../assets/img/header-bgbg.jpg';

//Re-usable components
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import About from '../Common/About';
import Footer from '../Common/Footer';

class Home extends Component {
    render(){
        return(
            <div>
                <Header 
                    title="BUBMAQ-G INVESTMENT LIMITED"
                    subtitle="A home of Solutions"
                    buttonText="Tell me more "
                    link="/services"
                    showButton={true}
                    img= "https://images.pexels.com/photos/17276688/pexels-photo-17276688/free-photo-of-a-skyscraper-in-a-city.jpeg?auto=compress&cs=tinysrgb&w=600"
                /> 
                <Services />
                <Portfolio />
                <About />
                <Footer /> 
                
            </div>
        )
    }
}

export default Home;