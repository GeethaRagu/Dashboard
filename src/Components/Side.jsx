import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const Side = () => {
  return (
    <div>
      {[false,].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid className="sidebar">
            {/* <Navbar.Brand href="#">Admin</Navbar.Brand> */}
            <Link
              className="sidebar-brand d-flex align-items-center justify-content-center"
              to="/dashboard"
            >
              <i className="fas fa-laugh-wink" />

              <div className="sidebar-brand-text mx-3">Admin</div>
            </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="sidebar">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Admin
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Link className="nav-link" to="/dashboard">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Dashboard</span>
                  </Link>
                  <Link className="nav-link" to="/add">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Add book</span>
                  </Link>
                  <Link className="nav-link" to="/edit">
                    <i className="fas fa-fw fa-tachometer-alt" />
                    <span>Manage Book</span>
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  );
};

export default Side;
