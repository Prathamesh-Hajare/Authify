import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
	const [loginInfo, setLoginInfo] = useState({
		email: "",
		password: "",
	});

	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		const { email, password } = loginInfo;

		if (!email || !password) {
			toast.error("Please enter all fields", { position: "top-center" });
			return;
		}

		try {
			const url = "http://localhost:8080/auth/login";
			const res = await fetch(url, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(loginInfo),
			});
			const result = await res.json();
			const { success, message, token } = result;

			if (success) {
				toast.success("Login Successful");
				// Save token to localStorage or state management
				localStorage.setItem("token", token);
				setTimeout(() => {
					navigate("/home"); // Redirect to dashboard or home page after login
				}, 1000);
			} else {
				toast.error(message || "Login Failed", { position: "top-center" });
			}
		} catch (error) {
			console.error(error);
			toast.error("Something went wrong. Please try again later.", {
				position: "top-center",
			});
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setLoginInfo((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<div className="Container">
			<h1>Login</h1>
			<form onSubmit={handleLogin}>
				<div>
					<label htmlFor="email">Email</label>
					<input
						onChange={handleChange}
						type="email"
						name="email"
						placeholder="Enter your email"
						autoFocus
					/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input
						onChange={handleChange}
						type="password"
						name="password"
						placeholder="Enter your password"
					/>
				</div>
				<button type="submit">Login</button>
				<span>
					Don't have an account? <Link to="/signup">Signup</Link>
				</span>
			</form>
			<ToastContainer />
		</div>
	);
};

export default Login;
