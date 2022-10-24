import Nav from '../elements/Nav';
import '../../assets/css/Layout.modules.css';

export default function Layout({children}){
    return (
        <>
        <Nav/>
        <main className="main">
            <div className="container">
                {children}
            </div>
        </main>
        </>
    );
}