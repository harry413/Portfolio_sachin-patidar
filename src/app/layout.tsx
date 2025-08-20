import { Inter, Orbitron } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });


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
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <head>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap');
        </style>
      </head>
      <body>{children}</body>
    </html>
  );
}