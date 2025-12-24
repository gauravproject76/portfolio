import { DotIcon } from 'lucide-react'
import React from 'react'

const Hero = () => {
  return (
        <section id='home' className="relative w-full min-h-150 flex flex-col justify-center items-center text-white overflow-hidden pt-20 md:pt-24">
            <div className="absolute inset-0">
                <img src="assests/bg.jpg" alt="code" className="w-full h-full object-cover"/>
                <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/80 to-transparent"></div>
            </div>
            <div className="relative z-10 text-center max-w-4xl px-4">
                <span className="flex flex-col text-xs sm:text-sm font-semibold mb-6 shadow-md"><DotIcon size={30}/>Something Cooking....</span>
                <h1 className="text-3xl sm:text-5xl font-bold mb-4 leading-tight">Programmer & Developer {"</>"}</h1>
                <p className="text-base sm:text-lg opacity-90 mb-8 px-2">Building real life project that can impact our life.</p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-4xl px-6 py-2 mt-4">
                <a href='mailto:kumargaurav.project@gmail.com'>Get in Touch</a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Hero