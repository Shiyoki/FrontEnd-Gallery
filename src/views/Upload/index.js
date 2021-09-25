import AppNav from "../../components/AppNav";
import FormImage from "../../components/FormImage";
export default function Upload(){
    return(
        <div className="flex flex-col">
        <AppNav />
        <div className="flex justify-center mt-10 content-center flex-auto">
            <FormImage />
        </div>
        
        </div>
    )
}