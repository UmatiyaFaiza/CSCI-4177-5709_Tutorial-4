import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./profileListingPage.css"

function ProfileDetailPage() {

    const location = useLocation()
    const id = location.state;


    const [user, setUser] = useState([]);

    useEffect(() => {
        const getUserDetailWithFetch = async () => {

            const response = await fetch(`https://express-t4.onrender.com/api/users/${id}`);
            const jsonData = await response.json();
            setUser(jsonData);
        };

        getUserDetailWithFetch();
    }, []);

    // fetch user detail from api using await fetch
    //https://www.pluralsight.com/guides/access-data-from-an-external-api-into-a-react-component

    return (

        <div>
            <div>
                <h1>Profile Listing Page</h1>
            </div>
            <div className="container">
                <ul className="card-grid-1">
                    <li>
                        <article className="card">
                            <div className="card-image">
                                <img src={user.picture} alt="user-profile"></img>
                            </div>
                            <div className="card-content">
                                <h2 className="card-name"> {user.name}</h2>
                                <ol className="card-list">
                                    <li>
                                        Age: <span>{user.age}</span>
                                    </li>
                                    <li>
                                        Phone: <span>{user.phone}</span>
                                    </li>
                                    <li>
                                        Company: <span>{user.company}</span>
                                    </li>
                                    <li>
                                        About: <span>{user.about}</span>
                                    </li>
                                </ol>
                            </div>

                        </article>
                    </li>
                </ul>
            </div>
        </div >

    );
}

export default ProfileDetailPage;
