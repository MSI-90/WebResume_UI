import './MainContainer.css';
import Header from './Header';
import Main from './Main';

export default function MainContainer() {
  return (
    <>
      <div className="main-container">
        <Header />
        <Main />
      </div>
    </>
  )
}