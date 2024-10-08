import Link from 'next/link'

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <h1>Mi página</h1>
                <nav>
                    <ul>
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/about'>About</Link>
                        </li>
                        <li>Contact</li>
                    </ul>
                </nav>
                {children}
            </body>
        </html>
    )
}
