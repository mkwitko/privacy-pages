import axios from 'axios'
import { useState } from 'react'

const SupportPage = ({
	appName,
}: {
	appName: string
}) => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	})

	const [submitted, setSubmitted] = useState(false)
	const [isSubmitting, setIsSubmitting] = useState(false)

	const handleChange = (e: any) => {
		const { name, value } = e.target
		setFormData({ ...formData, [name]: value })
	}

	const handleSubmit = async (e: any) => {
		e.preventDefault()
		setIsSubmitting(true)
		await axios.post('http://localhost:3000/email/send', {
			from: formData.email,
			message: formData.message,
			subject: `Suporte de ${appName} por ${formData.name}`,
		})
		setSubmitted(true)
		setIsSubmitting(false)
	}

	return (
		<div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
			<div className="bg-white shadow-md rounded-lg max-w-lg w-full p-8">
				<h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
					Suporte - Entre em Contato
				</h2>
				{submitted ? (
					<div className="text-center">
						<h3 className="text-2xl font-semibold text-green-600">
							Obrigado por entrar em contato!
						</h3>
						<p className="text-gray-600">
							Retornaremos sua mensagem o mais breve possível.
						</p>
					</div>
				) : (
					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-700"
							>
								Nome
							</label>
							<input
								type="text"
								name="name"
								id="name"
								value={formData.name}
								onChange={handleChange}
								required
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							/>
						</div>

						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-gray-700"
							>
								Email
							</label>
							<input
								type="email"
								name="email"
								id="email"
								value={formData.email}
								onChange={handleChange}
								required
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
							/>
						</div>

						<div>
							<label
								htmlFor="message"
								className="block text-sm font-medium text-gray-700"
							>
								Mensagem
							</label>
							<textarea
								name="message"
								id="message"
								value={formData.message}
								onChange={handleChange}
								required
								className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								rows={4}
							></textarea>
						</div>

						<div>
							<button
								disabled={
									isSubmitting ||
									!formData.email ||
									!formData.message ||
									!formData.name
								}
								type="submit"
								className="w-full disabled:opacity-50 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
							>
								Enviar Mensagem
							</button>
						</div>
					</form>
				)}
			</div>
		</div>
	)
}

export default SupportPage
