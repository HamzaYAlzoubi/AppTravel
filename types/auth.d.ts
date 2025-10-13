import 'next-auth';
import 'next-auth/jwt';

// Define the user role
type UserRole = 'admin' | 'client';

declare module 'next-auth' {
  /**
   * Extends the built-in session.user object to include the user's role.
   */
  interface Session {
    user: {
      role: UserRole;
    } & DefaultSession['user'];
  }

  /**
   * Extends the built-in user object.
   */
  interface User {
    role: UserRole;
  }
}

declare module 'next-auth/jwt' {
  /**
   * Extends the built-in JWT to include the user's role.
   */
  interface JWT {
    role: UserRole;
  }
}
