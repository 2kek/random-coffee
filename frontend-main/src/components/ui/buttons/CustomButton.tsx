import { Button, ButtonProps } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';
import s from './CustomButton.module.scss'

export function CustomButton({
  children,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  return (
    <Button {...rest} type='submit'>
      {children}
    </Button>
  );
}
