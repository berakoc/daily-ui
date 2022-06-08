const Conditional = ({ condition, firstChildren, secondChildren, children }) =>
  !firstChildren && !secondChildren
    ? condition
      ? children
      : null
    : firstChildren
    ? condition
      ? firstChildren
      : secondChildren
    : secondChildren;

Conditional.defaultProps = {
  firstChildren: null,
  secondChildren: null,
};

export default Conditional;
