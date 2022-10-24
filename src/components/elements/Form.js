import '../../assets/css/Form.modules.css';

export default function Form({className, children, ...rest}){
    return (
        <form className={`${className} form`} {...rest} action="#">
            {children}
        </form>  
    );
}