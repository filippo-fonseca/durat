class Durat {
  findLength = (phrase: string): number => {
    const result = phrase.length;

    return result;
  };

  readTime = (phrase: string) => {
    const time = 0.5;
    const avgChar = 5.1;
    const lengthFinder = this.findLength(phrase);

    const findReadTime = (lengthFinder / avgChar) * time;

    return Math.round(findReadTime);
  };

  sec = () => {
    return " seconds";
  };
}

export default Durat;
