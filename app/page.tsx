import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-gradient-to-r from-neutral-600 to-neutral-950">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl font-semibold text-white drop-shadow-md">
          🌌 Authentication
        </h1>
        <p className="text-white text-lg">
          A Next.js starter boilerplate with authentication service
        </p>
        <div>
          <LoginButton asChild>
            <Button variant="outline" size="lg">Login</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  )
}
