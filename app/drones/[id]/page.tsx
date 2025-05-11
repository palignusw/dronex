'use client'


import { use, useState } from 'react'
import styles from './DroneDetail.module.scss'
import React from 'react'
import axios from 'axios'


const drones = [
	{
		id: 1,
		name: 'SkyMaster Pro',
		images: ['/drone-1.jpg', '/drone-2.jpg', '/drone-3.jpg'],
		price: 250,
		oldPrice: 299,
		description:
			'პროფესიონალური დრონი 4K კამერით, სტაბილიზაციით და 10 კმ-მდე დიაპაზონით. შესანიშნავი არჩევანი ავიაფოტოგრაფიისთვის.',
		characteristics: [
			{ label: 'ფრენის დიაპაზონი', value: '10 კმ-მდე' },
			{ label: 'გარეული დრო', value: '45 წუთამდე' },
			{ label: 'კამერა', value: '4K UHD, 3-აქსიანი სტაბილიზაცია' },
			{ label: 'სწრაფი სიჩქარე', value: '72 კმ/სთ-მდე' },
			{ label: 'ვიდეო გადაცემა', value: '1080p რეალურ დროში' },
			{ label: 'აკრეფა', value: 'დიახ' },
			{ label: 'GPS/GLONASS', value: 'ინტეგრირებული მოდულები' },
			{ label: 'სტაბილიზაცია', value: 'მექანიკური + ციფრული' },
			{
				label: 'რეჟიმები',
				value: 'მომდევნო, ავტომატური დაბრუნება, ინტერესის წერტილი',
			},
			{ label: 'კონტროლი', value: 'პულტი + აპლიკაცია' },
		],
	},
	{
		id: 2,
		name: 'SkyMaster Lite',
		images: ['/drone-1.jpg', '/drone-1.jpg', '/drone-1.jpg'],
		price: 69990,
		oldPrice: 89990,
		description:
			'კომფორტული პროფესიონალური დრონი. შესანიშნავია დაწყებული მომხმარებლებისთვის.',
		characteristics: [
			{ label: 'ფრენის დიაპაზონი', value: '5 კმ-მდე' },
			{ label: 'გარეული დრო', value: '30 წუთამდე' },
			{ label: 'კამერა', value: '2.7K HD, 2-აქსიანი სტაბილიზაცია' },
			{ label: 'სწრაფი სიჩქარე', value: '50 კმ/სთ-მდე' },
			{ label: 'ვიდეო გადაცემა', value: '720p რეალურ დროში' },
			{ label: 'აკრეფა', value: 'დიახ' },
			{ label: 'GPS', value: 'ინტეგრირებული მოდული' },
			{ label: 'სტაბილიზაცია', value: 'ციფრული' },
			{ label: 'რეჟიმები', value: 'მომდევნო, ავტომატური დაბრუნება' },
			{ label: 'კონტროლი', value: 'პულტი' },
		],
	},
]

export default function DroneDetail({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const resolvedParams = use(params)
	const drone = drones.find(d => d.id === parseInt(resolvedParams.id, 10))

	const [selectedImage, setSelectedImage] = useState(
		drone ? drone.images[0] : ''
	)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		address: '',
	})
	const [notification, setNotification] = useState<null | {
		type: 'success' | 'error'
		message: string
	}>(null)


	if (!drone) return <div>დრონი არ მოიძებნა</div>

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()

		const botToken = '7711764843:AAFak3CUQ2YPnIG-VAEcKWMCbv03Nz2sO2A'
		const chatId = '6755901326'

		const message = `
🔹 *ახალი შეკვეთა დრონზე*
📦 *ტვირთი:* ${drone.name}
💰 *ფასი:* ${drone.price.toLocaleString()} GEL

👤 *სახელი:* ${formData.name}
📞 *ტელეფონი:* ${formData.phone}
📍 *მისამართი:* ${formData.address}
`

	try {
		await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
			chat_id: chatId,
			text: message,
			parse_mode: 'Markdown',
		})
		setNotification({
			type: 'success',
			message: '✅ შეკვეთა წარმატებით გაიგზავნა!',
		})
		setIsModalOpen(false)
		setFormData({ name: '', phone: '', address: '' })
		setTimeout(() => setNotification(null), 3000)
	} catch (error) {
		console.error('შეცდომა Telegram-ში გაგზავნისას:', error)
		setNotification({
			type: 'error',
			message: '❌ შეკვეთის გაგზავნა ვერ მოხერხდა. სცადეთ მოგვიანებით.',
		})
		setTimeout(() => setNotification(null), 3000)
	}
	}

	return (
		<div className={styles.wrapper}>
			{notification && (
				<div className={`${styles.notification} ${styles[notification.type]}`}>
					{notification.message}
				</div>
			)}
			<div className={styles.gallery}>
				<img
					src={selectedImage}
					alt={drone.name}
					className={styles.mainImage}
				/>
				<div className={styles.thumbnails}>
					{drone.images.filter(Boolean).map((img, i) => (
						<img
							key={i}
							src={img}
							alt={`thumb-${i}`}
							className={`${styles.thumb} ${
								selectedImage === img ? styles.active : ''
							}`}
							onClick={() => setSelectedImage(img)}
						/>
					))}
				</div>
			</div>

			<div className={styles.info}>
				<h1 className={styles.name}>{drone.name}</h1>
				<p className={styles.price}>{drone.price.toLocaleString()} ₾</p>
				{drone.oldPrice && (
					<p className={styles.oldPrice}>
						ძველი ფასი: {drone.oldPrice.toLocaleString()} ₾
					</p>
				)}
				<p className={styles.description}>{drone.description}</p>
				<button className={styles.button} onClick={() => setIsModalOpen(true)}>
					ყიდვა
				</button>
				<h3 className={styles.sectionTitle}>მახასიათებლები</h3>
				<ul className={styles.specs}>
					{drone.characteristics.map((item, index) => (
						<li key={index}>
							<strong>{item.label}:</strong> {item.value}
						</li>
					))}
				</ul>
			</div>

			{/* მუღამი ფანჯარა */}
			{isModalOpen && (
				<div className={styles.modalOverlay}>
					<div className={styles.modal}>
						<h2>შეკვეთის ფორმა</h2>
						<form onSubmit={handleSubmit} className={styles.form}>
							<input
								type='text'
								name='name'
								placeholder='თქვენი სახელი'
								value={formData.name}
								onChange={handleInputChange}
								minLength={2}
								title='გთხოვთ, შეიყვანეთ მინიმუმ 2 სიმბოლო.'
								required
							/>
							<input
								type='tel'
								name='phone'
								placeholder='ტელეფონი'
								value={formData.phone}
								onChange={handleInputChange}
								pattern='^\+?\d{9,9}$'
								title='გთხოვთ, შეიყვანეთ სწორი ტელეფონის ნომერი (9 ციფრი).'
								required
							/>
							<input
								type='text'
								name='address'
								placeholder='მიტანის მისამართი'
								value={formData.address}
								onChange={handleInputChange}
								minLength={5}
								title='გთხოვთ, შეიყვანეთ მინიმუმ 5 სიმბოლო მისამართისთვის.'
								required
							/>
							გადახდა მოხდება მხოლოდ მიტანის დროს
							<div className={styles.modalButtons}>
								<button type='submit'>გაგზავნა</button>
								<button type='button' onClick={() => setIsModalOpen(false)}>
									დახურვა
								</button>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	)
}
