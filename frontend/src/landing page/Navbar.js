import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <nav className="navbar navbar-expand-lg border-bottom fixed-top py-3" style={{ backgroundColor: "#fff" }}>
                <div className="container px-5">
                    {/* Logo */}
                    <Link className="navbar-brand" to="/">
                        <img src="media-images/logo.svg" style={{ width: "23%" }} alt="logo" />
                    </Link>

                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                        <li className="nav-item mx-3">
                            <Link className="nav-link" to="/signup">Signup</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link" to="/products">Products</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link" to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link" to="/support">Support</Link>
                        </li>

                        {/* Hamburger button */}
                        <li className="nav-item mx-3">
                            <button
                                className="btn border-0 bg-transparent"
                                onClick={() => setMenuOpen(!menuOpen)}
                            >
                                <i className="fa-solid fa-bars fs-4"></i>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Zerodha-style dropdown */}
            {menuOpen && (
                <div
                    className="position-absolute bg-white shadow rounded-3 p-4"
                    style={{
                        top: "70px",   // just below navbar
                        right: "40px", // aligned with hamburger
                        width: "750px",
                        zIndex: 1000,
                    }}
                >
                    {/* Top apps row with images */}
                    <div className="d-flex justify-content-around text-center mb-4" >
                        <Link to="http://localhost:3001/"><div>
                            <img src="https://zerodha.com/static/images/products/kite-logo.svg" alt="Kite" style={{ width: "40px", marginBottom: "8px" }} />
                            <h6 className="mb-1" style={{textDecoration: "none"}}>Kite</h6>
                            <small className="text-muted" style={{textDecoration: "none"}}>Trading platform</small>
                        </div></Link>
                        <div>
                            <img src="https://zerodha.com/static/images/products/console.svg" alt="Console" style={{ width: "40px", marginBottom: "8px" }} />
                            <h6 className="mb-1">Console</h6>
                            <small className="text-muted">Backoffice</small>
                        </div>
                        <div>
                            <img src="	https://zerodha.com/static/images/products/kite-connect.svg" alt="Kite Connect" style={{ width: "40px", marginBottom: "8px" }} />
                            <h6 className="mb-1">Kite Connect</h6>
                            <small className="text-muted">Trading APIs</small>
                        </div>
                        <div>
                            <img src="https://zerodha.com/static/images/products/kite-connect.svg" alt="Coin" style={{ width: "40px", marginBottom: "8px" }} />
                            <h6 className="mb-1">Coin</h6>
                            <small className="text-muted">Mutual funds</small>
                        </div>
                    </div>

                    <hr />

                    {/* Utilities + Updates + Education */}
                    <div className="row">
                        <div className="col-md-4">
                            <h6>Utilities</h6>
                            <ul className="list-unstyled">
                                <li>Calculators</li>
                                <li>Brokerage calculator</li>
                                <li>Margin calculator</li>
                                <li>SIP calculator</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h6>Updates</h6>
                            <ul className="list-unstyled">
                                <li>Z-Connect blog</li>
                                <li>Circulars / Bulletin</li>
                                <li>IPOs</li>
                                <li>Markets</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h6>Education</h6>
                            <ul className="list-unstyled">
                                <div style={{ display: "flex", gap: "20px" }}>
                                    <div><img src="https://zerodha.com/static/images/products/varsity.png" alt="Varsity" style={{ width: "30px", marginBottom: "8px" }} /><br />
                                        <div>Varsity</div></div>
                                    <div><img src="https://zerodha.com/static/images/products/tqna.png" alt="Brokerage" style={{ width: "40px", marginBottom: "8px", marginLeft: "15px" }} /><br />
                                        <div>Trading Q&A</div></div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Navbar;
