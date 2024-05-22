import React, { useState } from 'react';
import { Card, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

const PREFIX = 'RaMyLogin';
const classes = {
    card: `${PREFIX}-card`,
    toggleButton: `${PREFIX}-toggleButton`
};

const Root = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    [`& .${classes.card}`]: {
        minWidth: 300,
        marginTop: '6em',
        padding: theme.spacing(2)
    },
    [`& .${classes.toggleButton}`]: {
        marginTop: theme.spacing(1)
    },
}));

interface MyLoginPageProps {
    backgroundImage?: string;
}

export const LoginPage: React.FC<MyLoginPageProps> = ({ backgroundImage }) => {
    const [isSignUp, setIsSignUp] = useState(false);

    const toggleForm = () => setIsSignUp(!isSignUp);

    return (
        <Root style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Card className={classes.card}>
                {isSignUp ? <SignUpForm /> : <LoginForm />}
                <Button
                    className={classes.toggleButton}
                    variant="contained"
                    color="primary"
                    onClick={toggleForm}
                >
                    {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
                </Button>
            </Card>
        </Root>
    );
};

export default LoginPage;
