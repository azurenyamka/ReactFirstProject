export const UserCard = (props) => {
    return (
      <div className="card card-1">
          <h3>Name :{props.name}</h3>
          <p>Age :{props.age}</p>
          <img src={props.imageURL}></img>
      </div>
    );
  };

//   export default UserCard;