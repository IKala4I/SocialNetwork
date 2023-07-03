import classes from './Header.module.css'
function Header(){
    return(
        <header className={classes.header}>
            <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png?20220125121207'
                alt='Header img'/>
        </header>
    );
}

export default Header;