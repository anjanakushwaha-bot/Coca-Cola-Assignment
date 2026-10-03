import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";


export const metadata = {
  title: "Assignemnt Homepage",
  description: "Assignemnt test",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
       <main className="flex-grow w-full overflow-hidden">
          {children}
        </main>    
          <Footer/>
        </body>

    </html>
  );
}
