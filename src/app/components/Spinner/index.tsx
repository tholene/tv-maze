import {Spinner as ActualSpinner, SpinnerContainer} from "./etc/style";

const Spinner = ({ centered = false }: { centered?: boolean }) => (
  <SpinnerContainer data-testid="loading" centered={centered}>
    <ActualSpinner />
  </SpinnerContainer>
);

export default Spinner;
