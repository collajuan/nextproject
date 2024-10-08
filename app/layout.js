import Navbar from "../components/Navbar";


export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <h1>Mi página</h1>
                <Navbar />
                {children}
            </body>
        </html>
    )
}
