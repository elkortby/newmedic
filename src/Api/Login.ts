import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const LoginUser = async (email, password) => {
	const { login } = useContext(AuthContext)
	// api call
	const res = await axios.post("http://localhost:3000/api/users/login")
	login(res.data.token)
}