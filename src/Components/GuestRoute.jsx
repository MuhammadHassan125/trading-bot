import { Suspense, useMemo } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Loading from "./Loading";

const GuestRoute = () => {
  const userVisited = useMemo(() => localStorage.getItem("user-visited"), []);

  if (userVisited) {
    return <Navigate to="/" />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
  );
};

export default GuestRoute;
