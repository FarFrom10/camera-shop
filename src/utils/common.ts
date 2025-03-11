import { PHONE_NUMBER_START } from '../const';

export function convertPrice(price: number): string{
  return Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
  }).format(price);
}

export function getFilteredPathnames(pathnames: string[], id?: string | undefined): string[] {
  const itemsToDelete: number[] = [];

  return pathnames.length > 1
    ? pathnames.map((path, i) => {
      if (id && path === id) {
        itemsToDelete.push(i - 1);
        return `/${pathnames[i - 1]}/${path}`;
      }
      return `/${path}`;
    }).filter((_, i) => !itemsToDelete.includes(i))
    : pathnames;
}

export const getOnlyNumbersFromString = (value: string): string => value.replace(/[^\d]/g, '');

export function formatPhoneNumber(value: string): string {
  const phoneNumber = value.slice(PHONE_NUMBER_START.length).replace(/[^\d]/g, '');
  const phoneNumberLength = phoneNumber.length;

  if (phoneNumberLength < 4) {
    return `${PHONE_NUMBER_START}${phoneNumber}`;
  }
  if (phoneNumberLength < 7) {
    return `${PHONE_NUMBER_START}(${phoneNumber.slice(0,3)})${phoneNumber.slice(3)}`;
  }
  if (phoneNumberLength < 9) {
    return `${PHONE_NUMBER_START}(${phoneNumber.slice(0,3)})${phoneNumber.slice(3,6)}-${phoneNumber.slice(6)}`;
  }

  return `${PHONE_NUMBER_START}(${phoneNumber.slice(0,3)})${phoneNumber.slice(3,6)}-${phoneNumber.slice(6,8)}-${phoneNumber.slice(8, 10)}`;
}
