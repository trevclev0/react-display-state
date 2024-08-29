import styles from './App.module.css';
import User from './User';
import SolarSystem from './SolarSystem';

function App() {
  const users = [
    { name: "Trevor", age: 37, email: "trevor@tsheets.com", job: { salary: 90000, company: "Amazon", position: "Sr Software Engineer" } },
    { name: "Julie", age: 35, email: "julie@tsheets.com", job: { salary: 87000, company: "Google", position: "Project Manager" } },
    { name: "Bob", age: 47, email: "bob@tsheets.com", job: { salary: 80000, company: "Intel", position: "Hardware Engineer" } },
  ];

  const planets = [
    { name: "Mercury", isGasPlanet: false },
    { name: "Venus", isGasPlanet: true },
    { name: "Earth", isGasPlanet: false },
    { name: "Mars", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Saturn", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
    { name: "Neptune", isGasPlanet: true },
  ]

  return (
    <div className={styles.App}>
      {users.map((user, key) => <User key={key} name={user.name} age={user.age} email={user.email} job={user.job} />)}
      <SolarSystem planets={planets} />
    </div>
  );
}

export default App;
