import Hero from '../components/hero/hero';
import Navbar from '../components/navbar/navbar';

type Props = {};

function Landing(props: Props): JSX.Element {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
}

export default Landing;
