import Navbar from '../components/Navbar';
import { ChildrenProps } from '../types';

function Layout({ children }: ChildrenProps): JSX.Element {
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