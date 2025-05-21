export default function Animal(props) {
  return (
    <div>
      <p className="order">{props.order}</p>
      <h2>{props.name}</h2>
      <p>{props.text}</p>
    </div>
  );
}
