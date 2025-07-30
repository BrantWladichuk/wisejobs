import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const formatSalary = (salary: number) => {
  return salary.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  }) + '/yr'
}

export const formatType = (type: string) => {
  return type.replace(/-/gi," ")
}