import React, {useEffect} from "react";
import Head from 'next/head'
import yxwwwdStyle from '../styles/yxwwwd.module.scss'

const YxwwwdRoute = () => {

    useEffect(() => {
        document.body.style = 'background-color: rgba(244, 91, 105, 1);'
    }, []);

    return (
        <div>
            <Head>
                <title>Learn about CO2</title>
            </Head>
            <form className={yxwwwdStyle.login}>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <button>Login</button>
            </form>
        </div>
    );
};

export default YxwwwdRoute;
