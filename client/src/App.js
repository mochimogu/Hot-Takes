import { Outlet } from "react-router-dom";
import Navbar from "./components/nav";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

function App() {

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
        <Navbar/>
        <div className="container-md">
          <Outlet/>
        </div>
    </div>
  );
}

export default App;
