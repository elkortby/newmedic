import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import AppTabs from '../Router/AppTabs'
import CabTabs from '../Router/CabTabs'
import AuthTabs from '../Router/AuthTabs'

export default function Provider() {
	const {user, cab} = useContext(AuthContext)

	if (cab) {
		user ? <AppTabs /> : <AuthTabs />
	} else return <CabTabs />
}
