import PageTemplate from '../Templates/PageTemplate'

export default function Fortune() {
	return (
		<PageTemplate
			name="Tell My Fortune"
			email="mauriciokwt@gmail.com"
			excludeEmail="mauriciokwt@gmail.com"
			people={[
				{
					name: 'Mauricio',
					email: 'mauriciokwt@gmail.com',
					type: 'Desenvolvedor',
					position: 'Lider de Desenvolvimento',
				},
			]}
		/>
	)
}
