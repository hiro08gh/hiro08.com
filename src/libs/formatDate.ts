export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("ja-JP").format(date);
};

export const currentYear = () => {
  const now = new Date();
  const year = now.getFullYear();

  return year;
};
