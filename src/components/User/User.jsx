import { Link } from "react-router-dom";

const User = ({user}) => {

    const {id, name, email, username, phone, website} = user;
    return (
        <div className="border-2 p-3">

            <div>
                <h2 className="font-bold text-xl">{name}</h2>
                <p>{username}</p>
                <p>{email}</p>
                <p>{phone}</p>
                <p>{website}</p>
                <Link to={`/user/${id}`}>
                <button type="button" class="py-2 px-3 border bg-gray-200 rounded-md hover:bg-gray-300 my-2">Show Details</button>
                </Link>
            </div>
        </div>
    );
};

export default User;