import React from 'react'
import Navbar from '@/components/shared/Navbar'

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}

export default AuthLayout