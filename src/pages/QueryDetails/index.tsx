import { FaVolumeUp } from 'react-icons/fa';
import styles from './styles.module.css';

const DetailsView = () => {
    const data = {
        name: 'John Doe',
        phone: '+1 234 567 890',
        time: '10:30 AM',
        category: 'Support',
        status: 'ongoing',
        action: 'Action',
      };
    const messages = [
        {
          user: 'agent',
          localMessage: 'नमस्ते, आप कैसे हैं?', // Local language (e.g., Hindi)
          message: 'Hello, how are you?',
          audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
          time: '23:40',
        },
        {
          user: 'user',
          localMessage: 'मैं ठीक हूं, धन्यवाद!', // Local language (e.g., Hindi)
          message: "I'm good, thank you!",
          audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
          time: '23:41',
        },
        {
          user: 'agent',
          localMessage: 'आपको किसकी मदद चाहिए?', // Local language (e.g., Hindi)
          message: 'What help do you need?',
          audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
          time: '23:42',
        },
        {
          user: 'user',
          localMessage: 'मुझे एक रिपोर्ट की आवश्यकता है।', // Local language (e.g., Hindi)
          message: 'I need a report.',
          audioSrc: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
          time: '23:43',
        },
      ];

      const lastMessageUser = messages[messages.length - 1].user;
    
  return (
    <div className="flex flex-1 h-[900px]">
      <div className="w-1/2 p-6 my-10">
  <h1 className="text-3xl font-bold mb-4">Query Details</h1>
  <div className="grid grid-cols-2 gap-6 pt-10 text-lg font-semibold">
    {/* First Row */}
    <div className="mb-4">
      <div className="text-gray-500 pb-4">Name</div>
      <div className="text-black">{data.name}</div>
    </div>
    <div className="mb-4">
      <div className="text-gray-500 pb-4">Phone Number</div>
      <div className="text-black">{data.phone}</div>
    </div>
    <div className="col-span-2">
      <hr />
    </div>

    {/* Second Row */}
    <div className="mb-4">
      <div className="text-gray-500 pb-4">Time</div>
      <div className="text-black">{data.time}</div>
    </div>
    <div className="mb-4">
      <div className="text-gray-500 pb-4">Category</div>
      <div className="text-black">{data.category}</div>
    </div>
    <div className="col-span-2">
      <hr />
    </div>

    {/* Third Row */}
    <div className="mb-4">
      <div className="text-gray-500 pb-4">Status</div>
      <div className="text-black">{data.status}</div>
    </div>
    <div className="mb-4">
      <div className="text-gray-500 pb-4">Action</div>
      <div className="text-black cursor-pointer hover:underline">{data.action}</div>
    </div>
    <div className="col-span-2">
      <hr />
    </div>
  </div>
</div>

      <div className={`w-1/2 m-10 shadow-2xl  overflow-scroll py-6 ${styles.chatView}`}>
      <div className="chat-container  h-screen flex flex-col p-4">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`message flex items-center mb-4 ${msg.user === 'user' ? 'justify-start' : 'justify-end'}`}
        >
          {msg.user === 'user' ? (
            <div className="avatar-user flex-shrink-0 mr-3">
              <div className="w-8 h-8 rounded-full bg-gray-400 text-white flex items-center justify-center">
                U
              </div>
            </div>
          ) : null}

          <div
            className={`message-body max-w-3/5 p-3 rounded-lg shadow-md flex items-center space-x-2 ${
              msg.user === 'user' ? 'bg-gray-200 text-left' : 'bg-green-200 text-right'
            }`}
          >
            <div className="w-full">
              <p className="text-lg font-medium">
                {msg.localMessage} <span className="text-gray-600">({msg.message})</span>
              </p>
              <span className="block text-xs text-gray-500 mt-1">{msg.time}</span>
            </div>
            <button
              onClick={() => new Audio(msg.audioSrc).play()}
              className="ml-2 text-gray-500 hover:text-gray-800"
            >
              <FaVolumeUp size={25} />
            </button>
          </div>

          
          {msg.user === 'agent' ? (
            <div className="avatar-agent flex-shrink-0 ml-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center">
                A
              </div>
            </div>
          ) : null}
        </div>
      ))}
      <div
        className={`message flex items-center mb-4 ${
          lastMessageUser === 'user' ? 'justify-end' : 'justify-start'
        }`}
      >
        {data.status === 'ongoing' && lastMessageUser === 'user' ? (
          <>
            <div className={`${styles["loader"]} w-12 h-6 py-8`} />
            <div className="avatar-agent flex-shrink-0 ml-3">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center">
                A
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="avatar-user flex-shrink-0 mr-3">
              <div className="w-8 h-8 rounded-full bg-gray-400 text-white flex items-center justify-center">
                U
              </div>
            </div>
            <div className={`${styles["loader"]} w-12 h-6 py-8`} />
          </>
        )}
      </div>
    </div>
      </div>
    </div>
  );
}

export default DetailsView;