import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
    const users = useLoaderData()
    return (
        <div>
            <h2 className="text-center text-3xl font-bold pt-5 pb-10">Users: {users.length}</h2>
            <div className="grid grid-cols-3 w-4/5 mx-auto gap-5">
           {
            users.map(user => <User key={user.id} user={user}></User>)
           }
        </div>
        </div>
    );
};

export default Users;