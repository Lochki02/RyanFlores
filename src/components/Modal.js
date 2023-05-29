import emailjs from '@emailjs/browser';
import DatePicker from "react-datepicker";
import { IoMdClose } from "react-icons/io"
import { useRef, useState, useContext, createContext } from "react";
import { ClockLoader } from "react-spinners";

const EmailContext = createContext();

const EmailContextProvider = props => {
    const [data, setData] = useState([]);

    return <EmailContext.Provider value={{ data, setData }}>{props.children}</EmailContext.Provider>;
};

const Modal = ({
    startingStep = 1,
    opened = false,
    close = () => { }
}) => {
    const [step, changeStep] = useState(startingStep)
    const [loading, setLoading] = useState(false)

    return (
        <EmailContextProvider>
            <div className={(opened ? "flex" : "hidden") + " fixed top-0 left-0 justify-center h-screen bg-black bg-opacity-30 w-full py-20 px-5 overflow-y-scroll hidescrollbar"}>
                <div className="w-full h-fit max-w-[800px] px-[20px] py-[40px] sm:p-[40px] bg-white rounded-2xl">
                    <div className="w-full flex justify-between">
                        <h1 className="text-4xl font-bold">
                            {step == 1 && !loading && "Help us getting to know you"}
                            {step == 2 && !loading && "Terms of Service"}
                        </h1>
                        <IoMdClose color="#000" size={30} className="cursor-pointer" onClick={() => {
                            close()
                            changeStep(1)
                        }} />
                    </div>
                    {
                        step == 1 && !loading &&
                        <IntakeForm action={() => changeStep(2)} />
                    }

                    {
                        step == 2 && !loading &&
                        <TermsOfService loading={setLoading} action={() => {
                            changeStep(3)
                        }} />
                    }
                    {
                        step == 3 && !loading &&
                        <div>
                            <p className='text-2xl font-semibold'>
                                Thank you, a consultant will contact you within 1-3 business days
                            </p>
                        </div>
                    }
                    {
                        loading &&
                        <div className='w-full flex flex-col items-center'>
                            <ClockLoader
                                loading={true}
                                color="#000"
                                size={50}
                            />
                            <p className='text-lg font-semibold'>
                                Waiting for your request to process
                            </p>
                        </div>
                    }
                </div>
            </div>
        </EmailContextProvider>
    )
}

const IntakeForm = ({
    action = () => { }
}) => {
    const buttonRef = useRef(null)
    const formRef = useRef(null)
    const [date, setDate] = useState(new Date());
    const { setData } = useContext(EmailContext);

    const nextStep = (e) => {
        e.preventDefault()
        let data = []
        let inputs = formRef.current.elements

        data.push([inputs["name"].name, inputs["name"].value])
        data.push([inputs["gender"].name, inputs["gender"].value])
        data.push([inputs["email"].name, inputs["email"].value])
        data.push([inputs["date"].name, inputs["date"].value])
        data.push([inputs["relationship"].name, inputs["relationship"].value])
        data.push([inputs["expectations"].name, inputs["expectations"].value])
        data.push([inputs["contact"].name, inputs["contact"].value])
        data.push([inputs["companion"].name, inputs["companion"].value])

        setData(data)
        action()
    }

    return (
        <>
            <p className="text-red-600 font-semibold mt-7">All fields are required</p>

            <form ref={formRef} onSubmit={nextStep}>
                <InputField label="Name" classes="mt-5" name="name" placeholder="Ex. Dave Wats" />
                <InputField label="Gender" classes="mt-5" name="gender" placeholder="Ex. Straight, Gay, Lesbian, Bi or Pan, Prefer not to Say" />
                <InputField label="Email" classes="mt-5" name="email" type="email" placeholder="Ex. example@mail.com" />
                <div className="w-full mt-5">
                    <label htmlFor={"date"} className="text-lg font-semibold ml-2">Date of Birth</label>
                    <DatePicker
                        placeholderText="15/03/2002"
                        selected={date}
                        onChange={(newDate) => setDate(newDate)}
                        id="date"
                        name="date"
                        required
                        className="appearence-none outline-0 border focus:border-[2px] border-black rounded-lg w-full pl-3 py-4 text-xl mt-3"
                    />
                </div>
                <InputField label="What is your relationship status?" classes="mt-5" name="relationship" placeholder="Ex. Engaged, Single" />
                <InputField label="What are your expectations?" classes="mt-5" name="expectations" placeholder="Ex. I expect to feel better after a couple of days" />
                <InputField label="Preferred # or App to text on" classes="mt-5" name="contact" placeholder="Ex. Discord, Whatsapp" />
                <InputField label="Preferred Bundle" classes="mt-5" name="preferred_bundle" placeholder="N/A if unknown" />
                <InputField label="Do you prefer male or female companion?" classes="mt-5" name="companion" placeholder="Male or Female" />

                <button ref={buttonRef} type="submit" className="w-full rounded-lg mt-10 border-2 border-[#0b6ef9] py-3 cursor-pointer disabled:cursor-not-allowed transition-colors text-center font-semibold bg-[#0b6ef9] hover:bg-white text-white hover:text-black text-xl disabled:bg-opacity-50 disabled:border-opacity-0 disabled:hover:bg-[#0b6ef9] disabled:hover:bg-opacity-50 disabled:hover:text-white">
                    Next
                </button>
            </form>
        </>
    )
}

const InputField = ({
    label = "",
    id = "",
    name = "",
    classes = "",
    placeholder = "",
    type = "text"
}) => {
    return (
        <div className={"w-full " + classes}>
            <label htmlFor={id} className="text-lg font-semibold ml-2">{label}</label>
            <input placeholder={placeholder} required id={id} name={name} type={type} className="appearence-none outline-0 border focus:border-[2px] border-black rounded-lg w-full pl-3 py-4 text-xl mt-3" />
        </div>
    )
}

const TermsOfService = ({
    action = () => { },
    loading = () => { }
}) => {
    const { data } = useContext(EmailContext);
    const formRef = useRef(null)

    const sendEmail = async () => {
        emailjs.sendForm('service_g24acu2', 'template_wy1tnk1', formRef.current, 'rIv9EMPFKXekfxr2J')
            .then((result) => {
                console.log(result.text);
                loading(false)
                action()
            }, (error) => {
                console.log(error.text);
                loading(false)
            });
    }

    return (
        <form ref={formRef} onSubmit={(e) => {
            e.preventDefault()
            loading(true)
            sendEmail()
        }}>
            {
                data.map((input, index) => (
                    <input type='hidden' value={input.value} name={input.name} key={index} />
                ))
            }

            <div className='w-full h-[400px] mt-7 overflow-y-scroll hidescrollbar'>
                Terms and Conditions: AI Companionship Service<br /><br />

                These Terms and Conditions govern the use of the AI Companionship Service provided by Rayan Flores Companionship, a company registered under the laws of Canada
                <br /><br />
                By accessing or using the AI Companionship Service provided by the Company, you agree to be bound by this Agreement. If you do not agree to these terms, please do not use the service.
                <br /><br />
                1. Service Description
                The Company provides an AI Companionship Service that utilizes artificial intelligence and natural language processing technologies to offer real life companionship and interactive conversations. The service is designed to provide emotional support, engage in conversation, and offer entertainment.
                <br /><br />
                2.Payments and Fees
                If applicable, you agree to pay all fees and charges associated with the services as set forth in the Company's pricing or payment terms. Once paid no refunds will be issued as you are paying for digital service.
                <br /><br />
                3. User Responsibilities<br />
                3.1 Age Requirement
                You must be at least 18 years old or have obtained parental or guardian consent to use the AI Companionship Service. By using the service, you confirm that you meet the age requirement or have obtained the necessary consent.
                <br /><br />
                3.2 Use of the Service
                You agree to use the AI Companionship Service responsibly and for lawful purposes. You shall not use the service to engage in any activities that are illegal, abusive, harassing, defamatory, or violate the rights of others.
                <br /><br />
                3.3 Personal Information
                You acknowledge and agree that the AI Companionship Service may collect and process certain personal information, including but not limited to your interactions, preferences, and usage patterns strictly to give you the best experience for online companionship. The Company will handle your personal information in accordance with its Privacy Policy.
                <br /><br />
                4. Limitations and Disclaimers<br />
                4.1 Availability and Accuracy
                The Company strives to provide uninterrupted and accurate AI Companionship Service. However, the service may experience occasional downtime, errors, or inaccuracies. The Company does not guarantee the availability, accuracy, or reliability of the service.
                <br /><br />
                4.2 Emotional Support
                While the AI Companionship Service aims to provide emotional support, it is not a substitute for professional mental health services or medical advice. The Company strongly recommends seeking assistance from qualified professionals for any mental health concerns or emergencies.
                <br /><br />
                4.3 Limitation of Liability
                The Company and its affiliates, directors, employees, or agents shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or in connection with the use or inability to use the AI Companionship Service. The Company's total liability under this Agreement, whether in contract, tort, or otherwise, shall not exceed the fees paid by you for the service, if applicable.
                <br /><br />
                5. Intellectual Property
                All intellectual property rights in the AI Companionship Service, including but not limited to software, algorithms, content, and designs, are owned by or licensed to the Company. You are granted a limited, non-exclusive, non-transferable right to use the service for personal, non-commercial purposes. You shall not copy, modify, distribute, or create derivative works based on the Company's intellectual property without prior written consent.
                <br /><br />
                6. Termination
                Either party may terminate this Agreement at any time for any reason by providing written notice to the other party. The Company may also suspend or terminate your access to the AI Companionship Service immediately if you violate this Agreement or engage in any improper or abusive behavior. Upon termination, your access to the service will be discontinued.
                <br /><br />
                7. Governing Law and Dispute Resolution
                This Agreement shall be governed by and construed in accordance with the laws of [Country]. Any disputes arising out of or in connection with this Agreement shall be resolved through amicable negotiations. If the parties are unable to resolve the dispute amic
            </div>

            <button type="submit" className="w-full rounded-lg mt-10 border-2 border-[#0b6ef9] py-3 cursor-pointer disabled:cursor-not-allowed transition-colors text-center font-semibold bg-[#0b6ef9] hover:bg-white text-white hover:text-black text-xl disabled:bg-opacity-50 disabled:border-opacity-0 disabled:hover:bg-[#0b6ef9] disabled:hover:bg-opacity-50 disabled:hover:text-white">
                Accept & Send
            </button>
        </form>
    )
}

export default Modal;
