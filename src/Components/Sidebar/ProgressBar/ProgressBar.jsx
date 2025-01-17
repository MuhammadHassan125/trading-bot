import {
  ProgressContainer,
  ProgressBarRed,
  ProgressBarGreen,
  ProgressValues,
  ProgressLeftRed,
  ProgressLeftGreen,
  ProgressCenter,
  ProgressRight,
  CenterHeading,
  LeftChild,
  RightChild,
} from '../ProgressBar/ProgressBar.styles'; 


const progressData = [
    { value: 45, left: "0.00012345", center: "12345", right: "0.00456" },
    { value: 40, left: "0.00067891", center: "67891", right: "0.00987" },
    { value: 30, left: "0.00023456", center: "23456", right: "0.00321" },
    { value: 26, left: "0.00078912", center: "78912", right: "0.00876" },
    { value: 23, left: "0.00034567", center: "34567", right: "0.00123" },
    { value: 10, left: "0.00089123", center: "89123", right: "0.00765" },
    { value: 9, left: "0.00045678", center: "45678", right: "0.00234" },
    { value: 8, left: "0.00091234", center: "91234", right: "0.00654" },
    { value: 7, left: "0.00056789", center: "56789", right: "0.00198" },
    { value: 6, left: "0.00012378", center: "12378", right: "0.00432" },
    { value: 5, left: "0.00067890", center: "67890", right: "0.00910" },
    { value: 4, left: "0.00023412", center: "23412", right: "0.00345" },
    { value: 3, left: "0.00078901", center: "78901", right: "0.00890" },
    { value: 1, left: "0.00034512", center: "34512", right: "0.00156" }
];

const ProgressBar = () => {
  return (
    <div style={{minWidth: "100%"}}>
      {progressData.map((progress, index) => (
        <ProgressContainer key={index}>
          <ProgressBarRed style={{ width: `${progress.value}%` }} />
          <ProgressValues>
            <ProgressLeftRed>{progress.left}</ProgressLeftRed>
            <ProgressCenter>{progress.center}</ProgressCenter>
            <ProgressRight>{progress.right}</ProgressRight>
          </ProgressValues>
        </ProgressContainer>
      ))}
      <CenterHeading>
        <LeftChild>
          <img src="/images/top-arrow.png" style={{ margin: "3px" }} />
          <h2>9677.69</h2>
        </LeftChild>
        <RightChild>
          <p>+271638.45 CNY</p>
        </RightChild>
      </CenterHeading>
      {progressData.map((progress, index) => (
        <ProgressContainer key={index}>
          <ProgressBarGreen style={{ width: `${progress.value}%` }} />
          <ProgressValues>
            <ProgressLeftGreen>{progress.left}</ProgressLeftGreen>
            <ProgressCenter>{progress.center}</ProgressCenter>
            <ProgressRight>{progress.right}</ProgressRight>
          </ProgressValues>
        </ProgressContainer>
      ))}
    </div>
  );
};

export default ProgressBar;
