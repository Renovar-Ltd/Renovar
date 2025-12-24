"use client";

import { useState } from "react";

interface CopyableProps {
  text: string;
  children: React.ReactNode;
  className?: string;
  iconSize?: string;
}

export default function Copyable({
  text,
  children,
  className = "",
  iconSize = "h-5 w-5",
}: CopyableProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "fixed";
      textArea.style.opacity = "0";
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (fallbackErr) {
        console.error("Fallback copy failed:", fallbackErr);
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {children}
      <button
        onClick={handleCopy}
        className="relative p-1.5 rounded-lg hover:bg-agri-light-green/20 transition-colors group"
        title={copied ? "Copied!" : "Copy"}
        aria-label={`Copy ${text}`}
      >
        {copied ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${iconSize} text-agri-green`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${iconSize} text-agri-green group-hover:text-agri-light-green transition-colors`}
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 5.00069C7.01165 5.01106 6.49359 5.10379 6.09202 5.27601C5.71569 5.43687 5.43687 5.71569 5.27601 6.09202C5.10379 6.49359 5.01106 7.01165 5 8.00069V16.0007C5.01106 16.9898 5.10379 17.5079 5.27601 17.9094C5.43687 18.2858 5.71569 18.5646 6.09202 18.7254C6.49359 18.8977 7.01165 18.9904 8 19.0007H16C16.9891 18.9904 17.5072 18.8977 17.9088 18.7254C18.2851 18.5646 18.5639 18.2858 18.7248 17.9094C18.897 17.5079 18.9897 16.9898 19.0008 16.0007V8.00069C18.9897 7.01165 18.897 6.49359 18.7248 6.09202C18.5639 5.71569 18.2851 5.43687 17.9088 5.27601C17.5072 5.10379 16.9891 5.01106 16 5.00069H8Z" />
            <path d="M8 1.00069C7.01165 1.01106 6.49359 1.10379 6.09202 1.27601C5.71569 1.43687 5.43687 1.71569 5.27601 2.09202C5.10379 2.49359 5.01106 3.01165 5 4.00069V12.0007C5 12.5311 5.21071 13.0398 5.58579 13.4149C5.96086 13.79 6.46957 14.0007 7 14.0007H15C15.5304 14.0007 16.0391 13.79 16.4142 13.4149C16.7893 13.0398 17 12.5311 17 12.0007V4.00069C17 3.47026 16.7893 2.96155 16.4142 2.58648C16.0391 2.21141 15.5304 2.00069 15 2.00069H7C6.46957 2.00069 5.96086 2.21141 5.58579 2.58648C5.21071 2.96155 5 3.47026 5 4.00069" />
          </svg>
        )}
      </button>
    </div>
  );
}

