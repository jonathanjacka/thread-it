'use client';

import { useFormStatus } from "react-dom";
import { Button } from "@nextui-org/react";

interface FormButtonProps {
  children: React.ReactNode;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
}

const FormButton = ({ children, color }: FormButtonProps) => {

  const { pending } = useFormStatus();
  return (
    <Button type="submit" isLoading={pending} color={color}>
      {children}
    </Button>
  )
}

export default FormButton
