
const Footer = () => {
  return (
    <div className="mt-4 py-4 border-white border-t-2 flex flex-col items-center justify-center gap-2">
        <p>Sky<span className="text-lime-400">Mart</span></p>
        <p className="text-[#3a3a3a]">&copy; {Date().substring(11,15)}  SkyMart • Built with React + React-Router + Context API</p>

    </div>
  )
}

export default Footer