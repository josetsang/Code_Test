import './App.css';
import { Route, Routes, Switch, Link } from "react-router-dom";
import Login from './_screen/login';
import Home from './_screen/home';
import { useTranslation } from 'react-i18next';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react'

export default function App() {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = React.useState('en');

  const changeLanguage = (e) => {
    setLang(e.target.value)
    i18n.changeLanguage(e.target.value);
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">{t('Home')}</Link>
          </li>
          <li>
            <Link to="/login">{t('Login')}</Link>
          </li>
        </ul>
        <Select
          className='select'
          value={lang}
          onChange={changeLanguage}
        >
          <MenuItem value={"en"}>EN</MenuItem>
          <MenuItem value={"zh"}>繁</MenuItem>
        </Select>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}
