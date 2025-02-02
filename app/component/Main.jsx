import React from 'react'
import Header from './Header'
import About from './About'
import Navbar from './Navbar2'

const Main = () => {
  return (
    <>
    <div className="flex h-screen w-full">
      {/* Fixed 40% width section */}
      <div className="w-2/5 h-full bg-gray-200 p-4 shadow-lg">
        <h2 className="text-xl font-bold">Fixed Section</h2>
        <p>This section stays fixed.</p>
      </div>
      
      {/* Scrollable 60% width section */}
      <div className="w-3/5 h-screen overflow-y-auto p-4">
        
      <Navbar />
      

        <div className="space-y-4">
        <Header />
            <About />
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Main
