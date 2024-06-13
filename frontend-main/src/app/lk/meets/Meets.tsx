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
import { MeetsAgree } from './MeetsAgree'
import { MeetsFullActive } from './MeetsFullActive'


export function Meets() {
    const { data, isLoading } = usePartner();
    console.log(data);

    if (!data || !data.meet) {
        return (
            <SkeletonText  mt='4' noOfLines={5} spacing='4' skeletonHeight='2' />
        );
    }

    const { meet } = data;

    return (
        <div>
            {meet.status === 'fullactive' ? <MeetsFullActive /> : <MeetsAgree /> }
            {meet.status === 'active' ? 'Один из участников уже согласился на встречу' : '' }

        </div>
    );
}
