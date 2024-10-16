import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorkingExample from './pages/WorkingExample'
import ExampleWithError from './pages/ExampleWithError'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/working-example" element={<WorkingExample />} />
        <Route path="/example-with-error" element={<ExampleWithError />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
