import { MainCard } from '../components/main.card/main.card';
import './home.scss';

export default function HomePage() {
  return (
    <section className="home-page">
      <h2>Discover</h2>
      {/* TEMPORAL <HomeList></HomeList> */}
      <div className="list">
        <MainCard></MainCard>
        <MainCard></MainCard>
      </div>
    </section>
  );
}
