import { ReactNode } from "react";

function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
          {children}
        </div>
      </body>
    </html>
  );
}

export default AuthLayout;
