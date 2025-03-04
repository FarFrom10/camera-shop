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
