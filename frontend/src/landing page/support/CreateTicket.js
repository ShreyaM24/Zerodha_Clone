import React from "react";
import { Accordion } from "react-bootstrap";

function CreateTicket() {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Left Side - Categories */}
        <div className="col-md-8">
          <Accordion defaultActiveKey="0" alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <i className="fa-solid fa-user-plus me-2 text-primary"></i>
                Account Opening
              </Accordion.Header>
              <Accordion.Body>
                Information about opening your Zerodha account.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <i className="fa-regular fa-user me-2 text-primary"></i>
                Your Zerodha Account
              </Accordion.Header>
              <Accordion.Body>
                Manage your Zerodha account settings and details.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <i className="fa-solid fa-chart-line me-2 text-primary"></i>
                Kite
              </Accordion.Header>
              <Accordion.Body>
                Help regarding Kite platform, charts, and orders.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <i className="fa-solid fa-indian-rupee-sign me-2 text-primary"></i>
                Funds
              </Accordion.Header>
              <Accordion.Body>
                Adding, withdrawing, and managing your funds.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <i className="fa-regular fa-file-lines me-2 text-primary"></i>
                Console
              </Accordion.Header>
              <Accordion.Body>
                Reports, portfolio, and P&L statements.
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="5">
              <Accordion.Header>
                <i className="fa-regular fa-clock me-2 text-primary"></i>
                Coin
              </Accordion.Header>
              <Accordion.Body>
                Mutual funds & investment queries.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        {/* Right Side */}
        <div className="col-md-4">
          {/* Notice/Updates Box */}
          <div className="p-3 mb-4 bg-warning-subtle border-start border-4 border-warning rounded">
            <ul className="list-unstyled mb-0">
              <li>
                <a href="#" className="text-primary fw-semibold">
                  Exclusion of F&O contracts on 8 securities from August 29, 2025
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="text-primary fw-semibold">
                  Revision in expiry day of Index and Stock derivatives contracts
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="card shadow-sm">
            <div className="card-header fw-bold bg-light">Quick links</div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a href="#" className="text-primary">
                  1. Track account opening
                </a>
              </li>
              <li className="list-group-item">
                <a href="#" className="text-primary">
                  2. Track segment activation
                </a>
              </li>
              <li className="list-group-item">
                <a href="#" className="text-primary">
                  3. Intraday margins
                </a>
              </li>
              <li className="list-group-item">
                <a href="#" className="text-primary">
                  4. Kite user manual
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
