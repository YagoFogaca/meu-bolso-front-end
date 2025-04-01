import Spinner from "react-bootstrap/Spinner";
import { SectionLoadingSpinner } from "./index.loading-spinner";

export const LoadingSpinner = () => {
  return (
    <SectionLoadingSpinner>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </SectionLoadingSpinner>
  );
};
