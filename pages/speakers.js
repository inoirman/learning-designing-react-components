
import Menu from "../src/components/Menu/Menu";
import SpeakerSearchBar from "../src/components/SpeakerSearchBar/SpeakerSearchBar";
import SpeakersList from "../src/components/Speakers/Speakers";
import Footer from "../src/components/Footer/Footer";
import Header from "../src/components/Header/Header";

const Speakers = () => (
    <div>
        <Header />
        <Menu />
        <SpeakerSearchBar />
        <SpeakersList />
        <Footer/>
    </div>
)

export default Speakers;