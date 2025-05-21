import Animal from "./Animal";
import data from "../data";

export default function Main() {
  const animalElements = data.map((animal) => {
    return <Animal key={animal.id} {...animal} />;
  });
  return <main>{animalElements}</main>;
}
