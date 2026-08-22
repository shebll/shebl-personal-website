import { siteData } from "@/src/data/site";

/**
 * Calculate age from an ISO date string (YYYY-MM-DD).
 * Used to keep the displayed age in sync with the birthday in site data.
 */
export function calculateAge(birthday: string): number {
  const birthDate = new Date(birthday);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}

/**
 * Replace a {age} placeholder in a string with the calculated age.
 */
export function formatAboutParagraph(paragraph: string): string {
  return paragraph.replace(
    "{age}",
    String(calculateAge(siteData.personal.birthday)),
  );
}
