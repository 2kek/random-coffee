const Checkbox = (props: {
	id?: string
	extra?: string
}) => {
	const { extra, id, ...rest } = props
	return (
		<input
			id={id}
			type='checkbox'
			{...rest}
		/>
	)
}

export default Checkbox
