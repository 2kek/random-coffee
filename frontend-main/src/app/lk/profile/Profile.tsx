'use client'

import { useProfile } from '@/hooks/useProfile'
import s from './Profile.module.scss'
import Link from 'next/link'
import { Pencil } from 'lucide-react'
import Loader from '@/components/ui/Loader'
import { SkeletonText } from '@chakra-ui/react'
export function Profile() {
    const { data, isLoading } = useProfile()
	console.log(data?.user.hobbies)
	return (
	<div className={s.user_profile}>
		<div className={s.user_image}>
			<img src="/user-img.jpg" alt="" />
		</div>
		<div className={s.user_info}>	
			{isLoading ? <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' /> : (
				<>
					<p className={`${s.user_info__item} ${s.user_info__name}`}>{data?.user.name}</p>
					<p className={`${s.user_info__item}`}>id: {data?.user.id}</p>
					<p className={s.user_info__item}>Почта: {data?.user.email}</p>
					<p className={s.user_info__item}>Возраст: {data?.user.age}</p>
					<p className={s.user_info__item}>Город: {data?.user.city}</p>
					<p className={s.user_info__item}>Пол: {data?.user.gender}</p>
					<p className={`${s.user_info__item} ${s.user_info__hobbies}`}>Интересы: {data?.user.hobbies?.join(', ')}</p>
					<Link href='/lk/user-form-page' className={s.edit_button}>
						<Pencil /> Редактировать
					</Link>
				</>
			)}
		</div>	
	</div>
	)
}
