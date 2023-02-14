import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { Menu } from '../menu/menu';

export type MenuOption = {
  label: string;
  path: string;
};

export const menuOptions: MenuOption[] = [
  { label: 'Home', path: '/home' },
  { label: 'My Beers', path: '/mybeers' },
  { label: 'About us', path: '/about' },
];

function App() {
  return (
    <div className="App">
      <Header>
        <Menu menuOptions={menuOptions}></Menu>
      </Header>
      {/* TEMP: Hasta que estén hechos los componentes.<AppRouter menuOptions={menuOptions}></AppRouter> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
