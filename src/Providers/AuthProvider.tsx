import React, { useState, createContext } from 'react'
// import axios from 'axios'

export const AuthContext = createContext({
	user: null,
	cab: null,
    login: (token: string) => {},
	logout: () => {},
	activate: (serial: string) => {},
})

export const AuthProvider = ({children} : any) => {
    const [user, setUser] = useState<any>(null)
    const [cab, setCab] = useState(null)

	// check cab validation

    return <AuthContext.Provider value={{
		user,
		cab,
        login: (token) => {
			// api call
			localStorage.setItem("user", token)
			setUser(token)
		},
		logout: () => {
			localStorage.removeItem("user")
			setUser(null)
		},
		activate: (serial) => {
			localStorage.setItem("serial", serial)
			setCab(serial)
		},
    }}>{children}</AuthContext.Provider>
}