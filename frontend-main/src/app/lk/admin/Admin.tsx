'use client'

import { useUsers } from "@/hooks/useUsers"
import { IUser } from "@/types/auth.types"
import { Cross, CrossIcon, Loader, ShieldCloseIcon, UserRoundMinus } from "lucide-react"
import s from './Admin.module.scss'
import { useDeleteUser } from "@/hooks/useDeleteUser"
import { Button } from "@chakra-ui/react"

export function Admin() {
	const { data, isLoading } = useUsers()
	const { deleteUser, isDeletePending } = useDeleteUser()

	return (	
		<div>
		
		{isLoading ? (
			<Loader />
		) : (
			<div className={s.users_list}>
				<h2>Все пользователи</h2>
				{data.map((user: IUser) => (
					<div className={s.users_list__item} key={user.id}>
						<p className={s.users_list__info}>ID: {user.id}</p>
						<p className={s.users_list__info}>Почта: {user.email}</p>
						<p className={s.users_list__info}>Имя: {user.name}</p>
						<Button onClick={() => {
								deleteUser(String(user.id))
							}}>
							<UserRoundMinus />
						</Button>
					</div>
				))}
			</div>
		)}
	</div>
	)
}
