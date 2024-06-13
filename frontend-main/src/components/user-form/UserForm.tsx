'use client'

import { Box, Checkbox, Input, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import s from './UserForm.module.scss'
import { CustomButton } from "../ui/buttons/CustomButton";
import { useMutation } from "@tanstack/react-query";
import { userService } from "@/services/user.service";
import { toast } from "sonner";
import { errorCatch } from "@/api/error";
import { IUserForm } from "@/types/form.types";
import { useRouter } from 'next/navigation'

export function UserForm1() {
    const { register, handleSubmit, reset } = useForm<IUserForm>({
		mode: 'onChange'
	})
    const [isForm, setIsForm] = useState(false)
    const [userData, setUserData] = useState(null);

    const [value, setValue] = useState('1')
    const { push } = useRouter()
    
    const { mutate } = useMutation({
        mutationKey: ['form'],
        mutationFn: (data: IUserForm) =>
          userService.update(data),
        onSuccess() {
          toast.success('Анкета успешно отправлена')
          reset(),
          push('/lk/profile')
        },
        onError(error: any) {
            const errorMessage = errorCatch(error);
        
            if (errorMessage) {
                toast.error(errorMessage); 
            } else {
                console.log(error);
            }
        }
      })

      const onSubmit: SubmitHandler<IUserForm> = data => {
		mutate(data)
	}
      
	return (
        <form onSubmit={handleSubmit(onSubmit)} className={s.form_1}>

            <div className={s.first_form}>
                <Input {...register('name')} placeholder='Имя' size='md' />
                <Input {...register('city')} placeholder='Город' size='md' />
                <Input {...register('dateOfBirth')} placeholder='' size='md' type='date' />
                
                <RadioGroup onChange={setValue} value={value}>
                    <Stack direction='row'>
                        <Radio {...register('gender')} value='male'>М</Radio>
                        <Radio {...register('gender')} value='female'>Ж</Radio>
                    </Stack>
                </RadioGroup>
            </div>
            
            <Stack spacing={10} direction="column">
    
            <div className={s.user_interestring_row}>
            <h2>Творчество</h2>
                <div className={s.user_interestring_row_wrapper}>
                    <Checkbox className={s.checkbox} iconColor="white" colorScheme="yellow" {...register('hobbies')}  value='Фотографии'>
                        Фотографии <span className={s.emoji}>&#128248;</span>
                    </Checkbox>
                    <Checkbox className={s.checkbox} colorScheme="yellow" {...register('hobbies')}  value='Рукоделие'>
                        Рукоделие <span className={s.emoji}>&#129525;</span>
                    </Checkbox>
                    <Checkbox className={s.checkbox} colorScheme="yellow" {...register('hobbies')}  value='Танцы'>
                        Танцы <span className={s.emoji}>&#128131;</span>
                    </Checkbox>
                    <Checkbox className={s.checkbox} colorScheme="yellow" {...register('hobbies')}  value='Пение'>
                        Пение <span className={s.emoji}>&#127908;</span>
                    </Checkbox>
                    <Checkbox className={s.checkbox} colorScheme="yellow" {...register('hobbies')}  value='Музыка'>
                        Музыка <span className={s.emoji}>&#127911;</span>
                    </Checkbox>
                    <Checkbox className={s.checkbox} colorScheme="yellow" {...register('hobbies')}  value='Рисование'>
                        Рисование <span className={s.emoji}>&#128397;</span>
                    </Checkbox>
                </div>
            </div> 


            
            <div className={s.user_interestring_row}>
            <h2>Образ жизни</h2>
               <div className={s.user_interestring_row_wrapper}>
                    <Checkbox className={s.checkbox} colorScheme="yellow"  {...register('hobbies')}  value='Бег'>
                        Бег<span className={s.emoji}>&#127939;</span>
                    </Checkbox>
                    <Checkbox className={s.checkbox} colorScheme="yellow" {...register('hobbies')}  value='Фитнес'>
                        Фитнес<span className={s.emoji}>&#129496;</span>
                    </Checkbox>
                    <Checkbox className={s.checkbox} colorScheme="yellow" {...register('hobbies')}  value='Велосипед'>
                        Велосипед<span className={s.emoji}>&#128692;</span>
                    </Checkbox>
                    <Checkbox className={s.checkbox} colorScheme="yellow" {...register('hobbies')}  value='Плавание'>
                        Плавание<span className={s.emoji}>&#127946;</span>
                    </Checkbox>
                    <Checkbox className={s.checkbox} colorScheme="yellow" {...register('hobbies')}  value='Единоборства'>
                        Единоборства <span className={s.emoji}>	&#129340;</span>
                    </Checkbox>
                    <Checkbox className={s.checkbox}  colorScheme="yellow" {...register('hobbies')}  value='Сон'>
                        Сон<span className={s.emoji}>&#128716;</span>
                    </Checkbox>
               </div>
            </div>

            
            <div className={s.user_interestring_row}>
            <h2>Еда и напитки</h2>
                <div className={s.user_interestring_row_wrapper}>
                <Checkbox className={s.checkbox}  colorScheme="yellow" {...register('hobbies')}  value='Пицца'> 
                    Пицца<span className={s.emoji}>&#127829;</span>
                </Checkbox>
                <Checkbox className={s.checkbox} colorScheme="yellow" {...register('hobbies')}  value='Суши'>
                    Суши<span className={s.emoji}>&#127833;</span>
                </Checkbox>
                <Checkbox className={s.checkbox} colorScheme="yellow" {...register('hobbies')}  value='Бургеры'>
                    Бургеры<span className={s.emoji}>&#127828;</span>
                </Checkbox>
                <Checkbox className={s.checkbox} colorScheme="yellow" {...register('hobbies')}  value='Домашняя еда'>
                    Домашняя еда<span className={s.emoji}>&#127858;</span>
                </Checkbox>
                <Checkbox className={s.checkbox} colorScheme="yellow" {...register('hobbies')}  value='Кофе'>
                    Кофе<span className={s.emoji}>&#9749;</span>
                </Checkbox>
                <Checkbox className={s.checkbox} colorScheme="yellow" {...register('hobbies')}  value='Чай'>
                    Чай<span className={s.emoji}>&#127861;</span>
                </Checkbox>
                </div>
            </div>

           
            <div className={s.user_interestring_row}>
            <h2>Фильмы и сериалы</h2>
                <div className={s.user_interestring_row_wrapper}>
                <Checkbox className={s.checkbox} colorScheme="yellow" {...register('hobbies')}  value='Комедии'>
                    Комедии<span className={s.emoji}>&#128541;</span>
                </Checkbox>
                <Checkbox className={s.checkbox} colorScheme="yellow" {...register('hobbies')}  value='Ужасы'>
                    Ужасы<span className={s.emoji}>&#128123;</span>
                </Checkbox>
                <Checkbox className={s.checkbox} colorScheme="yellow" {...register('hobbies')}  value='Мелодрамы'>
                    Мелодрамы<span className={s.emoji}>&#128557;</span>
                </Checkbox>
                <Checkbox className={s.checkbox} colorScheme="yellow" {...register('hobbies')}  value='Боевики'>
                    Боевики<span className={s.emoji}>&#128526;</span>
                </Checkbox>
                <Checkbox className={s.checkbox} colorScheme="yellow" {...register('hobbies')}  value='Фэнтази'>
                    Фэнтази<span className={s.emoji}>&#128125;</span>
                </Checkbox>
                <Checkbox className={s.checkbox} colorScheme="yellow" {...register('hobbies')}  value='Мультфильмы'>
                    Мультфильмы<span className={s.emoji}>&#128513;</span>
                </Checkbox>
                </div>
            </div>
            <CustomButton type="submit" onClick={() => setIsForm(true)}>Сохранить</CustomButton>
            </Stack>
        </form>
	)
}