import Illustration from "../elements/Illustration";
import Form from "../elements/Form";
import TextInput from "../elements/TextInput";
import Button from "../elements/Button";
import login from '../../assets/images/login.svg';
import { Link } from "react-router-dom";

import '../../assets/css/Login.modules.css';

export default function Login(){
    return (
        <>
        <h1>Login to your account</h1>
        <div className="column">
            <Illustration image={{src:login, alt:'Login'}}/>
            <Form className="login">
                <TextInput type="email" placeholder="Enter email" icon="alternate_email"/>


                <TextInput type="password" placeholder="Enter password" icon="lock"/>
                

                <Button>Submit now</Button>


                <div class="info">Don't have an account? <Link to="/signup">Signup</Link> instead.</div>
            </Form>
        </div> 
        </>
    );
}