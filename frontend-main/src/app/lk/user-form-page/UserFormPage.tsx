import { UserForm1 } from "@/components/user-form/UserForm"
import s from './Home.module.scss'

export function UserFormPage() {
	return (
		<div className={s.user_form}>
			<h2>Заполните анкету, для того, чтобы помочь собеседнику с выбором темы для разговора</h2>
			<UserForm1 />
		</div>
	)
}
