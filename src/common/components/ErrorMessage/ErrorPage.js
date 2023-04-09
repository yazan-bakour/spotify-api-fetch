import { useRouteError } from "react-router-dom";
import image from '../../../assets/images/not-found.png'
import './ErrorMessage.scss'

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page" className="error-message">
      <img src={image} alt='' />
      <h1>Oops!</h1>
      <p>Sorry, this page cannot be found.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}