import Card from "./components/Card";
import IntakeForm from "./components/Modal";
import { BsArrowRightShort, BsChevronDown } from "react-icons/bs"
import { HiPencilAlt } from "react-icons/hi"
import { AiOutlineArrowDown } from "react-icons/ai"
import { useRef, useState } from "react";
import 'react-datepicker/dist/react-datepicker.css'
import Prova from "./components/Prova";

function App() {

  const [openedForm, setOpenedForm] = useState(false)

  const scrollIntoView = (identifier) => document.querySelector(identifier).scrollIntoView({ behavior: "smooth" })

  return (
    <>
      <div className="flex flex-col items-center py-20 px-5">
        <div className="mt-24 max-w-[1000px]">
          <h1 className="text-5xl sm:text-7xl font-bold text-center leading-[80px]">
            Discover the Future <br />  of Companionship
          </h1>

          <h2 className="text-xl font-semibold text-center leading-[36px] mt-10">
            Are you looking for someone who understands you, supports you, and is always there for you? <br /> Look no further than Rayan Fleurs Companionship
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

            button={true}
            buttonClass="bg-[#0b6ef9] text-white hover:bg-white hover:text-black mt-10"
            buttonText="More Infos"
            icon={
              <BsArrowRightShort size={25} className="ml-3 text-white fill-current group-hover:text-black transition-colors" />
            }

            infoPanel={true}
            panelClass="bg-[#ccdbea] text-black text-2xl overflow-y-scroll hidescrollbar"
            panelText="Engage in meaningful conversations with our AI companions that are tailored to your preferences, interests, and emotional needs. Our AI companions are designed to provide empathetic responses and offer a listening ear whenever you need someone to talk to which is then documented prior to video calling, to your own real life companion who will understand your emotions, needs, issues when entering the call."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
            <div className="col-span-1">
              <Card
                classes="mt-7 bg-[url('./media/HeartBG.png')] bg-right bg-cover bg-center text-white"
                title="Emotional Support"
                subtitle="Feeling down? Our AI companions are trained to provide emotional support, offering words of encouragement, motivation, and even virtual hugs."
                small={true}
              />
            </div>

            <div className="col-span-1">
              <Card
                classes="mt-7 bg-[url('./media/StairsBG.png')] bg-right bg-cover bg-center text-white"
                title="24/7 Availability"
                subtitle="Loneliness knows no time boundaries, and neither do our AI companions. They are available round the clock, ready to keep you company whenever you need them."
                small={true}
              />
            </div>

            <div className="col-span-1">
              <Card
                classes="mt-3 bg-[url('./media/questionBG.png')] bg-right bg-cover bg-center text-white"
                title="Intelligent Problem-Solving"
                subtitle="Need help finding a solution to a problem? Our AI companions are equipped with vast knowledge and problem-solving capabilities."
                small={true}
              />
            </div>

            <div className="col-span-1">
              <Card
                classes="mt-3 bg-[url('./media/handleBG.png')] bg-right bg-cover bg-center text-black"
                title="Personal Development"
                subtitle="Our AI companions are not just here to keep you company; they are also committed to helping you grow and develop as an individual."
                small={true}
              />
            </div>
          </div>
        </div>

        <div className="mt-[200px] max-w-[1000px]">
          <h1 className="text-5xl font-bold text-center leading-[80px]">
            Who are we?
          </h1>

          <h2 className="text-xl font-semibold text-center leading-[36px] mt-10">
            We’re a Canadian-based <b>only</b> companionship service offering pure connections through AI technology which is then translated to us before entering video calling, phone calls, with someone who will already understand your issues, needs, and more giving you the raw experience of genuine online companionship.
          </h2>
        </div>

        <div className="mt-[200px] w-full max-w-[1000px] flex flex-col items-center">
          <h1 className="text-5xl font-bold text-center">
            Why Rayan Fleurs?
          </h1>

          <h2 className="text-center text-xl font-semibold mt-5 max-w-[800px]">
            Start Your Journey with Rayan Fleurs Companionship Today! Discover the power of AI technology to uplift your spirits, engage in meaningful conversations.
          </h2>

          <Card
            id="about"
            classes="mt-16 bg-[url('./media/BrainBG.png')] bg-right bg-center bg-cover text-white"
            title="Cutting-Edge AI Technology"
            subtitle="Our AI companions are powered by state-of-the-art artificial intelligence technology, ensuring highly realistic and engaging interactions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
            <div className="col-span-1">
              <Card
                classes="mt-7 bg-[url('./media/BookBG.png')] bg-right bg-cover bg-center text-white"
                title="Privacy and Security"
                subtitle="We understand the importance of privacy. Rest assured that all your interactions with our AI and human companions are kept strictly confidential and securely encrypted"
                small={true}
              />
            </div>

            <div className="col-span-1">
              <Card
                classes="mt-7 bg-[url('./media/RawBG.png')] bg-right bg-cover bg-center text-white"
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
            Once your intake form is submitted you’ll be contacted with our full selection of prices, membership plans, and other options that will meet your needs, below is some of our top selling plans
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full" id="plans">
            <div className="col-span-1">
              <Card
                classes="mt-16 bg-[url('./media/dollarBG.png')] bg-right bg-cover bg-center text-white"
                title="Free Trial"
                small={true}

                button={true}
                buttonClass="bg-black text-white hover:bg-white hover:text-black"
                buttonText="More Infos"
                icon={
                  <BsArrowRightShort size={25} className="ml-3 text-white fill-current group-hover:text-black transition-colors" />
                }

                infoPanel={true}
                panelClass="bg-[#b596e0] text-2xl overflow-y-scroll hidescrollbar"
                panelText="1 hour free texting with documented notes, this will help assist us in deciding on what we believe is the best plan to meet your needs"
              />
            </div>

            <div className="col-span-1">
              <Card
                classes="mt-16 bg-[url('./media/PersonBG.png')] bg-right bg-cover bg-center text-white"
                title="Communication Bundle"
                cost="$105"
                small={true}

                button={true}
                buttonClass="bg-black text-white hover:bg-white hover:text-black"
                buttonText="More Infos"
                icon={
                  <BsArrowRightShort size={25} className="ml-3 text-white fill-current group-hover:text-black transition-colors" />
                }

                infoPanel={true}
                panelClass="bg-[#323c46] text-2xl overflow-y-scroll hidescrollbar"
                panelText="24 hours texting with documented notes"
              />
            </div>

            <div className="col-span-1">
              <Card
                classes="mt-3 bg-[url('./media/SunBG.png')] bg-right bg-cover bg-center text-black"
                title="Day Bundle"
                cost="$140"
                small={true}

                button={true}
                buttonClass="bg-black text-white hover:bg-[#fcd551] hover:text-black"
                buttonText="More Infos"
                icon={
                  <BsArrowRightShort size={25} className="ml-3 text-white fill-current group-hover:text-black transition-colors" />
                }

                infoPanel={true}
                panelClass="bg-[#f0cd6a] text-2xl overflow-y-scroll hidescrollbar"
                panelText="24 hours texting with documented notes with 1 hour companionship video call session"
              />
            </div>

            <div className="col-span-1">
              <Card
                classes="mt-3 bg-[url('./media/CamBG.png')] bg-right bg-cover bg-center text-black"
                title="Video Bundle"
                cost="$175"
                small={true}

                button={true}
                buttonClass="bg-[#ece3aa] text-black hover:bg-black hover:text-white"
                buttonText="More Infos"
                icon={
                  <BsArrowRightShort size={25} className="ml-3 text-black fill-current group-hover:text-white transition-colors" />
                }

                infoPanel={true}
                panelClass="bg-[#ece3aa] text-2xl overflow-y-scroll hidescrollbar"
                panelText="3 hour long companionship video call session"
              />
            </div>

            <div className="col-span-1">
              <Card
                classes="mt-3 bg-[url('./media/MedalBG.png')] bg-right bg-cover bg-center text-white"
                title="3 Day Video Bundle"
                cost="$210"
                small={true}

                button={true}
                buttonClass="bg-black text-white hover:bg-white hover:text-black"
                buttonText="More Infos"
                icon={
                  <BsArrowRightShort size={25} className="ml-3 text-white fill-current group-hover:text-black transition-colors" />
                }

                infoPanel={true}
                panelClass="bg-[#323c46] text-2xl overflow-y-scroll hidescrollbar"
                panelText="72 hours texting with documented notes with 1 hour per day companionship video call session"
              />
            </div>

            <div className="col-span-1">
              <Card
                classes="mt-3 bg-[url('./media/crownBG.png')] bg-right bg-cover bg-center text-black"
                title="Elite Bundle"
                cost="$399"
                small={true}

                button={true}
                buttonClass="bg-black text-white hover:bg-white hover:text-black"
                buttonText="More Infos"
                icon={
                  <BsArrowRightShort size={25} className="ml-3 text-white fill-current group-hover:text-black transition-colors" />
                }

                infoPanel={true}
                panelClass="bg-[#1ec98b] text-2xl overflow-y-scroll hidescrollbar"
                panelText="1 month of unlimited texting with daily 1 hour companionship video call sessions"
              />
            </div>

            <p className="col-span-2 text-center text-2xl mt-5">
              Contact us to see further plans for addiotional pricings
            </p>
          </div>
        </div>

        <div className="mt-[200px] w-full max-w-[1000px] flex flex-col items-center">
          <h1 className="text-5xl font-bold text-center flex items-center">
            Start your journey with us!
          </h1>

          <h2 className="text-center text-xl font-semibold mt-5 max-w-[800px]">
            To start your journey with us please fill-out our intake form below, once done you will be contacted by one of our representatives via email.
          </h2>

          <Card
            id="formcontainer"
            classes="mt-16 bg-[url('./media/RocketBG.png')] bg-right bg-center bg-cover text-black"
            title="Sign up now and start your free trial today"
            subtitle="Embark on a new chapter of companionship. Your information will be elaborated and processed by our AI companions to create the best company you could ever ask for!"
            button={true}
            buttonClass="bg-[#fbd624] text-black hover:bg-white mt-10"
            buttonText="Fill Intake Form"
            icon={
              <HiPencilAlt size={20} className="ml-5 text-black fill-current transition-colors" />
            }
            buttonAction={() => setOpenedForm(true)}
          />
        </div>

        <div className="mt-[200px] w-full max-w-[1000px] flex flex-col items-center">
          <h1 className="text-5xl font-bold text-center" id="faq">
            Frequently Asked Questions
          </h1>

          <h2 className="text-center text-xl font-semibold mt-5 max-w-[800px]">
            Here are some of the hot topics of RayanFleursCompanions, most of your questions will be answered here
          </h2>

          <div className="flex flex-col w-full gap-10">
            <FaqAccordion question="Is this a real person?" answer="Yes and no, even though texting our AI technology is 100% artificial intelligence, calling and video calling is done with a real life person, the AI technology helps us better understand you." classes="mt-10" />
            <FaqAccordion question="What is an AI?" answer="AI stands for Artificial Intelligence. It means that every time you get a reply, you interact with a sophisticated neural network machine learning algorithm." />
            <FaqAccordion question="Is my data safe?" answer="Your data is completely safe with us. We don’t share it with anyone and don’t use it to run ads. We don’t use emails or social media info to learn about our customers." />
            <FaqAccordion question="Are my conversations private?" answer="Your conversations are private and will stay between you and your personal companion." />
            <FaqAccordion question="What payments can I make?" answer="As we’re a Canadian based only companionship as of now, we take e-transfer, Credit, and PayPal." />
            <FaqAccordion question="Can I get a refund?" answer=" Once paid no refunds will be issued as you are paying for digital service, we recommend customers to try the Communications Bundle to have a taste of the experience." />
            <FaqAccordion question="Will you expand outside of Canada? If so, when?" answer="As our AI technology is limitless, our real life companions are limited. We aim to expand late 2023." />
            <FaqAccordion question="How does the texting package work?" answer="Once the intake form is filled out, you’ll be given a few options to interact with our AI technology which we can do via texting, iMessage, and Discord." />
            <FaqAccordion question="How do video calls work?" answer="You’ll be selected a personal companion who meets your needs which is documented to us from our customers' interactions with our AI texting technology. The video calls are conducted on apps such as FaceTime, Skype, and Discord." />
            <FaqAccordion question="Can I request for a different personal companion?" answer="Yes, if requested you can be given a different companion. We are confident that your first experience will be one that exceeds your expectations as you will feel as if you were already best friends due to our cutting edge technology which is given to our personal companions." />
          </div>
        </div>

        <div className="fixed top-0 left-0 w-full py-5 bg-opacity-80 bg-[#dfe3e7] backdrop-blur-lg flex justify-center shadow-[0_5px_25px_-17px_rgba(0,0,0,0.3)] px-5">
          <div className="w-full max-w-[1000px] flex justify-between items-center">
            <h1 className="text-3xl font-bold">Rayan Fleurs</h1>

            <div className="h-full w-fit hidden sp:flex gap-5">
              <HeaderLink title="Services" scrollTo={() => scrollIntoView("#services")} />
              <HeaderLink title="About Us" scrollTo={() => scrollIntoView("#about")} />
              <HeaderLink title="Plans" scrollTo={() => scrollIntoView("#plans")} />
              <HeaderLink title="FAQ" scrollTo={() => scrollIntoView("#faq")} />
              <HeaderLink title="Contact" scrollTo={() => scrollIntoView("#footer")} />
            </div>

            <div onClick={() => setOpenedForm(true)} className="bg-black text-white font-semibold rounded-lg h-full w-fit px-3 cursor-pointer flex items-center">
              Sign Up
            </div>
          </div>
        </div>

        <IntakeForm opened={openedForm} close={() => setOpenedForm(false)} />
      </div>

      <div id="footer" className="w-full py-10 flex justify-center text-white font-semibold text-xl bg-black">
        For any questions or inquiries please contact us at fleursrayan@gmail.com
      </div>
    </>
  );
}

const HeaderLink = ({
  title = "",
  scrollTo = () => { }
}) => {
  return (
    <div onClick={scrollTo} className="w-fit h-full rounded-lg hover:bg-white text-black font-semibold flex items-center px-3 transition-colors cursor-pointer">
      {title}
    </div>
  )
}

const FaqAccordion = ({
  question = "",
  answer = "",
  classes = ""
}) => {
  const [opened, setOpened] = useState(false)

  return (
    <div className={"w-full border-b-2 border-black px-5 cursor-pointer pb-3 group " + classes} onClick={() => { setOpened(!opened) }}>
      <div className="w-full flex items-center justify-between pt-3">
        <p className="font-semibold text-2xl">{question}</p>
        <div className={!opened && "transition-transform duration-700 group-hover:rotate-[180deg]"}>
          {
            !opened ?
              <BsChevronDown size={20} color="#000" />
              :
              <BsChevronDown size={20} color="#000" className="rotate-[180deg]" />
          }
        </div>
      </div>
      <div className={"w-full overflow-y-hidden transition-[max-height] mt-2 text-xl " + (opened ? "max-h-[500px]" : "max-h-0")}>
        {answer}
      </div>
    </div>
  )
}

export default App;
