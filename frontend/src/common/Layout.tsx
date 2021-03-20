import Navbar from '../components/Navbar';

const Layout: React.FC = ({ children }): JSX.Element => {
  return (
    <>
      <Navbar />
      <div className="main-container">
        {children}
      </div>
    </>
  )
}

export default Layout;