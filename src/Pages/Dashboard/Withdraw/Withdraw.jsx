import { Container } from "../index.styles";
import {
  HeaderWrapper,
  LayoutWrapper,
} from "../../../Layouts/MainLayout/MainLayout.styles";
import Header from "../../../Components/Header/Header";
import { LeftInfo, RightInfo } from "./index.styles";
import RightContent from "./RightContent";
import LeftContent from "./LeftContent";


const Withdraw = () => {
  return (
    <LayoutWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>

      <Container>
        <LeftInfo>
            <LeftContent/>
        </LeftInfo>

        <RightInfo>
          <RightContent />
        </RightInfo>
      </Container>
    </LayoutWrapper>
  );
};

export default Withdraw;
