const getAge = (currentDate = new Date(), birthday = 'April 4, 1996') => {
  const birthDate = new Date(birthday);
  const age = (currentDate - birthDate) / 31557600000;
  return age.toFixed(7);
};

export default getAge;