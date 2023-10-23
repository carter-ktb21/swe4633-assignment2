import logo from './logo.svg';

import './App.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Routes, Route } from 'react-router-dom';
import { DataTable } from './Components/DataTable'
import { DataForm } from './Components/DataForm';

function App() {
  return (
    <div>
    <Routes>
      <Route exact path="/" element={<DataForm />} />
      <Route path="/dataTable" element={<DataTable />} />
    </Routes>
    </div>
  );
}

export default App;
