/**
 * Combines multiple style classes into one string
 * @param {object} styles
 * @param  {...String} classNames
 * @returns {String}
 */
export default function injectStyle(styles, ...classNames) {
  let result = '';
  let filteredClassNames = classNames.filter(Boolean);
  if (process.env.REACT_TEST)
    filteredClassNames = filteredClassNames
      .filter((className) => ~className.indexOf(':'))
      .concat(':test');
  if (!filteredClassNames[0]) return '';
  for (const className of filteredClassNames) {
    const isGlobal = ~className.indexOf(':');
    result += (isGlobal ? className.substring(1) : styles[className]).concat(
      ' '
    );
  }
  return result.trim();
}
