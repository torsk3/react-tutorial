const ColorfullMessage = (props) => {
  const { color, children } = props;

  const contentStyle = {
    // この場合はcolor: colorのcolorを省略できる。
    color,
    fontsize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfullMessage;
