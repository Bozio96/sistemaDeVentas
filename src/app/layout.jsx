import "./globals.css";
import {Kanit} from 'next/font/google'
import NavBar from '@/components/NavBar'

const kanit = Kanit({
  weight: ['400', '500', '700'],
})

export const metadata = {
  title: "Sistema De Ventas",
  description: "Aplicación generada con Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={kanit.className}
      >
        <header>
          <NavBar></NavBar>
        </header>
        {children}
      </body>
    </html>
  );
}
