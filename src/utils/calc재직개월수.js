export const calc재직개월수 = (startDate, stopDate = new Date()) => {
  const startDateObj = new Date(startDate);
  const stopDateObj = new Date(stopDate);

  const 재직개월수 =
    (stopDateObj.getFullYear() - startDateObj.getFullYear()) * 12 +
    (stopDateObj.getMonth() - startDateObj.getMonth());

  if (재직개월수 >= 12) {
    const years = Math.floor(재직개월수 / 12);
    const month = 재직개월수 % 12;

    if (month === 0) return `${years}년`;

    return `${years}년 ${month}개월`;
  }

  return `${재직개월수}개월`;
};
