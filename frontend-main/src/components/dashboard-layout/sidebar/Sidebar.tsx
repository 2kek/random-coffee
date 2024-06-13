import Link from 'next/link'
import Cookies from 'js-cookie'
import s from './Sidebar.module.scss'
import { MenuItem } from './MenuItem'
import { MENU } from './menu.data'
import { EnumRoles, getRolesStorage } from '@/services/auth-token.service'

export function Sidebar() {
	const myCookieValue = Cookies.get('userRoles');
	console.log(myCookieValue)
	return (
		<aside className={s.sidebar}>
			<div className={s.sidebar_wrapper}>
				<Link href='/lk/about' className={s.sidebar_logo}>
					<img src="/oggetto-dark-theme-logo.png" alt="" />
				</Link>
				<p>
					{Cookies.get('userRoles')}
				</p>
				<div className={s.sidebar_menu}>
					
					{MENU.map(item => (
						<MenuItem
							item={item}
							key={item.link}
						/>
					))}
					{Cookies.get(EnumRoles.USER_ROLES) == 'ADMIN' && (
						<div>
							<Link href='/lk/admin/users'>
								Все пользователи
							</Link>
							<Link href='/lk/admin/meets'>
								Архив встреч
							</Link>
						</div>
					)}

					
				</div>
			</div>
			<footer className={s.sidebar_footer}>
				With love from
				<a href='https://webstudio.xeonexus.su/contacts' target='_blank' rel='noreferrer'> <strong>xeonexus&#8482;</strong></a>
			</footer>
		</aside>
	)
}
