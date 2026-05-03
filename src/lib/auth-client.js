import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
   // baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || "http://localhost:3000"
   baseURL: process.env.BETTER_AUTH-URL,
})

// Export the hook for easy access in components
export const { useSession, updateSession } = authClient;