import '../../assets/css/Button.modules.css';

export default function Button({className, children, ...rest}){
    return (
        <button className={`${className} button`} {...rest}>
        {children}
        </button>
    );
}