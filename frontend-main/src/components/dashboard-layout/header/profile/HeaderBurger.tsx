import { MenuIcon } from 'lucide-react';
import Link from 'next/link';
import s from './HeaderBurger.module.scss'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { LogoutButton } from '../../sidebar/LogoutButton';

const HeaderBurger = () => (
    <div>
        <Menu>
            <MenuButton><MenuIcon /></MenuButton>
            <MenuList marginTop="10px" color="#444">
                <MenuItem as='a' href='/lk/profile'>
                    Профиль
                </MenuItem>
                <MenuItem as='a' href='/lk/meets'>
                    Встречи
                </MenuItem>
                <MenuItem>
                    <LogoutButton />
                </MenuItem>
            </MenuList>
        </Menu>
    </div>
);

export default HeaderBurger;