import React from 'react'

export default function Home  () {
  const links = [
    {"name":"Home","link":"/"},
    {"name":"About","link":"/about"},
    {"name":"Products","link":"/"}
  ]
    return (

    <div>
        <header className="flex justify-between  items-end p-4 shadow-2xl  bg-gray-700 ">
            <h1 className="font-bold">
                <span className="bg-gradient-to-r from-red-500 to-sky-500 bg-clip-text text-transparent md:text-2xl">SHOPPING</span>
            </h1>
            <nav className="flex gap-3 font-semibold ">
                {links.map((links) => ( (
                    <a key={links.name} href={links.link} className="">
                        {links.name}
                        </a>
                        )))}
            </nav>
        </header>
        <div className='justify-center items-center'>
                    
        </div>
    </div>
  )
}
