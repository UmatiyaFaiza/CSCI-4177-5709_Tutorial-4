import React, { useState, useEffect } from "react";
import "./profileListingPage.css"
import { useNavigate } from "react-router-dom";

function ProfileListingPage() {
    const navigate = useNavigate();

    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const navigateToProfileDetailPage = (id) => {
        console.log(id);
        navigate("/profileDetailpage", { state: id });

    }
    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    // fetch user from api using await fetch
    //https://www.pluralsight.com/guides/access-data-from-an-external-api-into-a-react-component

    useEffect(() => {
        const getUsersWithFetch = async () => {
            const response = await fetch("https://express-t4.onrender.com/api/users");
            const jsonData = await response.json();
            setUsers(jsonData);
        };

        getUsersWithFetch();
    }, []);

    //filter user based on searching first name or last name
    //https://www.makeuseof.com/react-search-bar-filters-data-create/
    const filteredUsers = users.filter((user) => {
        const fullName = `${user.name}`;
        return fullName.toLowerCase().includes(searchTerm.toLowerCase());
    });

    //render api data using map method
    //https://www.pluralsight.com/guides/how-to-use-the-map()-function-to-export-javascript-in-react
    return (
        <div>
            <h1>Profile Listing Page</h1>
            <div className="search-wrapper">
                <input
                    className="search-term"
                    type="text"
                    placeholder="Search by first name or last name"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                />
            </div>
            <div className="container">
                <ul className="card-grid">
                    {filteredUsers.map((userData) => (
                        <li>
                            <article className="card">
                                <div className="card-image">
                                    <img src={userData.picture} alt="user-profile"></img>
                                </div>
                                <div className="card-content">
                                    <h2 className="card-name"> {userData.name}</h2>
                                    <ol className="card-list">
                                        <li>
                                            Gender: <span>{userData.gender}</span>
                                        </li>
                                        <li>
                                            Email: <span>{userData.email}</span>
                                        </li>
                                        <li>
                                            Company: <span>{userData.company}</span>
                                        </li>
                                    </ol>
                                    <button onClick={() => { navigateToProfileDetailPage(userData._id) }}>Know more</button>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    );

}
export default ProfileListingPage;