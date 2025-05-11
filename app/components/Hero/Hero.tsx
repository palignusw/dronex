import styles from './Hero.module.scss'

export default function Hero() {
	return (
		<section className={styles.hero}>
			<video
				className={styles.videoBackground}
				src='/hero1.mp4'
				autoPlay
				muted
				loop
				playsInline
			/>
			<div className={styles.overlay} />
			<div className={styles.content}>
				<h1 className={styles.title}>მომავალი ფრენაშია</h1>
				<p className={styles.subtitle}>
					ინოვაციური დრონები გადაღებისთვის, გართობისა და მუშაობისთვის
				</p>
				<button className={styles.button}>მოდელების ნახვა</button>
			</div>
		</section>
	)
}
