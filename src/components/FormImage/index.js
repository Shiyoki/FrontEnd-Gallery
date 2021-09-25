import axios from "axios"
import { useState, useRef } from "react"
import FileBase from 'react-file-base64'

export default function FormImage(){

const[tags, setTags]= useState([]);
const[title, setTitle]= useState("");
const[description, setDescription]= useState("");
const[creator, setCreator]= useState("");
const[selected, setSelected]= useState(null);

const handleTitleChange = ({ target: {value } }) => setTitle(value);
const handleDescriptionChange = ({ target: {value } }) => setDescription(value);
const handleCreatorChange = ({ target: {value } }) => setCreator(value);
const handleTagsChange = ({ target: {value } }) => setTags(value);
/*const handleSelectedChange = ({ target: {value } }) => setSelected(value);*/
const handleFileChange = (e) => {
    setSelected(e)
}
const inputFileRef = useRef()

/*const information = {
    title:title,
    description:description,
    creator:creator,
    tags:tags,
    
}
console.log(information)*/
const information = new FormData()
information.append('title', title)
information.append('description', description)
information.append('creator', creator)
information.append('tags', tags)
information.append('selectedFile', selected)

const url="http://localhost:5000/posts"
const handleEventPost = async()=>{
    await axios.post(url, information)
    .then(response=>{
        console.log(response.data)
    })
    .catch(error=>{
        console.log(error)
    })
}

    return(
        <div className="grid grid-rows-1 bg-purple-900 w-2/3 p-16">
            <div className="grid grid-cols-1">
            <h1 className="text-purple-100 text-center font-bold mb-4 text-3xl">Subir imagen</h1>
                    <div className="space-y-4">
                        <div className="mb-4">
                            <label className="text-white mb-2 block font-bold" for="userInput">Creador</label>
                            <input className="border-2 border-gray-400 w-full p-3 outline-none focus:border-indigo-200" value={creator} type="text" id="creatorInput" onChange={handleCreatorChange}></input>
                        </div>
                        <div className="mb-4">
                            <label className="text-white mb-2 block font-bold" for="titleInput">Titulo</label>
                            <input className="border border-gray-400 w-full p-3" value={title} type="text" id="titleInput" onChange={handleTitleChange}></input>
                        </div>
                        <div className="mb-4">
                            <label className="text-white mb-2 block font-bold" for="descriptionInput">Descripción</label>
                            <textarea className="border border-gray-400 w-full p-3" value={description} type="text" id="descriptionInput" onChange={handleDescriptionChange}></textarea>
                        </div>
                        <div className="mb-4">
                            <label className="text-white mb-2 block font-bold" for="generoInput">Categoria</label>
                            <input className="border border-gray-400 w-full p-3" value={tags} type="text" id="generoInput" onChange={handleTagsChange}></input>
                        </div>
                        <div className="mt-5 mb-4">
                            <label className="text-white mr-2 block font-bold" for="fileInput">Subir imagen</label>
                            <input className="" ref={inputFileRef} type="file" id="fileInput" onChange={(e)=>handleFileChange(e.target.files[0])} /> 
                        </div>
                        <div className="mt-2">
                            <a className="p-3  text-white rounded-sm focus:outline-none transition ease-in-out duration-300 bg-blue-500 hover:bg-blue-700 cursor-pointer w-full" onClick={handleEventPost}>Agregar</a>
                        </div>
                    </div>
                <div>
                  
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}