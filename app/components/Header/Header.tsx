'use client'
// import styles from './Header.module.scss'
// import Link from 'next/link'

// export default function Header() {
// 	return (
// 		<header className={styles.header}>
// 			<div className={styles.container}>
// 				<div className={styles.logo}>
// 					<Link href='/'>DroneX</Link>
// 				</div>

// 				<nav className={styles.nav}>
// 					<Link href='/'>მთავარი</Link>
// 					<Link href='/catalog'>კატალოგი</Link>
// 					<Link href='/sales'>აქციები</Link>
// 					<Link href='/about'>ჩვენს შესახებ</Link>
// 				</nav>

// 				<div className={styles.search}>
// 					<input
// 						type='text'
// 						placeholder='ძებნა'
// 						className={styles.searchInput}
// 					/>
// 					<button className={styles.searchButton}>🔍</button>
// 				</div>

// 				<div className={styles.icons}>
// 					<Link href='/profile' className={styles.icon}>
// 						👤
// 					</Link>
// 					<Link href='/cart' className={styles.icon}>
// 						🛒
// 						<span className={styles.cartCount}>3</span>
// 					</Link>
// 				</div>
// 			</div>
// 		</header>
// 	)
// }


import { useState } from 'react'
import styles from './Header.module.scss'
import Link from 'next/link'

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.leftSide}>
					<div className={styles.logo}>
						<Link href='/'>
							Drone<span>X</span>
						</Link>
					</div>

					<div className={styles.burger} onClick={toggleMenu}>
						<span className={styles.burgerLine}></span>
						<span className={styles.burgerLine}></span>
						<span className={styles.burgerLine}></span>
					</div>
				</div>

				{/* Навигация */}
				<nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
					<Link href='/'>მთავარი</Link>
					<Link href='/catalog'>კატალოგი</Link>
					<Link href='/sales'>აქციები</Link>
					<Link href='/about'>ჩვენს შესახებ</Link>
				</nav>

				{/* Поиск */}
				{/* <div className={styles.search}>
					<input
						type='text'
						placeholder='ძებნა'
						className={styles.searchInput}
					/>
					<button className={styles.searchButton}>🔍</button>
				</div> */}

				{/* Иконки */}
				{/* <div className={styles.icons}>
					<Link href='/profile'>👤</Link>
					<Link href='/cart'>
						🛒<span className={styles.badge}>3</span>
					</Link>
				</div> */}
			</div>
		</header>
	)
}
