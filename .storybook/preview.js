import './styles/_fonts.scss';
import {initializeRTL} from 'storybook-addon-rtl';

initializeRTL();

export const parameters = {
  actions: {argTypesRegex: '^on[A-Z].*'},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
