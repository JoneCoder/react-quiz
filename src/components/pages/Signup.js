import Illustration from "../elements/Illustration";
import signupImage from '../../assets/images/signup.svg';
import '../../assets/css/Signup.modules.css';
import Form from '../elements/Form';
import TextInput from "../elements/TextInput";
import Checkbox from "../elements/Checkbox";
import Button from "../elements/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

export default function Signup(){

    const [data, setData] = useState({
        username:'',
        email:'',
        password:'',
        confirm_password:'',
        agree: 0
    });

    const [errors, setErrors] = useState({
        username:'',
        email:'',
        password:'',
        confirm_password:'',
        agree: ''
    });

    const [isValidate, setValidate] = useState(false);
    
    const [notification, setNotification] = useState({message: '',type: ''});

    const [loading, setLoading] = useState();

    const { signup } = useAuth();
    const navigate = useNavigate();

    function fieldHandler(e){
        setValidate(checkValidate(e))
        setData({...data, [e.target.name]: (e.target.type !== 'checkbox'? e.target.value : e.target.checked)});
        
    }

    function checkValidate(e){
        if(!e.target.value || (e.target.type === 'checkbox' && !e.target.checked)){
            setErrors({...errors, [e.target.name]: `${e.target.name} is required`});
            return false;
        }
        else if(e.target.name === 'confirm_password' && e.target.value !== data.password){
            setErrors({...errors, [e.target.name]: 'Confirm password doesn\'t match.'});
            return false;
        }
        else{
            setErrors({...errors, [e.target.name]: ''});
            return true;
        }
    }

    async function submit(e){
        e.preventDefault();
        if(isValidate){
            try {
                setLoading(true);
                await signup(data.email, data.password, data.username);
                navigate("/");
              } catch (err) {
                setLoading(false);
                setNotification({message:"Failed to create an account!", type:"error"});
              }
        }
    }
    
    
    return (
        <>
        <h1>Create an account</h1>
        <div className="column">
            <Illustration image={{src:signupImage, alt:'signup'}}/>
            <Form className="signup" onSubmit={(e) => submit(e)}>
                {notification.message && <p className={notification.type}>{ notification.message }</p>}
                
                <TextInput 
                type="text" 
                placeholder="Enter username" 
                name="username"
                required
                value={data.username} 
                onChange={(e) => fieldHandler(e)} 
                icon="person"
                />
                
                {errors.username && <p className="error">{ errors.username }</p>}

                <TextInput 
                type="email" 
                placeholder="Enter email" 
                icon="alternate_email"
                name="email"
                required
                value={data.email} 
                onChange={(e) => fieldHandler(e)} 
                />
                {errors.email && <p className="error">{ errors.email }</p>}

                <TextInput 
                type="password" 
                placeholder="Enter password" 
                icon="lock"
                required
                name="password" 
                value={data.password} 
                onChange={(e) => fieldHandler(e)} 
                />
                {errors.password && <p className="error">{ errors.password }</p>}

                <TextInput 
                type="password" 
                placeholder="Confirm password" 
                icon="lock_clock"
                required
                name="confirm_password" 
                value={data.confirm_password} 
                onChange={(e) => fieldHandler(e)} 
                />
                {errors.confirm_password && <p className="error">{ errors.confirm_password }</p>}
                
                
                <Checkbox 
                className="" 
                id="agree" 
                text="I agree to the Terms & Conditions"
                name="agree"
                required
                checked={data.agree}
                checked-value="1"
                unchecked-value="0"
                onChange={(e) => fieldHandler(e)} 
                />
                {errors.agree && <p className="error">{ errors.agree }</p>}

                <Button disabled={loading} type="submit">Submit now</Button>


                <div class="info">Already have an account? <Link to="/login">Login</Link> instead.</div>
            </Form>
        </div> 
        </>
    );
}