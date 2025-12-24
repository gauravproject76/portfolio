import React from 'react'

const NavBar = () => {
    return (
        <header className="absolute inset-0 bottom-175 z-10 flex items-center justify-center">
            <div className="flex gap-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-4xl px-6 py-2 mt-4">
                <ul className="flex gap-5 p-1">
                    <li className='text-[var(--accent-secondary)]'><a href='#home'>Home</a></li>
                    <li><a href='#projects'>Projects</a></li>
                    <li><a href='#languages'>Lanaguages</a></li>
                    <li><a href='#learning'>Learning</a></li>
                </ul>
                <a href="#" className="bg-white rounded-2xl text-black font-semibold px-3 py-1 hidden md:block">Mail Me</a>
            </div>
        </header>
    )
}

export default NavBar