import '../Assests/css/Signin.css'
import vid1 from '../Assests/images/hbg.mp4'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function Login()
{
    const navigate = useNavigate();
    const Signin = (e) => {
        let a = document.getElementById("name").value;
        let b = document.getElementById("password").value;
        if (a !== "hari" && b !== "hari123") {
            alert("UserName and Password Invalid");
        } else if (a !== "hari") {
            alert("UserName Invalid!!");
        } else if (b !== "hari123") {
            alert("Password Invalid");
        }
        else if(a==="hari" && b==="hari123")
        {
            alert("Successfully Logged In")
            navigate('/Home')
        }
    };
    return(
        <>

              <section>
        <video autoPlay loop muted playsInline>
            <source src={vid1} type="video/mp4"/>
        </video>
        <div className="form-box">
            <div className="form-value">
                <form onSubmit={Signin}>
                    <h2>Login</h2>
                    <div className="inputbox">
                        <ion-icon name="person-outline"></ion-icon>
                        <input type="text " id="name" required autoComplete="off"/>
                        <label htmlFor="">UserName</label>
                    </div>
                    <div className="inputbox">
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type="password" id="password" required autoComplete="off"/>
                        <label htmlFor="">Password</label>
                    </div>
                    <a href="#">
                        <button>Log in</button>
                      </a>
                    <div className="register">
                        <p>Don't have a account <Link to="/signup">Register</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </section>
    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

    

        </>
    )
}

export default Login;