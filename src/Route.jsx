import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import PrivateRoute from "./components/PrivateRoute";

// Main Page
import Home from "./pages/public/home/Home";
import Login from "./pages/public/login/Login";
import Registration from "./pages/public/registration/Registration";
import Newuser from "./pages/public/newuser/Newuser";
// Components
import Navbar from "./components/navbar/Navbar";

// Employee Dashboard
import EmployeeDashboard from "./pages/dashboard/employee/home/Home";
import EmployeeInsurance from "./pages/dashboard/employee/insurance/insurance";
import EmployeeNavbar from "./components/dashnavbar/employee/Navbar";
import EmployeeSidebar from "./components/dashsidebar/employee/Sidebar";
import EmployeePatients from "./pages/dashboard/employee/patients/Patients";
// Patient Dashboard
import PatientDashboard from "./pages/dashboard/patient/home/Home";

// Doctor Dashboard
import DoctorDashboard from "./pages/dashboard/doctor/home/Home";

// Agent Dashboard
import AgentDashboard from "./pages/dashboard/agent/home/Home";

// Layout Components
const MainLayout = ({ children }) => (
  <>
    <ScrollToTop />
    <Navbar />
    {children}
    {/* <Footer /> */}
  </>
);

const NoFooterLayout = ({ children }) => (
  <>
    <ScrollToTop />
    <Navbar />
    {children}
  </>
);

const DashboardLayout = ({ children }) => (
  <>
    <ScrollToTop />
    <EmployeeNavbar />
    <EmployeeSidebar />
    {children}
  </>
);
const EmployeeDashboardLayout = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col w-full h-auto overflow-hidden">
        <EmployeeNavbar />
        <div className="flex flex-row w-full gap-2 h-aut0">
          <div className=" flex w-15 md:w-72 max-w-[300px] h-[calc(100vh_-_60px)]">
            <EmployeeSidebar />
          </div>
          <div className="flex-1 h-[calc(100vh_-_60px)] overflow-y-auto">{children}</div>
        </div>
      </div>
    </>
  );
};

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route
        path="/about"
        element={<MainLayout>{/* <About /> */}</MainLayout>}
      />
      <Route
        path="/services"
        element={<MainLayout>{/* <Services /> */}</MainLayout>}
      />
      <Route
        path="/get-quote"
        element={<MainLayout>{/* <GetQuote /> */}</MainLayout>}
      />
      <Route
        path="/payment"
        element={<MainLayout>{/* <Payment /> */}</MainLayout>}
      />
      <Route path="/shop" element={<MainLayout>{/* <Shop /> */}</MainLayout>} />

      <Route
        path="/login"
        element={<NoFooterLayout>{<Login />}</NoFooterLayout>}
      />
      <Route
        path="/registration"
        element={<NoFooterLayout>{<Registration />}</NoFooterLayout>}
      />
      <Route
        path="/newuser"
        element={<NoFooterLayout>{<Newuser />}</NoFooterLayout>}
      />
      <Route
        path="/forgot-password"
        element={<NoFooterLayout>{/* <Forgot /> */}</NoFooterLayout>}
      />
      <Route
        path="/appointment"
        element={<MainLayout>{/* <Appointment /> */}</MainLayout>}
      />
      <Route
        path="/terms-and-conditions"
        element={<MainLayout>{/* <Termsnconditions /> */}</MainLayout>}
      />
      <Route
        path="/registration-complete"
        element={
          <NoFooterLayout>{/* <Registrationcomplete /> */}</NoFooterLayout>
        }
      />
      <Route
        path="/employeedashboard/*"
        element={
          <PrivateRoute>
            <EmployeeDashboardLayout>
              <Routes>
                <Route index element={<EmployeeDashboard />} />
                <Route path="insurance" element={<EmployeeInsurance />} />
                <Route path="patients" element={<EmployeePatients />} />
                {/* Additional routes can be added here */}
              </Routes>
            </EmployeeDashboardLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/patientdashboard/*"
        element={
          <PrivateRoute>
            <DashboardLayout>{<PatientDashboard />}</DashboardLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/doctordashboard/*"
        element={
          <PrivateRoute>
            <DashboardLayout>{<DoctorDashboard />}</DashboardLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/agentdashboard/*"
        element={
          <PrivateRoute>
            <DashboardLayout>{<AgentDashboard />}</DashboardLayout>
          </PrivateRoute>
        }
      />
    </Routes>
  </Router>
);

export default AppRoutes;
