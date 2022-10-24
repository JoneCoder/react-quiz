export default function Checkbox({className, id, text, ...rest}){
    return (
      <label className={className} htmlFor={id}> <input type="checkbox" {...rest} id={id} /> <span> {text}</span> </label>
    );
}