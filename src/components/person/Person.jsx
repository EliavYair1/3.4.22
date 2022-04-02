import './Person.css';
const Person = ({ ...props }) => {
  return (
    <>
      <tr>{props.name}</tr>
      <tr>{props.city}</tr>
      <tr>{props.gender}</tr>
    </>
  );
};

export default Person;
