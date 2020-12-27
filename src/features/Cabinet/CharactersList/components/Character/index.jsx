const Character = ({
  name,
  height,
  mass,
  hair_color,
  skin_color,
  eye_color,
  birth_year,
  gender,
  homeworld,
  vehicles,
  films,
}) => {
  return (
    <ul>
      <li>name: {name}</li>
      <li>height: {height}</li>
      <li>mass: {mass}</li>
      <li>hair_color: {hair_color}</li>
      <li>skin_color: {skin_color}</li>
      <li>eye_color: {eye_color}</li>
      <li>birth_year: {birth_year}</li>
      <li>gender: {gender}</li>
      <li>homeworld: {homeworld}</li>
      <li>vehicles: {vehicles}</li>
      <li>films: {films}</li>
    </ul>
  );
};

export default Character;
