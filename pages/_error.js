import { withRouter } from "next/router";
import Error from "components/Error";

const ErrorPage = (props) => {
  return <Error {...props} />;
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default withRouter(ErrorPage);
