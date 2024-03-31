import { useState } from "react";

function useClipboard() {
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((error) => {
        console.error("Failed to copy to clipboard:", error);
      });
  };

  return { isCopied, copyToClipboard };
}

export default useClipboard;
