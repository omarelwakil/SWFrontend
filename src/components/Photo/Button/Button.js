import './Button.css';
import {Link} from 'react-router-dom';

const Button = props => {
    
    const toolsIcons = {
        // Tools with icons
        edit: 'far fa-edit',
        share: 'fas fa-share',
        download: 'fa fa-download',
        buy: 'fa fa-shopping-cart',
        full: 'fas fa-expand',
        delete: 'fas fa-trash',
        fav: 'far fa-star',
        comment: 'far fa-comment',
        remove: 'far fa-window-close'
    }

    return (
        <button className="Button">
            <Link to={props.url}>
                <i className={toolsIcons[props.tool]}></i> 
                <span className="text">{props.tool}</span>
            </Link>
        </button>
    );
}

export default Button;