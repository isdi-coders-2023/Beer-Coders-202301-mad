import { Footer } from '../footer/footer';

export type MenuOption = {
  label: string;
  path: string;
};

const menuOptions: MenuOption[] = [
  { label: 'Home', path: '/home' },
  { label: 'My Beers', path: '/mybeers' },
  { label: 'About us', path: '/about' },
];

function App() {
  return (
    <div className="App">
      {/* TEMP: Hasta que estén hechos los componentes.
      <Header>
        <Menu menuOptions={menuOptions}></Menu>
      </Header>
      <AppRouter menuOptions={menuOptions}></AppRouter> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
