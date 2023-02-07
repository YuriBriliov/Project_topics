import React, { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Counter from './components/Counter/Counter';
import './styles/index.scss'
import { AboutPageLazy } from './Pages/AboutPage/AboutPage.lazy';
import { MainPageLazy } from './Pages/MainPage/MainPage.lazy';
import { useContext } from 'react';
import { Theme, ThemeContext } from './theme/themeContext';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';


const App = () => {

const {theme, toggleTheme} = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>toggle</button>
      <Link to={'/'} >Main page</Link>
      <Link to={'/about'} >About page</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path={'/'} element={<MainPageLazy />} />
            <Route path={'/about'} element={<AboutPageLazy />} />
        </Routes>
      </Suspense>
      {/* <Counter /> */}
    </div>
  );
};

export default App;