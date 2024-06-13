'use client'

import { useProfile } from '@/hooks/useProfile'
import s from './Meets.module.scss'
import Link from 'next/link'
import { Pencil } from 'lucide-react'
import { useUsers } from '@/hooks/useUsers'
import { useMeets } from '@/hooks/useMeets'
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, ButtonGroup, Skeleton, SkeletonText } from '@chakra-ui/react'
import { IUser } from '@/types/auth.types'
import { usePartner } from '@/hooks/usePartner'
import Loader from '@/components/ui/Loader'


export function MeetsFullActive() {
    const { data, isLoading } = usePartner();
    console.log(data);

    if (!data || !data.meet) {
        return (
            <SkeletonText  mt='4' noOfLines={5} spacing='4' skeletonHeight='2' />
        );
    }

    const { meet } = data;

    return (
        <div className={s.meet}>
            <div className={s.meet_partner}>
                <h2>Вот ваш собеседник! Не забудьте решить, где и когда вам было бы удобнее встретиться</h2>
                <p>Имя: {meet.users[0].name}</p>
                <p>Возраст: {meet.users[0].age}</p>
                <p>Город: {meet.users[0].city}</p>
                <p>Почта: {meet.users[0].email}</p>
                <p>Интересы: {meet.users[0].hobbies}</p>
                <p>Темы, которых лучше избежать: {meet.users[0].redFlags}</p>
            </div>
        </div>
    );
}
