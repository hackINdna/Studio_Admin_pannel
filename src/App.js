import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import StudioSectionActive from './components/StudioSectionActive';
import StudioSectionInactive from './components/StudioSectionInactive';
import AuditionSectionActive from './components/AuditionSectionActive';
import AuditionSectionInactive from './components/AuditionSectionInactive';
import StudioSubscription from './components/StudioSubscription';
import StudioQuery from './components/StudioQuery';
import AuditionQuery from './components/AudtitionQuery';
import PromoReq from './components/PromoReq';
import AuditionSubscription from './components/AuditionSubscription';
import NotificationStudio from './components/NotificationStudio';
import NotificationAudition from './components/NotificationAudition';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/studiosectionactive" element={<StudioSectionActive />} />
          <Route path="/studiosectioninactive" element={<StudioSectionInactive />} />
          <Route path="/studiosubscription" element={<StudioSubscription />} />
          <Route path="/auditionsubscription" element={<AuditionSubscription />} />
          <Route path="/auditionsectionactive" element={<AuditionSectionActive />} />
          <Route path="/auditionsectioninactive" element={<AuditionSectionInactive />} />
          <Route path="/studioquery" element={<StudioQuery />} />
          <Route path="/auditionquery" element={<AuditionQuery />} />
          <Route path="/promoreq" element={<PromoReq />} />
          <Route path="/notificationstudio" element={<NotificationStudio />} />
          <Route path="/notificationaudition" element={<NotificationAudition />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
