import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddSchool from './components/AddSchool';

import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import ShowSchoolData from './components/ShowSchoolData';


const App = () => {
    return (
      <>
      <ToastContainer />
      
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/addSchool">Add School</Link>
                        </li>
                        <li>
                            <Link to="/showSchools">Show Schools</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
              
                    <Route path="/addSchool" element={<AddSchool />} />
                    <Route path="/showSchools" element={<ShowSchoolData />} />
                </Routes>
            </div>
        </Router>
        </>
    );
};

export default App;
