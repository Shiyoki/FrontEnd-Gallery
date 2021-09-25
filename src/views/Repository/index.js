import AppNav from "../../components/AppNav"
import Cards from "../../components/Cards"
import Footer from "../../components/Footer"

export default function Repository(){
    
    return(
        <>
        <div className="flex flex-col">  
            <div>
                <AppNav  />
            </div>
            <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 p-4">
                <Cards />
            </div>  
        </div>
       
        </>
    )
}