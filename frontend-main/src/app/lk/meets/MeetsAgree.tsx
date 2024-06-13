import React from 'react';
import { useUpdateStatus } from '@/hooks/useUpdateStatus';
import { usePartner } from '@/hooks/usePartner';
import { Button, ButtonGroup, SkeletonText } from '@chakra-ui/react';
import s from './Meets.module.scss';

export function MeetsAgree() {
    const { data, isLoading } = usePartner();
    const { updateStatus } = useUpdateStatus(); // Получаем функцию из хука useUpdateStatus

    console.log(data);

    if (isLoading || !data || !data.meet) {
        return (
            <SkeletonText mt='4' noOfLines={5} spacing='4' skeletonHeight='2' />
        );
    }

    const { meet } = data;

    const handleConfirm = async () => {
        try {
            updateStatus(meet.id, 'active');
        } catch (error) {
            console.error('Не удалось обновить статус:', error);
            // Обработка ошибок при обновлении статуса
        }
    };
    const handleDisable = async () => {
        try {
            updateStatus(meet.id, 'disable');
        } catch (error) {
            console.error('Не удалось обновить статус:', error);
            // Обработка ошибок при обновлении статуса
        }
    };
    return (
        <div className={s.meet}>
            <>
                <h2>Собеседник найден!</h2>
                <ButtonGroup>
                    <Button onClick={handleConfirm} colorScheme='yellow'>Подтвердить</Button>
                    <Button onClick={handleDisable}>Отказаться</Button>
                </ButtonGroup>
            </>
        </div>
    );
}
