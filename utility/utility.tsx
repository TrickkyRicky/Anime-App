export const getSeason = () => {
  const month = new Date().getMonth();
  if (month === 0 || month === 1 || month === 2) {
    return { current: "winter", other: ["spring", "summer", "fall"] };
  } else if (month === 3 || month === 4 || month === 5) {
    return { current: "spring", other: ["summer", "fall", "winter"] };
  } else if (month === 6 || month === 7 || month === 8) {
    return { current: "summer", other: ["fall", "winter", "spring"] };
  } else if (month === 9 || month === 10 || month === 11) {
    return { current: "fall", other: ["winter", "spring", "summer"] };
  } else {
    return { current: "summer", other: ["fall", "winter", "spring"] };
  }
};
