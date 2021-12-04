import React, { useState, createContext } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage"
// import axios from 'axios'

export const AuthContext = React.createContext<{
    user: null,
	cab: null,
	error: string,
    login: (username: string, password: string) => void,
	logout: () => void,
	expire: () => void,
	activate: (serial: string) => void,
}>({
    user: null,
	cab: null,
	error: "",
    login: () => {},
	logout: () => {},
	expire: () => {},
	activate: () => {},
})

export const AuthProvider = ({children} : any) => {
    const [user, setUser] = useState<any>(null)
    const [cab, setCab] = useState<any>(null)
    const [error, setError] = useState<string>("")

	// check cab validation

    return <AuthContext.Provider value={{
		user,
		cab,
		error,
        login: (username, password) => {
			// api call catch error => seterror
			// setError("خطأ في الدخول")
			setUser(username)
			AsyncStorage.setItem("user", username)
		},
		logout: () => {
			AsyncStorage.removeItem("user")
			setUser(null)
		},
		expire: () => {
			AsyncStorage.removeItem("serial")
			setCab(null)
		},
		activate: (serial) => {
			setCab(serial)
			AsyncStorage.setItem("serial", serial)
		},
    }}>{children}</AuthContext.Provider>
}