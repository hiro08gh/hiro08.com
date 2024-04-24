import dayjs from "dayjs";

export const formatDate = (date?: string) => {
  if (!date) {
    return "";
  }

  return dayjs(date).format("YYYY/MM/DD");
};

export const currentYear = () => {
  const now = new Date();
  const year = now.getFullYear();

  return year;
};
