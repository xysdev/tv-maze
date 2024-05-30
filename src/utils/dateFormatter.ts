const dateFormatter = (
  date: string | Date,
  locale: string,
  options: Intl.DateTimeFormatOptions,
): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleString(locale, options);
};

export default dateFormatter;
