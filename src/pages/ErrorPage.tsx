import ErrorImage from "../assets/Error.jpg";

import "../styles/pages/ErrorPage.scss";

const ErrorPage = () => {
  return (
    <div className="Error-content-wrapper">
      <h1>Error in the page :(</h1>
      <p>
        Sorry, we cannot found that page, or something like that, we don't know
      </p>
      <img src={ErrorImage} className="Image-size" />
    </div>
  );
};

export default ErrorPage;
