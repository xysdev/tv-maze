const sanitizeString = (input: string): string => input.replace(/<[^>]*>/g, '');

export default sanitizeString;
