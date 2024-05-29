import React from 'react';
import Landing from '../pages/landing';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Layout from '../layout/Layout';
import Visualnote from '../pages/visualnote';

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <main>
          <Routes>
            <Route index element={<Landing />} />
            <Route path="/visual-note" element={<Visualnote />} />
          </Routes>
        </main>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
