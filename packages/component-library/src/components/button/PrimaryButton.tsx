import { _Button, ButtonProps } from '@/components/button/_button';

interface PrimaryButtonProps extends Omit<ButtonProps, 'variant'> {
  children: React.ReactNode;
}

export function PrimaryButton(props: PrimaryButtonProps) {
  const { children, ...rest } = props;
  return (
    <_Button variant="primary" {...rest}>
      {children}
    </_Button>
  );
}
