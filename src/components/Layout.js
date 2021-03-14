// import NavBar from "./organisms/NavBar/index.js"
// import Header from "./organisms/Header/index.js"
// import Footer from "./organisms/Footer/index.js"

const Layout = props => (
    <div className="Layout">
        {/* <NavBar /> */}
        {/* <Header /> */}
        <main>
            {props.children}
        </main>
        {/* <Footer /> */}
    </div>
)

export default Layout