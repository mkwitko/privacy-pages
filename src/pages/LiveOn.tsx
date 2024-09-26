import PageTemplate from './PageTemplate'

export default function LiveOn() {
	return (
		<PageTemplate
			name="Live On"
			email="mauriciokwt@gmail.com"
			excludeEmail="mauriciokwt@gmail.com"
			people={[
				{
					name: 'Mauricio',
					email: 'mauriciokwt@gmail.com',
					type: 'Desenvolvedor',
					position: 'Lider de Desenvolvimento',
				},
				{
					name: 'Eduardo',
					email: 'eduardoadvogacacia@gmail.com',
					type: 'Advogado',
					position: 'Sócio Fundador',
				},
			]}
		/>
	)
}
