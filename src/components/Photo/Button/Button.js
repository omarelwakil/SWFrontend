import './Button.css';

const Button = props => {
    
    const toolsIcons = {
        // Tools with icons
        edit: 'far fa-edit',
        share: 'fas fa-share',
        download: 'fa fa-download',
        buy: 'fa fa-shopping-cart',
        full: 'fas fa-expand',
        delete: 'fas fa-trash'
    }

    return (
        <button className="Button">
            <i className={toolsIcons[props.tool]}></i> 
            <span className="text">{props.tool}</span>
        </button>
    );
}

export default Button;