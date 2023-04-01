export const simulateElapsedTime: (
  decrementMiliseconds: number
) => number = (decrementMiliseconds) => {
  const convertMilisecToMinutes = 1 / 60000;
  const time = new Date().getMinutes();

  const result = Math.abs(
    Math.floor(time - decrementMiliseconds * convertMilisecToMinutes)
  );
  return result;
};

export const toUpperCaseFirstLetterText = (text: string) => {
  return text
    .split(" ")
    .map((str) => {
      return str.charAt(0).toUpperCase() + str.slice(1);
    })
    .join(" ");
};
