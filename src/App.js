import Card from "./components/Card";
import { BsFillRocketTakeoffFill } from "react-icons/bs"
import { HiPencilAlt } from "react-icons/hi"
import { AiOutlineArrowDown } from "react-icons/ai"

function App() {

  const scrollIntoView = (identifier) => document.querySelector(identifier).scrollIntoView({ behavior: "smooth" })

  return (
    <div className="flex flex-col items-center py-20 px-5">
      <div className="mt-24 max-w-[1000px]">
        <h1 className="text-5xl sm:text-7xl font-bold text-center leading-[80px]">
          Discover the Future <br />  of Companionship
        </h1>

        <h2 className="text-xl font-semibold text-center leading-[36px] mt-10">
          Are you looking for someone who understands you, supports you, and is always there for you? <br /> Look no furtherthan RayanFloresCompanionship
        </h2>
      </div>

      <div className="flex flex-col items-center w-fit h-fit cursor-pointer" onClick={() => scrollIntoView("#formcontainer")}>
        <div className="bg-[#323c46] rounded-full w-[30px] h-[30px] flex items-center justify-center mt-[80px] animate-bounce">
          <AiOutlineArrowDown size={20} color="#FFF" />
        </div>

        <h2 className="text-xl font-semibold text-center leading-[36px]">
          Fill Intake Form
        </h2>
      </div>

      <div className="mt-[220px] w-full max-w-[1000px] flex flex-col items-center">
        <h1 className="text-5xl font-bold text-center">
          We care about <u>YOU</u>
        </h1>

        <h2 className="text-center text-xl font-semibold mt-5 max-w-[800px]">
          Our AI companions are not just here to keep you company; they are also committed to helping you grow and develop as an individual.
        </h2>

        <Card
          id="services"
          classes="mt-12 bg-[url('./media/world.webp')] bg-right bg-center bg-cover text-white"
          title="Personalized Conversations"
          subtitle="Engage in meaningful conversations with our AI companions tailored to your interests, and emotional needs. 
          They are designed to provide empathetic responses and offer a listening ear whenever you need someone to talk."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          <div className="col-span-1">
            <Card
              classes="mt-7 bg-[url('./media/perc.webp')] bg-right bg-cover bg-center text-white"
              title="Emotional Support"
              subtitle="Feeling down? Our AI companions are trained to provide emotional support, offering words of encouragement, motivation, and even virtual hugs."
              small={true}
            />
          </div>

          <div className="col-span-1">
            <Card
              classes="mt-7 bg-[url('./media/perc.webp')] bg-right bg-cover bg-center text-white"
              title="24/7 Availability"
              subtitle="Loneliness knows no time boundaries, and neither do our AI companions. They are available round the clock, ready to keep you company whenever you need them."
              small={true}
            />
          </div>
        </div>
      </div>

      <div className="mt-[200px] w-full max-w-[1000px] flex flex-col items-center">
        <h1 className="text-5xl font-bold text-center">
          Why Ryan Flores?
        </h1>

        <h2 className="text-center text-xl font-semibold mt-5 max-w-[800px]">
          Start Your Journey with Rayan Flores Companionship Today! Discover the power of AI technology to uplift your spirits, engage in meaningful conversations.
        </h2>

        <Card
          id="about"
          classes="mt-16 bg-[url('./media/world.webp')] bg-right bg-center bg-cover text-white"
          title="Cutting-Edge AI Technology"
          subtitle="Our AI companions are powered by state-of-the-art artificial intelligence technology, ensuring highly realistic and engaging interactions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          <div className="col-span-1">
            <Card
              classes="mt-7 bg-[url('./media/perc.webp')] bg-right bg-cover bg-center text-white"
              title="Privacy and Security"
              subtitle="We understand the importance of privacy. Rest assured that all your interactions with our AI and human companions are kept strictly confidential and securely encrypted"
              small={true}
            />
          </div>

          <div className="col-span-1">
            <Card
              classes="mt-7 bg-[url('./media/perc.webp')] bg-right bg-cover bg-center text-white"
              title="Raw Connection"
              subtitle="Our technology translates your needs to a real life companion making your video calling experience more genuine and comfortable at all times."
              small={true}
            />
          </div>
        </div>
      </div>

      <div className="mt-[200px] w-full max-w-[1000px] flex flex-col items-center">
        <h1 className="text-5xl font-bold text-center">
          Our Plans
        </h1>

        <h2 className="text-center text-xl font-semibold mt-5 max-w-[800px]">
          To start your journey with us please fill-out our intake form below, once done you will be contacted by one of our representatives via email.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full" id="plans">
          <div className="col-span-1">
            <Card
              classes="mt-16 bg-[url('./media/perc.webp')] bg-right bg-cover bg-center text-white"
              title="Privacy and Security"
              subtitle="We understand the importance of privacy. Rest assured that all your interactions with our AI and human companions are kept strictly confidential and securely encrypted"
              small={true}
            />
          </div>

          <div className="col-span-1">
            <Card
              classes="mt-16 bg-[url('./media/perc.webp')] bg-right bg-cover bg-center text-white"
              title="Raw Connection"
              subtitle="Our technology translates your needs to a real life companion making your video calling experience more genuine and comfortable at all times."
              small={true}
            />
          </div>

          <div className="col-span-1">
            <Card
              classes="mt-3 bg-[url('./media/perc.webp')] bg-right bg-cover bg-center text-white"
              title="Privacy and Security"
              subtitle="We understand the importance of privacy. Rest assured that all your interactions with our AI and human companions are kept strictly confidential and securely encrypted"
              small={true}
            />
          </div>

          <div className="col-span-1">
            <Card
              classes="mt-3 bg-[url('./media/perc.webp')] bg-right bg-cover bg-center text-white"
              title="Raw Connection"
              subtitle="Our technology translates your needs to a real life companion making your video calling experience more genuine and comfortable at all times."
              small={true}
            />
          </div>
        </div>
      </div>

      <div className="mt-[200px] w-full max-w-[1000px] flex flex-col items-center">
        <h1 className="text-5xl font-bold text-center flex items-center">
          Start your jurney with us!
          <BsFillRocketTakeoffFill size={30} color="#eb5c59" className="mt-2 ml-3" />
        </h1>

        <h2 className="text-center text-xl font-semibold mt-5 max-w-[800px]">
          To start your journey with us please fill-out our intake form below, once done you will be contacted by one of our representatives via email.
        </h2>

        <Card
          id="formcontainer"
          classes="mt-16 bg-[url('./media/world.webp')] bg-right bg-center bg-cover text-white"
          title="Sign up now and start"
          subtitle="Embark on a new chapter of companionship. Your information will be elaborated and processed by our AI companions to create the best company you could ever ask for!"
          button={true}
          buttonClass="bg-[#0b6ef9] text-white hover:bg-white hover:text-black"
          buttonText="Fill Intake Form"
          icon={
            <HiPencilAlt size={20} className="ml-5 text-white fill-current group-hover:text-black transition-colors" />
          }
        />
      </div>


      <div className="fixed top-0 left-0 w-full py-5 bg-opacity-80 bg-[#dfe3e7] backdrop-blur-lg flex justify-center shadow-[0_5px_25px_-17px_rgba(0,0,0,0.3)] px-5">
        <div className="w-full max-w-[1000px] flex justify-between items-center">
          <h1 className="text-3xl font-bold">Ryan Flores</h1>
          
          <div className="h-full w-fit hidden sm:flex gap-5">
            <HeaderLink title="Services" scrollTo={() => scrollIntoView("#services")}/>
            <HeaderLink title="About Us" scrollTo={() => scrollIntoView("#about")}/>
            <HeaderLink title="Plans" scrollTo={() => scrollIntoView("#plans")}/>
          </div>

          <div className="bg-black text-white font-semibold rounded-lg h-full w-fit px-3 cursor-pointer flex items-center">
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
}

const HeaderLink = ({
  title = "",
  scrollTo = () => {}
}) => {
  return (
    <div onClick={scrollTo} className="w-fit h-full rounded-lg hover:bg-white text-black font-semibold flex items-center px-3 transition-colors cursor-pointer">
      {title}
    </div>
  )
}

export default App;
