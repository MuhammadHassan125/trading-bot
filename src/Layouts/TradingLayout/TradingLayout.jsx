import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import TradingBottomTable from "../../Pages/Dashboard/Trading/TradingBottomTable";
import {
  LayoutWrapper,
  TradingBottomContent,
  TradingContentWrapper,
  TradingHeaderWrapper,
  TradingSidebarWrapper,
} from "./TradingLayout.styles";
import Trading from "../../Pages/Dashboard/Trading";

const TradingLayout = () => {
  return (
    <LayoutWrapper>
      {/* header  */}
      <TradingHeaderWrapper>
        <Header />
      </TradingHeaderWrapper>

      <TradingBottomContent>
        {/* sidebar  */}
        <TradingSidebarWrapper>
          <Sidebar />
        </TradingSidebarWrapper>

        {/* content  */}
        <TradingContentWrapper>
          <Trading />
        </TradingContentWrapper>
      </TradingBottomContent>

      <TradingBottomTable />
    </LayoutWrapper>
  );
};

export default TradingLayout;
