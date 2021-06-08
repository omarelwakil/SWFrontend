import './Button.css';
/**
 * Component that renders an icon
 * @component 
 * @type Component
 * 
 * @param {Key} key React special key prop 
 * @param {string} tool a keyword for font awesome icon classes (internal object)  
 * @returns <Button 
 *                  key={element} 
 *                  tool={element}/>
 */
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
        remove: 'far fa-window-close',
        create: 'fas fa-plus'
    }

    return (
        <button className="Button">
                <i className={toolsIcons[props.tool]}></i> 
                <span className="text">{props.tool}</span>
        </button>
    );
}

export default Button;