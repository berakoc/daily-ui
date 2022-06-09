export default function getCompoundFunction(...fns) {
  return () => fns.reduce((acc, fn) => [...acc, fn()], []);
}
