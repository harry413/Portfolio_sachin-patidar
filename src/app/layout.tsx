
import "./globals.css";




export const metadata = {
  title: "Sachin Patidar – Full-Stack Dev",
  description: "Interactive 3-D portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={``}>
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap');
        </style>
      </head>
      <body>{children}</body>
    </html>
  );
}