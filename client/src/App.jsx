import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';
import ContactUs from './pages/ContactUs';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LogOut from './pages/LogOut';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './pages/NotFound';
import EmployeesList from './pages/EmployeesList';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import DataDeletionInstruction from './pages/DataDeletionInstruction';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Toaster position="top-right" />
        <Routes>
          <Route path="/" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route
            path="/data-deletion-instruction"
            element={<DataDeletionInstruction />}
          />
          <Route
            path="/login"
            element={
              <ProtectedRoute isAuthRoute={true}>
                <LoginPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <ProtectedRoute isAuthRoute={true}>
                <RegisterPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/logout"
            element={
              <ProtectedRoute isLogoutRoute={true}>
                <LogOut />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute isAuthRoute={false} isLogoutRoute={false}>
                <EmployeesList />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<NotFound />} />{' '}
          {/* Catch-all route for 404 */}
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
