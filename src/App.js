import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/navigation/Navigation.jsx';
import Home from './routes/home/Home';
import Shop from './components/Shop';
import SignIn from './routes/sign-in/SignIn.jsx';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index={true} element={<Home />} />

        <Route path='shop' element={<Shop />} />
        <Route path='signIn' element={<SignIn />} />
      </Route>
    </Routes>
  );
};
export default App;
