import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children, isAuthRoute, isLogoutRoute }) {
  const { isAuthenticated } = useSelector((state) => state.auth);
  console.log(isAuthenticated);

  // If the user is authenticated
  if (isAuthenticated) {
    // If it's an auth route, redirect to the dashboard
    if (isAuthRoute) {
      return <Navigate to="/admin/dashboard" />;
    }

    if (isLogoutRoute) {
      return <Navigate to="/admin/dashboard" />;
    }
    // If it's a logout route, allow access to the children
    return children;
  } else {
    // If the user is not authenticated
    // If it's an auth route, allow access to the children
    if (isAuthRoute) {
      return children;
    }
    // If it's a logout route, redirect to the dashboard
    if (isLogoutRoute) {
      return <Navigate to="/logout" />;
    }
    // Otherwise, redirect to the login page
    return <Navigate to="/login" />;
  }
}
