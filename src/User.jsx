const User = ({user}) => {
    return (
        <div className="card">
            <h4>Name: {user.name}</h4>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default User;