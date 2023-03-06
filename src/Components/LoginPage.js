import React, { useState } from "react";
import "./loginPage.css"

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch("https://express-t4.onrender.com/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: email, password }),
        });

        if (!response.ok) {
            setError("Invalid credentials");
        } else {
            //to redirect to the profile listing page
            //https://allaboutcode.medium.com/how-do-you-redirect-to-another-page-in-javascript-6c7524c1f88a
            window.location.href = "/profileListingPage";
        }
    };

    return (
        <div id="body">
            <h1>Login Page</h1>
            <div id="main-holder">
                <form id="main" onSubmit={handleSubmit}>

                    <div>
                        <input
                            className="login-form-field"
                            type="email"
                            id="email"
                            value={email}
                            placeholder="Email"
                            onChange={(event) => setEmail(event.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            className="login-form-field"
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            required
                        />
                    </div>
                    <div id="login-error-msg-holder">
                        {error && <p id="login-error-msg">{error}</p>}
                    </div>
                    <button id="login-form-submit" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
