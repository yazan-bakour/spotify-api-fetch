import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faExclamationTriangle, faWindowClose} from '@fortawesome/free-solid-svg-icons';

export const ErrorSnackbar = ({ text }) => {
    return (
        <div className="discover-block__snackbar">
            <FontAwesomeIcon icon={faExclamationTriangle}/>
            <span>{text}</span>
            <FontAwesomeIcon icon={faWindowClose}/>
        </div>
    )
}
