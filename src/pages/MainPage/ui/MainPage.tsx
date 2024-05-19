import React from 'react';
import { useTranslation } from 'react-i18next';
import { VirtualList } from 'shared/lib/virtualization/virtualization';
import Counter from 'test/Counter';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div>
            {t('Главная страница')}
            <Counter />
            {/* <VirtualList /> */}
        </div>
    );
};

export default MainPage;
