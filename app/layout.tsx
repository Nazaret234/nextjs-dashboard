import { monserrat } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${monserrat.className} atialiased`}>
        {children}
        <footer className=" flex items-center justify-center py-10 ">
          Hecho con amor por la gente de varcel
        </footer>
      </body>
    </html>
  );
}
