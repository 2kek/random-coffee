import type { PropsWithChildren } from 'react'

import { Header } from './header/Header'
import { Sidebar } from './sidebar/Sidebar'
import s from './Dashboard.module.scss'

export default function DashboardLayout({
	children
}: PropsWithChildren<unknown>) {
	return (
		<div className={s.dashboard}>
			<Sidebar />
			<main>
				<Header />
				<div className={s.dashboard_children}>
					{children}
				</div>
			</main>
		</div>
	)
}
