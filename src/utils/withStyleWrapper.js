import injectStyle from './injectStyle';

export default function withStyleWrapper(
  S,
  stylePropName,
  options = {
    firstChild: null,
  }
) {
  return function Wrapper({ children, shouldRenderFirstChild }) {
    return (
      <div className={injectStyle(S, stylePropName)}>
        <>
          {shouldRenderFirstChild && options.firstChild}
          {children}
        </>
      </div>
    );
  };
}
