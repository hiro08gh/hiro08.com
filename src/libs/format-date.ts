/**
 * 日付を返す関数
 * @param  {time}
 * @return {string} 2020/3/17
 */
export const formatDate = (d) => {
  const date = new Date(d);
  const yyyy = new String(date.getFullYear());
  const mm = new String(date.getMonth() + 1).padStart(2, '0');
  const dd = new String(date.getDate()).padStart(2, '0');
  return `${yyyy}/${mm}/${dd}`;
};
