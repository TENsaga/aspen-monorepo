import { Button, ButtonProps } from "@/components/button/_button";

interface CancelButtonProps extends Omit<ButtonProps, "variant"> {
  children: React.ReactNode;
}

export function CancelButton(props: CancelButtonProps) {
  const { children, size } = props;
  return (
    <Button variant="destructive" size={size}>
      {children}
    </Button>
  );
}
