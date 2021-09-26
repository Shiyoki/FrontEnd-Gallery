import Navbar from '../../components/Navbar';
import Carousell from '../../components/Carousel';
import Footer from '../../components/Footer';

export default function Home(){
    return(
        <div className="flex flex-col">
            <div>
                <Navbar/>
            </div>        
            <div className="">
             <Carousell />
            </div>
            <div className="mt-10">
            <Footer /> 
            </div>  
        </div>
    )
}