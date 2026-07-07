const Navbar = ({ setToggle }) => {
  return (
    <div className='w-full max-w-4xl mx-auto py-3 px-5 mb-8 rounded-full bg-black border border-gray-800 flex items-center justify-between shadow-lg'>
        {/* Logo/Avatar */}
        <div className='flex items-center'>
            <img 
              className='cursor-pointer w-11 h-11 object-cover rounded-full border border-gray-700 hover:scale-105 transition-transform'
              src="https://img.magnific.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?semt=ais_hybrid&w=740&q=80" 
              alt="Logo" 
            />    
        </div>    

        {/* Links */}
        <div className='flex items-center gap-8 text-sm font-medium text-gray-400'>
            <p className='cursor-pointer hover:text-white transition-colors duration-200'>Home</p>
            <p className='cursor-pointer hover:text-white transition-colors duration-200'>About</p>
            <p className='cursor-pointer hover:text-white transition-colors duration-200'>Contact</p>
        </div>

        {/* Action Button */}
        <button 
          onClick={() => setToggle(prev => !prev)} 
          className='py-2 px-5 rounded-full bg-indigo-600 hover:bg-indigo-500 font-semibold text-sm text-white shadow-md transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-black'
        >
          Create User
        </button>
    </div>
  )
}

export default Navbar