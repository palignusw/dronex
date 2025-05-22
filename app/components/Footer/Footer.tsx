import styles from './Footer.module.scss'
import Link from 'next/link'

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.column}>
					<h2>DroneX</h2>
					<p>ხარისხი, ტექნოლოგიები და სიჩქარე თითოეულ ფრენაში.</p>
				</div>

				<div className={styles.column}>
					<h3>ნავიგაცია</h3>
					<ul>
						<li>
							<Link href='/'>მთავარი</Link>
						</li>
						<li>
							<Link href='/catalog'>კატალოგი</Link>
						</li>
						<li>
							<Link href='/offers'>აქციები</Link>
						</li>
						<li>
							<Link href='/contact'>კონტაქტი</Link>
						</li>
					</ul>
				</div>

				<div className={styles.column}>
					<h3>კონტაქტი</h3>
					<ul>
						<li>+995 599 12 34 56</li>
						<li>info@dronex.ge</li>
						<li>თბილისი, საქართველო</li>
					</ul>
				</div>

				<div className={styles.column}>
					<h3>სოციალური ქსელები</h3>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							height: '80px',
						}}
					>
						<a
							href='https://tiktok.com'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='TikTok'
					
						>
							<img
								src='tiktok1.png'
								alt='TikTok'
								style={{
									width: 40,
									height: 40,
									objectFit: 'contain',
									display: 'block',
								}}
							/>
						</a>
					</div>
				</div>
			</div>
			<div className={styles.bottom}>
				<p>© 2025 DroneX. ყველა უფლება დაცულია.</p>
			</div>
		</footer>
	)
}
