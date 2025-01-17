import {
  BottomContent,
  ContentWrapper,
  HeaderWrapper,
  LayoutWrapper,
  SidebarWrapper,
} from "./MainLayout.styles";
import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Suspense } from "react";
import Loading from "../../Components/Loading";

const MainLayout = () => {
  return (
    <LayoutWrapper>
      {/* header  */}
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <BottomContent>
        {/* sidebar  */}
        <SidebarWrapper>
          <Sidebar />
        </SidebarWrapper>

        {/* content  */}
        <ContentWrapper>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </ContentWrapper>
      </BottomContent>
    </LayoutWrapper>
  );
};

export default MainLayout;
