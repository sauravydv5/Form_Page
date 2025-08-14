export const generateAppNumber = () => {
  const year = new Date().getFullYear();
  const randomPart = Math.floor(100000 + Math.random() * 900000);
  return `MSY${year}${randomPart}`;
};
