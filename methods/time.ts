import findLength from "./length";

const readTime = (phrase: string) => {
  const time = 0.5;
  const avgChar = 5.1;
  const lengthFinder = findLength(phrase);

  const findReadTime = (lengthFinder / avgChar) * time;

  return Math.round(findReadTime);
};

export default readTime;
