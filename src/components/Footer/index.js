import {FaReact, FaNode, FaLinkedin, FaGithub, FaFacebookF, FaJs} from 'react-icons/fa'

export default function Footer(){
    return(
        <div className="grid grid-cols-3 bg-purple-900 ">
            <div className="flex justify-center bg-purple-900 mt-5">
                <div >
                    <h1 className="font-bold text-indigo-100 ">Desarrollador</h1>
                        <ul >
                            <li className="text-indigo-100 flex items-center mt-4"><FaReact className="mr-1" />Bryan Garcia</li>
                        </ul>
                 </div>              
            </div>
            <div className="flex justify-center bg-purple-900 mt-5">
                <div >
                    <h1 className="font-bold text-indigo-100 ">Tecnologias</h1>
                        <ul >
                            <li className="text-indigo-100 flex items-center mt-4"><FaJs className="mr-1" />JavaScript</li>
                            <li className="text-indigo-100 flex items-center mt-4"><FaNode className="mr-1" />Node.js</li>
                            <li className="text-indigo-100 flex items-center mt-4"><FaReact className="mr-1" />React.js</li>
                        </ul>
                 </div>          
            </div>
            <div className="flex justify-center bg-purple-900 mt-5 mb-5">
                <div >
                    <h1 className="font-bold text-indigo-100 ">Redes Sociales</h1>
                        <ul >
                            <li className="text-indigo-100 flex items-center mt-4"><FaLinkedin className="mr-1" /><a className="hover:bg-purple-200 hover:text-white" href="#">Linkedin</a></li>
                            <li className="text-indigo-100 flex items-center mt-4"><FaGithub className="mr-1" /><a className="hover:bg-purple-200 hover:text-white" href="#">Github</a></li>
                            <li className="text-indigo-100 flex items-center mt-4"><FaFacebookF className="mr-1" /><a className="hover:bg-purple-200 hover:text-white" href="#">Facebook</a></li>
                        </ul>
                 </div>          
            </div>
        </div>
    )
}