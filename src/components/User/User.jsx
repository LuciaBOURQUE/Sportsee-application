import "../../scss/index.scss"
import PropTypes from "prop-types"
//`http://localhost:5000/user/:id`

export default function User({ nameValue }) {
  return (
    <div className="user__name">
      <h1>Bonjour {nameValue}</h1>
      <p>Félicitations! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

User.propTypes = {
  nameValue: PropTypes.string,
}

/*

  const [userData, setUserData] = useState({})
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    !isMounted &&
      api.getUsers().then((json) => {
        setUserData(json);
        setIsMounted(true);
      });
  }, [isMounted]);

  
      {userData && userData.map((user, index) => {
          return (
            <li key={index}>
              {user.Nom} {user.Prenom}
            </li>
          );
        })}
*/
