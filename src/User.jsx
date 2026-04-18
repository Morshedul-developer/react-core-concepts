const User = ({user}) => {
    return (
        <div className="card">
            <h3>Id: {user.id}</h3>
            <h4>Name: {user.name}</h4>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default User;