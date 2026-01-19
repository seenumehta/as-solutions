import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import Footer from '../components/Footer';

function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <WhyChooseUs />
                <Process />
            </main>
            <Footer />
        </>
    );
}

export default Home;
