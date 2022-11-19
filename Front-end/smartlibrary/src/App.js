// import logo from './logo.svg';
import s from './App.css';
import Calendar from './Components/Calendar/Calendar';
import AdminPage from './Pages/AdminMainPage/AdminPage';

function App() {
  return (
    <div className={s.wrapper}>
      {/* <Calendar/> */}
      <AdminPage/>
    </div>
  );
}

export default App;
