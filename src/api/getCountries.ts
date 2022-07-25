export const getAllCountries = async () => {
  const response = await fetch("https://restcountries.com/v3.1/all");
  return await response.json();
};

export const getCountriesByName = async (str = "ukraine") => {
  const response = await fetch(`https://restcountries.com/v3.1/name/${str}`);
  return await response.json();
};
