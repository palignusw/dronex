import './globals.css'
import Header from './components/Header/Header'
import { ReactNode } from 'react'
import { Orbitron } from 'next/font/google'

const orbitron = Orbitron({
	weight: ['600'],
	subsets: ['latin'],
	display: 'swap',
})

export const metadata = {
	title: 'DroneX',
	description: 'Лучшие дроны',
}

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang='ru'>
			<body className={orbitron.className}>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	)
}
