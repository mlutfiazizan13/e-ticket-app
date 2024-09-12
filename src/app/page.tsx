import EventsSection from '@/containers/home-page/events-section';
import HeroSection from './../containers/home-page/hero-section/index';

export default function Home() {
  return (
    <main className="">
		<HeroSection/>
		<hr/>
		<section className="relative container mx-auto my-5">
			<p className='font-semibold'>Find your events</p>
		</section>
		<hr />
		<EventsSection/>
	</main>
    
  );
}
