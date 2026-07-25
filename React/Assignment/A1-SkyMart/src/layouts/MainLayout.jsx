import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen bg-[#111111] text-white py-6 font-skymart w-full md:max-w-7xl md:mx-auto scrollbar-track-red-700">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout