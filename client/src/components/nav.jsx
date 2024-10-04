import { useEffect } from "react";
import LoginButton from "./auth/login";
import LogoutButton from "./auth/logout";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';

export default function Navbar() {

    const { user, isAuthenticated, isLoading } = useAuth0();

    if(isAuthenticated) {
        console.log(user.email);
    }

    useEffect(() => {
        
        if(isAuthenticated) {
            axios.post('/api/v1/auth/addUserToDB', {'username' : user.name, 'email' : user.email})
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
        }


    }, [isAuthenticated, user])

    if(isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">HotTakes</a>
                </div>
                <div className="container-fluid justify-content-end">
                    {
                        isAuthenticated ? (
                            <LogoutButton/>
                        ) : (
                            <LoginButton/>
                        )
                    }
                </div>
            </nav>
        </div>
    )


}

