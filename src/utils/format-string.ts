export const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase();
};

export const removeUnderscore = (text: string) => {
  return text.replace(/_/g, " ");
};

export const formatText = (text: string) => {
  const cleanedText = removeUnderscore(text);
  return capitalize(cleanedText);
};
