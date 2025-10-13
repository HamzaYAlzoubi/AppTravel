import { authOptions } from "@/lib/auth/auth-options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function RootPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    // Default to client login page for unauthenticated users
    redirect("/login");
  } else {
    // Redirect based on user role
    if (session.user.role === 'admin') {
                redirect("/dashboard");    } else if (session.user.role === 'client') {
      redirect("/home");
    } else {
      // Fallback for any other case
      redirect("/login");
    }
  }

  // This part is effectively unreachable but good practice to keep a return
  return null;
}
