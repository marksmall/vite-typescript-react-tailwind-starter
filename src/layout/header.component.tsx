import React, { FC, ReactElement } from 'react';

import { useTranslation } from 'react-i18next';

import { ThemeSwitcher } from '~/theme/theme-switcher.component';

import { GBIcon, FRIcon } from '~/i18n/icons';

const Header: FC = (): ReactElement => {
  const { t, i18n } = useTranslation();

  const onLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    const language = event.target.value;
    console.log('Changing Language: ', language);
    i18n.changeLanguage(language);
  };

  return (
    <header>
      <h1 className="font-bold">{t('greeting')} User</h1>

      <ThemeSwitcher className="mt-1 hidden transition-transform ease-in-out hover:-translate-y-1 hover:text-accent focus:outline-none focus-visible:outline-accent sm:block" />

      <select className="text-gray-900" onChange={onLanguageChange}>
        <option value="en">
          English
          {/* <GBIcon /> English */}
        </option>
        <option value="fr">
          French
          {/* <FRIcon /> French */}
        </option>
      </select>
    </header>
  );
};

export default Header;
