import { Button, ButtonProps } from "@/components/button/_button";

interface PrimaryButtonProps extends Omit<ButtonProps, "variant"> {
  children: React.ReactNode;
}

export function PrimaryButton(props: PrimaryButtonProps) {
  const { children, size } = props;
  return (
    <Button variant="primary" size={size}>
      {children}
    </Button>
  );
}
