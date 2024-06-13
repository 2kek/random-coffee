'use client'

import Loader from "@/components/ui/Loader"
import { useMeets } from "@/hooks/useMeets"
import { IUser } from "@/types/auth.types"
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from "@chakra-ui/react"
import s from './Admin.module.scss'


export function AllMeets() {
    const { data, isLoading } = useMeets()
    console.log(data)
    return (
        <div>
            <h1>История</h1>
            {isLoading ? (
                <Loader />
            ) : (
                <Accordion defaultIndex={[0]} allowMultiple>
                    {data?.map((meet: any) => (
                        <AccordionItem key={meet.id}>
                        <h2>
                          <AccordionButton>
                            <Box as='span' flex='1' textAlign='left'>
                              {meet.title}
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} className={s.meets_accordeon}>
                        {meet.users.map((user: IUser) => (
                                    <div className={s.meet_user} key={user.id}>
                                        <p>Email: {user.email}</p>
                                        <p>Имя: {user.name}</p>
                                        <p>Город: {user.city}</p>
                                        <p>Возраст: {user.age}</p>
                                        <p>Интересы: {user.hobbies?.join(', ')}</p>
                                    </div>
                                ))}
                        </AccordionPanel>
                      </AccordionItem>
                    ))}
                </Accordion>
            )}
        </div>
    )
}


