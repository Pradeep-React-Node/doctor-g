import useAuth from 'app/hooks/useAuth';
import { useState, useEffect } from 'react';
// import { flat } from 'app/utils/utils';
import { Navigate, useLocation } from 'react-router-dom';
// import AllPages from '../routes';

// const userHasPermission = (pathname, user, routes) => {
//   if (!user) {
//     return false;
//   }
//   const matched = routes.find((r) => r.path === pathname);

//   const authenticated =
//     matched && matched.auth && matched.auth.length ? matched.auth.includes(user.role) : true;
//   return authenticated;
// };

const AuthGuard = ({ children }) => {
  let {
    isAuthenticated,
    // user
  } = useAuth();
  const { pathname } = useLocation();

  //   const routes = flat(AllPages);

  //   const hasPermission = userHasPermission(pathname, user, routes);
  //   let authenticated = isAuthenticated && hasPermission;

  // // IF YOU NEED ROLE BASED AUTHENTICATION,
  // // UNCOMMENT ABOVE LINES
  // // AND COMMENT OUT BELOW authenticated VARIABLE

  // let authenticated = isAuthenticated;
  //   const [user, setUser] = useState("");

  // useEffect(() => {
  //   const saved = localStorage.getItem("user");
  //   const initialValue = JSON.parse(saved);
  //   if (initialValue) {
  //    setUser(initialValue);
  //   }
  // }, []);

  const [user, setName] = useState(() => {
    const saved = localStorage.getItem("user");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  console.log("login console", user);
  return (
    <>
      {user?.message === "login successes" ? (
        children
      ) : (
        <Navigate replace to="/session/signin" state={{ from: pathname }} />
      )}
    </>
  );
};

export default AuthGuard;
