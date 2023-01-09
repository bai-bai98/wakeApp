import megaphone from '../NavBar/images/megaphone.png'

const Footer = () => {
    return (
        <footer style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginTop: 20, alignItems: 'center', padding: '10px' }}>
            <div>group1@itc.tech</div>
            <div>Hackaton - ITC - January 2022</div>
            <img src={megaphone} alt="logo" width={50} />
        </footer>);
}

export default Footer;