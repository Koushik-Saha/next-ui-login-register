import React, {useEffect} from "react";
import Head from 'next/head'
import WavyloginStyle from '../styles/wavyloginstyle.module.scss'

const WavyloginRoute = () => {

    useEffect(() => {
        document.body.style = 'background-color: rgba(244, 91, 105, 1);'
    }, []);

    return (
        <div>
            <Head>
                <title>Learn about CO2</title>
            </Head>
            <form className={WavyloginStyle.login}>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <button>Login</button>
            </form>
        </div>
    );
};

export default WavyloginRoute;
