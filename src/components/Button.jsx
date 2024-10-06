function Button(props) {
    return (
      <button onClick={(e) => {
        e.stopPropagation();
        props.onClick();
      }}>{props.children}</button>
    )
}

export default Button;