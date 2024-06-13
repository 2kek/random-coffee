interface IHeading {
	title: string
}

export function Heading({ title }: IHeading) {
	return (
		<div style={{marginTop: 15, fontWeight: 'bold'}}>
			<h1>{title}</h1>
		</div>
	)
}