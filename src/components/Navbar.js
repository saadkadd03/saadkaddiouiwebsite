import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import { CgGitFork, CgFileDocument } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  // Change navbar color on scroll
  const scrollHandler = () => {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  };

  // Scroll listener
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  // Ad script loader
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://pl28617432.effectivegatecpm.com/95/a0/20/95a020556c8a57edf0eb09a502aae886.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex">
            <img src={logo} className="img-fluid logo" alt="brand" />
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => updateExpanded(expand ? false : "expanded")}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">

              <Nav.Item>
                <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                  <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={Link} to="/resume" onClick={() => updateExpanded(false)}>
                  <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="#" target="_blank" rel="noreferrer">
                  <ImBlog style={{ marginBottom: "2px" }} /> Blogs
                </Nav.Link>
              </Nav.Item>

              <Nav.Item className="fork-btn">
                <Button
                  href="https://github.com/saadkadd03"
                  target="_blank"
                  className="fork-btn-inner"
                >
                  <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                  <AiFillStar style={{ fontSize: "1.1em" }} />
                </Button>
              </Nav.Item>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Optional ad container if the script needs a DOM target */}
      <div id="ad-container"></div>
    </>
  );
}

export default NavBar;
