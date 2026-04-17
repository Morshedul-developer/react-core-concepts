import { use } from "react";

const Users = ({data}) => {
    const users = use(data);
    return (
        <div className="card">
            <h3>Users: {users.length}</h3>
        </div>
    );
};

export default Users;