import React from 'react'
import SideNav from '../components/SideNav'

export default function Layout({ children }) {
    return (
        <div>
            <SideNav >
                {children}
            </SideNav>
        </div>
    )
}
