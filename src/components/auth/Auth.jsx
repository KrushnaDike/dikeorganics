import { useState } from 'react';
import SignIn from './Signin';
import SignUp from './Signup';

function Auth() {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleAuthPage = () => {
        setIsSignIn((prev) => !prev);
    };

    return (
        <div>
            {isSignIn ? (
                <SignIn onTogglePage={toggleAuthPage} />
            ) : (
                <SignUp onTogglePage={toggleAuthPage} />
            )}
        </div>
    );
}

export default Auth;
