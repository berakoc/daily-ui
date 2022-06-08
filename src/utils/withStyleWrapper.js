import injectStyle from './injectStyle';

export default function withStyleWrapper(S, stylePropName) {
  return function Wrapper({ children }) {
    return <div className={injectStyle(S, stylePropName)}>{children}</div>;
  };
}
