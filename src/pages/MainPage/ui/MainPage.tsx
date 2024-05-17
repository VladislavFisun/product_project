import React from 'react';
import { useTranslation } from 'react-i18next';
import { VirtualList } from 'shared/lib/virtualization/virtualization';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t('Главная страница')}
            <VirtualList />
        </div>
    );
};

export default MainPage;
