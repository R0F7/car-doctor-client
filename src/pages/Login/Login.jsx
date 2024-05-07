import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
// import axios from 'axios'

const Login = () => {
    const { signIn, user } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log( email, password);

        signIn(email, password)
            .then(() => {
                // const loggedInUser = result.user;
                // console.log(loggedInUser);
                navigate(location?.state ? location.state : '/');

                // get access token
                // const user = { email };
                // axios.post('https://car-doctor-server-sandy-ten.vercel.app/jwt', user, { withCredentials: true })
                //     .then(res => {
                //         console.log(res.data);

                //         if (res.data.success) {
                //             navigate(location?.state ? location.state : '/');
                //         }
                //     })

            })
            .catch(error => {
                console.log(error);
            })

    }

    if (user) {
        return navigate('/');
    }

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl font-bold text-center">Login </h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-secondary font-semibold' type="submit" value="Login" />
                        </div>
                        <p className='my-4 text-center'>New to Car Doctor <Link to='/signup' className='text-secondary font-bold'>Sign Up</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;