import message_chat from "../Assets/featuresection/message-chat-circle.svg"
import Featured_icon from"../Assets/featuresection/Featured icon.svg"
import report_icon from "../Assets/featuresection/Reporticon.svg"
import customer_icon from"../Assets/featuresection/customer_icon.svg"
import tooliicon from"../Assets/featuresection/toolicon.svg"
import people_icon from"../Assets/featuresection/peopleicion.svg"

const Features = () => {
  return (
    <div className="text-center mt-10 flex-col">
      <div className="text-center items-center mb-8 pt-10">
  <p className="text-violet-600 font-bold text-lg pt-10">Features</p>
  <p className="font-semibold text-lg pt-5">Analytics, that feel like it's from the future</p>
  <p className="w-full sm:w-3/4 md:w-2/5 mx-auto pt-5">
    Powerful, self-serve product and growth analytics to help you convert, engage, 
    and retain more users. Trusted by over 4,000 startups.
  </p>
</div>

      
      <div className="p-10 ml-10">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div className="text-center">
      <img src={message_chat} alt="Shared team inboxes" className="mx-auto h-16" />
      <h1 className="mt-4 font-semibold text-lg">Shared team inboxes</h1>
      <p className="text-gray-600 mt-2">
        Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.
      </p>
    </div>

    <div className="text-center">
      <img src={Featured_icon} alt="Instant answers delivery" className="mx-auto h-16" />
      <h1 className="mt-4 font-semibold text-lg">Deliver instant answers</h1>
      <p className="text-gray-600 mt-2">
        An all-in-one customer service platform that helps you balance everything your customers need to be happy.
      </p>
    </div>

    <div className="text-center">
      <img src={report_icon} alt="Team management with reports" className="mx-auto h-16" />
      <h1 className="mt-4 font-semibold text-lg">Manage your team with reports</h1>
      <p className="text-gray-600 mt-2">
        Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drill down on the data in a couple of clicks.
      </p>
    </div>

    <div className="text-center">
      <img src={customer_icon} alt="Connecting with customers" className="mx-auto h-16" />
      <h1 className="mt-4 font-semibold text-lg">Connect with customers</h1>
      <p className="text-gray-600 mt-2">
        Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.
      </p>
    </div>

    <div className="text-center">
      <img src={tooliicon} alt="Integrating tools" className="mx-auto h-16" />
      <h1 className="mt-4 font-semibold text-lg">Connect the tools you already use</h1>
      <p className="text-gray-600 mt-2">
        Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.
      </p>
    </div>

    <div className="text-center">
      <img src={people_icon} alt="Our people make the difference" className="mx-auto h-16" />
      <h1 className="mt-4 font-semibold text-lg">Our people make the difference</h1>
      <p className="text-gray-600 mt-2">
        We’re an extension of your customer service team, and all of our resources are free. Chat with our friendly team 24/7 when you need help.
      </p>
    </div>
  </div>
</div>
</div>
  )
}

export default Features;
