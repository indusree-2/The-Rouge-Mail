import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes safely.
 * (Requires: npm install clsx tailwind-merge)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Rouge Mail Time-Gate Logic
 * Checks if the current local time is between 10 PM and 4 AM.
 */
export const isNocturnalTime = (): boolean => {
  const hour = new Date().getHours();
  // 22 = 10 PM, 4 = 4 AM
  return hour >= 22 || hour < 4;
};

/**
 * Calculates time remaining until the next "Moonrise" (10 PM).
 */
export const getTimeUntilMoonrise = (): string => {
  const now = new Date();
  const moonrise = new Date();

  moonrise.setHours(22, 0, 0, 0);

  // If it's already past 10 PM but before midnight, moonrise is today (already happened)
  // If it's after midnight but before 4 AM, moonrise is today (already happened)
  if (now.getHours() >= 22 || now.getHours() < 4) {
    return "The moon is high.";
  }

  const diffMs = moonrise.getTime() - now.getTime();
  const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMins = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));

  return `${diffHrs}h ${diffMins}m until moonrise`;
};

/**
 * Formats dates into a more "vintage/poetic" style.
 * Example: Jan 28, 11:15 PM
 */
export const formatPoeticDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
};
