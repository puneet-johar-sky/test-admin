import polyglotI18nProvider from 'ra-i18n-polyglot';
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  CustomRoutes,
} from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import Sles from './sles';
import { Layout, Login } from './layout';
import { themes, ThemeName } from './themes/themes';
import englishMessages from './i18n/en';
import { Dashboard } from './dashboard';
const i18nProvider = polyglotI18nProvider(
  locale => {
      if (locale === 'fr') {
          return import('./i18n/fr').then(messages => messages.default);
      }

      // Always fallback on english
      return englishMessages;
  },
  'en',
  [
      { locale: 'en', name: 'English' },
      { locale: 'fr', name: 'Français' },
  ]
);
export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider} layout={Layout} i18nProvider={i18nProvider}  >
    <Resource
      name="posts"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="comments"
      list={ListGuesser}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource
      name="sles"
      {...Sles}
    />
    <Resource
     name="linearChannels"
     list={ListGuesser}
     edit={EditGuesser}
     show={ShowGuesser}
    />
    <Resource name="ATOM"
    list={ListGuesser}
    edit={EditGuesser}
    show={ShowGuesser} />
<Resource name="profiles"
    list={ListGuesser}
    edit={EditGuesser}
    show={ShowGuesser} />
  </Admin>
);
