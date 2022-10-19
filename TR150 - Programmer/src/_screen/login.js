import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

export default function Login() {
    const { t } = useTranslation();

    return (
        <div className='box content'>
            <div className='inner' id="LoginBoxDiv">
                <label>{t('Login')}</label>
                <Stack className='stack' spacing={3}>
                    <TextField className='input' label={t('username')} variant="outlined" />
                    <TextField className='input' label={t('password')} variant="outlined" type="password" />
                    <Link to="/home">
                        <Button variant="contained">{t('Login')}</Button>
                    </Link>
                </Stack>
            </div>
        </div>
    )
}