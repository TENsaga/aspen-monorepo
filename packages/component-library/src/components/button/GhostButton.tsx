import { _Button, ButtonProps } from '@/components/button/_button';

interface GhostButtonProps extends Omit<ButtonProps, 'variant'> {
  children: React.ReactNode;
}

export function GhostButton(props: GhostButtonProps) {
  const { children, ...rest } = props;
  return (
    <_Button variant="ghost" {...rest}>
      {children}
    </_Button>
  );
}
