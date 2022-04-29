
const Header = (props) => {
        return (
            <>
                <header className={props.active ? 'active': 'non-active'}>
                    <div className="logo">Code news</div>
                    <input onChange={props.keyword} />
                    <button onClick={props.changeColor}>Change it</button>
                </header>
            </>
        )
}

export default Header;