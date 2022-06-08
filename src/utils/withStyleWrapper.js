import injectStyle from './injectStyle';

export default function withStyleWrapper(S, stylePropName, options={
  firstChild: null,
}) {
  return function Wrapper({ children }) {
    return <div className={injectStyle(S, stylePropName)}><>{options.firstChild}{children}</></div>;
  };
}
