const User = ({user}) => {
    return (
        <div className="card">
            <h3>ID: {user.id}</h3>
            <h4>Name: {user.name}</h4>
            <p className="card">Email: {user.email}</p>
        </div>
    );
};

export default User;