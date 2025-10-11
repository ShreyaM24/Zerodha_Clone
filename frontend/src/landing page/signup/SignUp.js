import React, { useState } from "react";

const SignUp = () => {
    const [mobile, setMobile] = useState("");
    const [email, setEmail] = useState("");
    const [step, setStep] = useState(1);

    const handleMobileSubmit = (e) => {
        e.preventDefault();
        if (mobile.match(/^\d{10}$/)) {
            setStep(2);
        }
    };

    const handleEmailSubmit = (e) => {
        e.preventDefault();
        if (email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            setStep(3);
        }
    };

    return (
        <div style={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#f5f8fa"
        }}>
            <div style={{
                background: "#fff",
                padding: "2rem",
                borderRadius: "8px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                maxWidth: "350px",
                width: "100%"
            }}>
                <img
                    src="https://zerodha.com/static/images/logo.svg"
                    alt="Zerodha Logo"
                    style={{ width: "120px", marginBottom: "2rem", display: "block", marginLeft: "auto", marginRight: "auto" }}
                />
                <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>Sign up to open an account</h2>
                {step === 1 && (
                    <form onSubmit={handleMobileSubmit}>
                        <label style={{ display: "block", marginBottom: "0.5rem" }}>
                            Enter your mobile number
                        </label>
                        <input
                            type="tel"
                            value={mobile}
                            onChange={e => setMobile(e.target.value)}
                            placeholder="Mobile number"
                            maxLength={10}
                            style={{
                                width: "100%",
                                padding: "0.75rem",
                                marginBottom: "1rem",
                                borderRadius: "4px",
                                border: "1px solid #ccc"
                            }}
                            required
                        />
                        <button
                            type="submit"
                            style={{
                                width: "100%",
                                padding: "0.75rem",
                                background: "#387ed1",
                                color: "#fff",
                                border: "none",
                                borderRadius: "4px",
                                fontWeight: "bold",
                                cursor: "pointer"
                            }}
                        >
                            Continue
                        </button>
                    </form>
                )}
                {step === 2 && (
                    <form onSubmit={handleEmailSubmit}>
                        <label style={{ display: "block", marginBottom: "0.5rem" }}>
                            Enter your email address
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Email address"
                            style={{
                                width: "100%",
                                padding: "0.75rem",
                                marginBottom: "1rem",
                                borderRadius: "4px",
                                border: "1px solid #ccc"
                            }}
                            required
                        />
                        <button
                            type="submit"
                            style={{
                                width: "100%",
                                padding: "0.75rem",
                                background: "#387ed1",
                                color: "#fff",
                                border: "none",
                                borderRadius: "4px",
                                fontWeight: "bold",
                                cursor: "pointer"
                            }}
                        >
                            Continue
                        </button>
                    </form>
                )}
                {step === 3 && (
                    <div style={{ textAlign: "center" }}>
                        <h3>Thank you!</h3>
                        <p>We have received your details.<br />Check your email for the next steps.</p>
                    </div>
                )}
                <div style={{ marginTop: "2rem", textAlign: "center", fontSize: "0.9rem", color: "#888" }}>
                    Already have an account? <a href="#" style={{ color: "#387ed1" }}>Sign in</a>
                </div>
            </div>
        </div>
    );
};

export default SignUp;