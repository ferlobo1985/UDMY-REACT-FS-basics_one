
const Header = () => {
    const getTheYear = () => {
        const newDate = new Date();
        return newDate.getFullYear()
    }
    
    return (
        <>
            <div>
                The date is {getTheYear()}
            </div>
        </>
    )
}

export default Header;