import "../../scss/index.scss"
import PropTypes from "prop-types"
<<<<<<< HEAD
//`http://localhost:5000/user/:id`
=======
>>>>>>> 5f3429d8c4ea7d876003407039dad12c7caacf8b

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
<<<<<<< HEAD

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
=======
>>>>>>> 5f3429d8c4ea7d876003407039dad12c7caacf8b
