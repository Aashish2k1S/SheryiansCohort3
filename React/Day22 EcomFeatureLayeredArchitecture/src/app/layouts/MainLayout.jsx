import { Outlet } from "react-router"

const MainLayout = () => {
    return (
        <div>
            <div>Navbar</div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout