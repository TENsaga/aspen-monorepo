import { Button } from "@/components/button/_button";

type PrimaryButtonProps = {
  children: React.ReactNode;
};

export function PrimaryButton(props: PrimaryButtonProps) {
  const { children } = props;
  return <Button variant="default">{children}</Button>;
}
