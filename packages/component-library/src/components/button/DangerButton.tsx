import { _Button, ButtonProps } from '@/components/button/_button';

interface DangerButtonProps extends Omit<ButtonProps, 'variant'> {
  children: React.ReactNode;
}

export function DangerButton(props: DangerButtonProps) {
  const { children, ...rest } = props;
  return (
    <_Button variant="destructive" {...rest}>
      {children}
    </_Button>
  );
}
