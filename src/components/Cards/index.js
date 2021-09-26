import axios from "axios"
import { useEffect, useState } from "react"


export default function Cards(){

    const [data, setData] = useState([])

    useEffect(()=>{
        getData()
    },[])
    
    const url = 'https://shiyogallery-backend.herokuapp.com/posts/'
    const getData = async()=>{
        await axios.get(url)
    .then(response=>{
        console.log(response.data)
        const datos = response.data
        setData(datos)
    })
    }
    return(
        <>
            {
                data.map((card) =>{

                    return(
                    <div className="">
                        <div className="sm:mt-3">
                            <div className="bg-indigo-900 mb-6 shadow-lg w-72 h-72 p-3">
                             <h1 className="text-white font-bold text-center">{card.creator}</h1>
                             <img className="mt-1 h-52 block w-full" src={card.selectedFile}></img>
                             <hr></hr>
                             <h2 className="text-white font-semibold text-center">{card.description}</h2>
                            </div>
                        </div>
                    </div>
                    
                        
                    )
                }
                    )
                    
                }
            
        </>
    )
}