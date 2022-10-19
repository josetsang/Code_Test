import React from 'react'
import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation();

    return (
        <div className="home_box content">
            <div className="home_text">{t('Welcome')}</div>
        </div>
    );
}

export default Home;
