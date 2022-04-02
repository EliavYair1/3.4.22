import Person from '../person/Person';
import './personList.css';
const person = {
  person1: {
    name: 'eliav yair',
    city: 'hod hasharon',
    gender: 'male',
  },
  person2: {
    name: 'sofi milka',
    city: 'nesher',
    gender: 'female',
  },
  person3: {
    name: 'ben gantz',
    city: 'rosh hayain',
    gender: 'male',
  },
};
const PersonList = () => {
  return (
    <>
      <table>
        <thead>
          <th>Name</th>
          <th>City</th>
          <th>Gender</th>
        </thead>
        <tbody>
          <Person
            name={person.person1.name}
            city={person.person1.city}
            gender={person.person1.gender}
          />
          <Person
            name={person.person2.name}
            city={person.person2.city}
            gender={person.person2.gender}
          />
          <Person
            name={person.person3.name}
            city={person.person3.city}
            gender={person.person3.gender}
          />
        </tbody>
      </table>
    </>
  );
};

export default PersonList;
