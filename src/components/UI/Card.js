import './Card.css';

function Card(props) {
  const classes = 'card ' + props.className;
  // Children prop is a reserved keyword, the value of the children prop will
  // always be the content between the opening and closing tag of the Card
  // custom component element
  return <div className={classes}>{props.children}</div>;
}

export default Card;
