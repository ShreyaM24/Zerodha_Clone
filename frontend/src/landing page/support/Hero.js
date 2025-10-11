import React from "react";

function Hero() {
    return (
        <>
            <section className="hero-section" style={{ marginTop: "100px" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-4"><h1 className="fw-bold mb-4">Support Portal</h1></div>
                        <div className="col-6"></div>
                        <div className="col-2"><button className="btn btn-primary px-3">My Ticket</button></div>
                    </div>
                    <div className="search-box position-relative mx-auto" style={{ maxWidth: "80vw" }}>
                        <input
                            type="text"
                            className="form-control shadow-sm"
                            placeholder="Eg: How do I open my account, How do I activate F&O..."
                        />
                        <i
                            className="fa-solid fa-magnifying-glass position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
                            style={{ cursor: "pointer" }}
                        ></i>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
