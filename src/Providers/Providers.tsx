import React from 'react'
import { Platform, StatusBar } from 'react-native';
import { AuthProvider } from './AuthProvider';
import Provider from './Provider';

interface ProvidersProps {

}

export const Providers: React.FC<ProvidersProps> = ({}) => {
    return (
        <AuthProvider>
            <StatusBar 
                barStyle={Platform.OS === "ios" ? "dark-content" : "dark-content"} 
                backgroundColor="#ffffff"
            />
            <Provider />
        </AuthProvider>
    );
}