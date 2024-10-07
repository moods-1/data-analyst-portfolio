import { Mixpanel } from './components/Mixpanel';
import {
	Header,
	About,
	Contact,
	Experience,
	Testimonials,
	Hero,
	Projects,
} from './components';

const App = () => {
	Mixpanel.track('Data analyst portfolio app accessed.', {
		action: 'Data analyst portfolio app accessed.',
	});

	return (
		<div>
			<Header />
			<Hero />
			<About />
			<Projects />
			<Experience />
			<Testimonials />
			<Contact />
		</div>
	);
};

export default App;
