import { app } from '@storybook/vue3';
import VueI18n from '@/i18n.js'

import '@/tailwind.css'

app.use(VueI18n);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}