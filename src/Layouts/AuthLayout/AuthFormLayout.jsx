import { Outlet } from "react-router-dom";
import { MainContainer, FormContainer, Overlay } from "./AuthFormLayout.styles";
import { Suspense } from "react";
import Loading from "../../Components/Loading";
const AuthFormLayout = () => {
  return (
    <MainContainer>
      <Overlay />
      <FormContainer>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </FormContainer>
    </MainContainer>
  );
};

export default AuthFormLayout;
