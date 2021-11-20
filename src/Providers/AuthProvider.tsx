import React, { useState, createContext } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage"
// import axios from 'axios'

export const AuthContext = React.createContext<{
    user: null,
	cab: null,
    login: (token: string) => void,
	logout: () => void,
	activate: (serial: string) => void,
}>({
    user: null,
	cab: null,
    login: () => {},
	logout: () => {},
	activate: () => {},
})

export const AuthProvider = ({children} : any) => {
    const [user, setUser] = useState<any>(null)
    const [cab, setCab] = useState<any>(null)

	// check cab validation

    return <AuthContext.Provider value={{
		user,
		cab,
        login: (token) => {
			// api call
			AsyncStorage.setItem("user", token)
			setUser(token)
		},
		logout: () => {
			AsyncStorage.removeItem("user")
			setUser(null)
		},
		activate: (serial) => {
			setCab(serial)
			AsyncStorage.setItem("serial", serial)
		},
    }}>{children}</AuthContext.Provider>
}