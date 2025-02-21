import "./styles/App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layout/RootLayOut";
import HRDLOGuide from "./pages/HRDLOGuide";
import Announcements from "./pages/Announcements";
import FAQ from "./pages/FAQ";
import CourseManagement from "./pages/CourseManagement";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route index element={<HRDLOGuide />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/course-management" element={<CourseManagement />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
