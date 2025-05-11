'use client'

import Image from 'next/image'
import styles from './DroneCards.module.scss'
import Link from 'next/link'

const drones = [
	{
		id: 1,
		name: 'SkyMaster Pro',
		image: '/drone-1.jpg',
		price: 250,
		oldPrice: 299,
		isHit: true,
	},
	{
		id: 2,
		name: 'AeroVision X',
		image: '/drone-1.jpg',
		price: 69990,
		oldPrice: null,
		isHit: false,
	},
	{
		id: 3,
		name: 'Falcon Zoom',
		image: '/drone-1.jpg',
		price: 79990,
		oldPrice: 100000,
		isHit: true,
	},
	{
		id: 4,
		name: 'Falcon Zoom',
		image: '/drone-1.jpg',
		price: 79990,
		oldPrice: 89990,
		isHit: true,
	},
	{
		id: 5,
		name: 'Falcon Zoom',
		image: '/drone-1.jpg',
		price: 79990,
		oldPrice: 89990,
		isHit: true,
	},
	{
		id: 6,
		name: 'Falcon Zoom',
		image: '/drone-1.jpg',
		price: 79990,
		oldPrice: 89990,
		isHit: true,
	},
]

export default function DroneCards() {
	// Функция для вычисления процента скидки
	const calculateDiscount = (oldPrice, newPrice) => {
		if (!oldPrice) return null
		return Math.round(((oldPrice - newPrice) / oldPrice) * 100)
	}

	return (
		<section className={styles.wrapper}>
			<h2 className={styles.title}>ჩვენი დრონები</h2>
			<div className={styles.grid}>
				{drones.map(drone => {
					const discount = calculateDiscount(drone.oldPrice, drone.price)
					return (
						<div key={drone.id} className={styles.card}>
							{discount && <span className={styles.badge}>-{discount}%</span>}
							<Link href={`/drones/${drone.id}`} className={styles.link}>
								<Image
									src={drone.image}
									alt={drone.name}
									width={400}
									height={250}
									className={styles.image}
								/>
								<h3 className={styles.name}>{drone.name}</h3>
								<div className={styles.prices}>
									<span className={styles.price}>
										₾ {drone.price.toLocaleString('en-US')}
									</span>
									{drone.oldPrice && (
										<span className={styles.oldPrice}>
											₾ {drone.oldPrice.toLocaleString('en-US')}
										</span>
									)}
								</div>
							</Link>
							<div className={styles.buttons}>
								<Link href={`/drones/${drone.id}`} className={styles.buyButton}>
									დეტალები
								</Link>
							</div>
						</div>
					)
				})}
			</div>
		</section>
	)
}
