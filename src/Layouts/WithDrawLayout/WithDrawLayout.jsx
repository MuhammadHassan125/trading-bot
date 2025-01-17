import Header from "../../Components/Header/Header";
import {
  LayoutWrapper,
  TradingBottomContent,
  TradingHeaderWrapper,
} from "../TradingLayout/TradingLayout.styles";
import { Outlet } from "react-router-dom";

const WithDrawLayout = () => {
  return (
    <LayoutWrapper>
      {/* header  */}
      <TradingHeaderWrapper>
        <Header />
      </TradingHeaderWrapper>

      <TradingBottomContent>
        <Outlet />
      </TradingBottomContent>
    </LayoutWrapper>
  );
};

export default WithDrawLayout;
