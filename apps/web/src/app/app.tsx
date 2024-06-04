import Landing from '../pages/landing';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from '../layout/Layout';
import Visualnote from '../pages/visualnote';
import Login from '../pages/login';
import Registration from '../pages/registration';
import Dashboard from '../pages/dashboard';
import Create from '../components/dashboardTabs/Create';
import Catalog from '../components/dashboardTabs/Catalog';
import { DashboardDataProvider } from '../contexts/DashBoardDataContext';

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <main>
          <Routes>
            <Route index element={<Landing />} />
            <Route path="/visual-note" element={<Visualnote />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />
            <Route
              path="/dashboard"
              element={
                <DashboardDataProvider>
                  <Dashboard />
                </DashboardDataProvider>
              }
            >
              <Route path="create" element={<Create />} />
              <Route path="notes" element={<Catalog />} />
            </Route>
          </Routes>
        </main>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
