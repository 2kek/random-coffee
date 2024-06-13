import cn from 'clsx'
import { type InputHTMLAttributes, forwardRef } from 'react'

type TypeTransparentField = InputHTMLAttributes<HTMLInputElement>

export const TransparentField = forwardRef<
	HTMLInputElement,
	TypeTransparentField
>(({ className, ...rest }, ref) => {
	return (
		<input
			ref={ref}
			{...rest}
		/>
	)
})

TransparentField.displayName = 'TransparentField'
