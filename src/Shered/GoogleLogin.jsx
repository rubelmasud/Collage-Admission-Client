import { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../Providers/AuthProvaider';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';


const GoogleLogin = () => {
    const { signInGoogle, signInGithub } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"

    const handleGoogleLogin = () => {
        signInGoogle()
            .then((result) => {
                const GoogleUser = result.user;
                console.log(GoogleUser);
                const savedUser = { name: GoogleUser.displayName, image: GoogleUser.photoURL, email: GoogleUser.email }
                fetch('', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(savedUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true })
                        toast.success('User login Is Successfully !');
                    })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const handleGithubLogin = () => {
        signInGithub()
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                console.log(error);
            });
    }


    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center flex justify-center">
                <a onClick={handleGoogleLogin} className="btn btn-circle bg-gray-200 flex justify-center mx-auto">
                    <FcGoogle size={30} />
                </a>
                <a onClick={handleGithubLogin} className="btn btn-circle bg-gray-200 flex justify-center mx-auto">
                    <BsGithub size={30} />
                </a>
            </div>
        </div>
    );
};

export default GoogleLogin;