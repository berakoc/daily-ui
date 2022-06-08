/**
 * Combines multiple style classes into one string
 * @param {object} styles
 * @param  {...String} classNames
 * @returns {String}
 */
export default function injectStyle(styles, ...classNames) {
  let result = '';
  if (process.env.REACT_TEST)
      classNames = classNames
          .filter((className) => ~className.indexOf(':'))
          .concat(':test');
  if (!classNames[0]) return '';
  for (const className of classNames) {
      const isGlobal = ~className.indexOf(':');
      result += (isGlobal
          ? className.substring(1)
          : styles[className]
      ).concat(' ');
  }
  return result.trim();
};