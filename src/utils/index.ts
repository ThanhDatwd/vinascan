import { onToast } from "@/hooks/useToast";
import { DateTime } from "luxon";

export const handleCopy = (value: string) => {
  navigator.clipboard
    .writeText(value)
    .then(() => onToast("Copied to clipboard", "info"));
};
export const generateRandomString = (length: number) => {
  return Array.from({ length }, () =>
    String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  ).join("");
};

export const getDateYesterdayToNow = () => {
  const today = DateTime.now();
  const yesterday = today.minus({ days: 1 });

  const formattedToday = today.toFormat("dd LLL");
  const formattedYesterday = yesterday.toFormat("dd LLL");
  return `${formattedYesterday} - ${formattedToday}`;
};
