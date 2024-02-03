import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
        profile(profile){
            console.log("Profile GitHub: ", profile)
            let userRole = "GitHub User"
            if(profile?.email=="itsyash9211@gmail.com"){
                userRole ="admin"
            }
            return{
                ...profile,
                role: userRole,
            }
        },   
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_Secret,
    }),
    
    // ...add more providers here
  ],
  callbacks: {
    async jwt({token, user}){
        if(user) token.role= user.role
    },
    async session({session, token}){
        if(session?.user) session.user.role = token.role
        return session
    }
  }
}

