import React from "react";

interface ErrorMessageProps {
  message: string;
}

function ErrorMessage({ message }: ErrorMessageProps) {
  return <p className="text-xs text-red-500">{message}</p>;
}

export default ErrorMessage;
