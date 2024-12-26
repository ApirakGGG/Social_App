'use client'
import { SessionProvider } from "next-auth/react"
import React from "react"

// next auth provider
export function Provider({children}: {children: React.ReactNode}) {
    return(
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}