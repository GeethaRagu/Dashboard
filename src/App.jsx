import React from "react";
import Sidebar from "./Components/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Addbook from "./Pages/Addbook";
import Managebook from "./Pages/Managebook";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./Components/Footer";
import Editbook from "./Pages/Editbook";
import Side from "./Components/Side";


const App = () => {
  return (
    <BrowserRouter>
      <Container fluid>
        <h2 className="title">Manage Books and Authors</h2>
        <hr className="title_hr" />
        <Row>
          <Col className="col-2">
            <div>
              <Side/>
            </div>
          </Col>
          <Col className="col-10">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/add" element={<Addbook />} />
              <Route path="/edit" element={<Managebook />} />
              <Route path="/editbook/:id" element={<Editbook />} />
            </Routes>
          </Col>
        </Row>
        <div>
          <Footer />
        </div>
      </Container>
    </BrowserRouter>
  );
};

export default App;
