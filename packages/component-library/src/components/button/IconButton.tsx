import { Button, ButtonProps } from '@/components/button/_button';

interface IconButtonProps extends Omit<ButtonProps, 'variant' | 'size'> {
  children: React.ReactNode;
}

export function IconButton(props: IconButtonProps) {
  const { children, ...rest } = props;
  return (
    <Button variant="outline" size="icon" {...rest}>
      {children}
    </Button>
  );
}
