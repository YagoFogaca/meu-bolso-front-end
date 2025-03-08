import { Spinner } from "react-bootstrap";
import { BtnStyledLogin } from "../../components-style/btn-primary/index.btn-primary.styled";

export const SpinnerComponents = ({ text }) => {
  return (
    <>
      <BtnStyledLogin>
        <Spinner
          as="span"
          animation="border"
          role="status"
          size="sm"
          aria-hidden="true"
        />
      </BtnStyledLogin>
    </>
  );
};
