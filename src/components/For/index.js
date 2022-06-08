const For = ({ Child, list, styledClassName }) => {
  return (
    <div className={styledClassName || ''}>
      {list.map((item, index) => (
        <Child key={index} index={index} item={item} />
      ))}
    </div>
  );
};

export default For;
