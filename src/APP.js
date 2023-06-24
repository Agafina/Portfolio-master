import './APP.css';
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Testimonial from './components/testimonial/Testimonial'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Portfolio from './components/portfolio/Portfolio';
function APP(){
    return(
        <>
            <Header/>
            <Contact/>
            <About/>
            <Experience/>
            <Footer/>
            <Portfolio/>
            <Navbar/>
            <Services/>
            <Testimonial/>  
            
        </>
    )

}
    export default APP;





