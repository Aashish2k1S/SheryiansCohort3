import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'

const AuthLayout = () => {
  const { employee, isLoading } = useSelector((store) => store.auth); 

  if (isLoading) return null; 
  if (employee) return <Navigate to="/home" replace />; 
  
  return <Outlet />;
}

export default AuthLayout;