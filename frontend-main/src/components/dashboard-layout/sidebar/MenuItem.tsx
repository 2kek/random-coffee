import Link from 'next/link'

import { IMenuItem } from './menu.interface'
import s from './Sidebar.module.scss'

export function MenuItem({ item }: { item: IMenuItem }) {
	return (
		<div className={s.menu_item}>
			<Link href={item.link}>
				<item.icon />
				<span>{item.name}</span>
			</Link>
		</div>
	)
}
