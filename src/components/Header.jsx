import style from './Header.module.css';

import logo from '../imagens/Ignite-simbol.svg';

export function Header(){
    return (
        <header className={style.header}>
            <img src={logo} alt="logo" />
            <h1>Ignite Feed</h1>
        </header>
    );
}