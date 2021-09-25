import { Link } from "react-router-dom"

export default function AppNav(){
    const menu = document.getElementById('menu')
  
    const handleButtonClick = () =>{
      menu.classList.toggle('hidden')
    }
  
      return( 
          <nav className="flex items-center justify-between flex-wrap bg-purple-900 p-6 ">
          <div className="flex items-center flex-shrink-0 text-white mr-6 ">
           <Link to="/"><span className="font-semibold text-xl tracking-tight">Repository</span></Link> 
          </div>
          <div className="block lg:hidden">
            <button onClick={handleButtonClick} className="flex items-center px-3 py-2 border rounded text-indigo-200 border-indigo-100 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
          </div>
          <div id="menu" className="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden ">
            <div className="text-sm lg:flex-grow">
            </div>
          <div>
            <button className="text-white">
            </button>
            <Link to="/upload"><a href="/#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-purple-200 mt-4 lg:mt-0 "> Subir imagen </a></Link>
          </div>
          </div>
        </nav>
       
    )
  }