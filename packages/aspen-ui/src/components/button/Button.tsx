import { Button as MButton, ButtonProps as MButtonProps } from '@mantine/core';

export interface ButtonProps extends MButtonProps {
  onClick?: () => void;
}

export function Button({ children, ...rest }: ButtonProps) {
  return <MButton {...rest}>{children}</MButton>;
}
