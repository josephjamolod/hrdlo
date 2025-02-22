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
import AnnouncementDetail from "./pages/AnnouncementDetail";
import FAQ from "./pages/FAQ";
import FAQDetail from "./pages/FAQDetail";
import CourseManagement from "./pages/CourseManagement";
import HRDLOLayout from "./layout/HRDLOLayout";
import TraineeRegistration from "./pages/TraineeRegistration";
import AttendanceSheet from "./pages/AttendanceSheet";
import TimeTable from "./pages/TimeTable";
import ConsultationManagement from "./pages/ConsultationManagement";
import CBT from "./pages/CBT";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route element={<HRDLOLayout />}>
          <Route index element={<HRDLOGuide />} />
          <Route
            path="/trainee-registration"
            element={<TraineeRegistration />}
          />
          <Route path="/attendance-sheet" element={<AttendanceSheet />} />
          <Route path="/time-table" element={<TimeTable />} />
          <Route
            path="/consultation-management"
            element={<ConsultationManagement />}
          />
          <Route path="/CBT" element={<CBT />} />
        </Route>
        <Route path="/announcements">
          <Route index element={<Announcements />} />
          <Route path=":id" element={<AnnouncementDetail />} />
        </Route>
        <Route path="/faq">
          <Route index element={<FAQ />} />
          <Route path=":id" element={<FAQDetail />} />
        </Route>
        <Route path="/course-management" element={<CourseManagement />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
