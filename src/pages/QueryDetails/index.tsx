import { FaVolumeUp } from 'react-icons/fa';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import formatDate from '../../utils/formatDate';
import { Howl } from "howler";
import { useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const DetailsView = () => {
  const [enquiryDetails, setEnquiryDetails] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);

  const { id } = useParams();

  const lastMessageUser = enquiryDetails?.messages?.[enquiryDetails?.messages.length - 1].user;
  let intervalId:any;

  useEffect(() => {
    // Function to fetch API data
    const fetchEnquiryDetails = async () => {
      try {
        setLoading(true);

        const response = await fetch(`https://ainstein-api-black-voice-1238.fly.dev/conversations/${id}`); // Replace with your actual API
        if (!response.ok) {
          throw new Error('Failed to fetch enquiry details');
        }
        const data = await response.json();
        setEnquiryDetails(data);
      } catch (err: any) {
      } finally {
        setLoading(false);
      }
    };

    fetchEnquiryDetails();

  }, []);

  const playAudio =  async (audio: any) => {
    console.log(audio)
    const binaryData = await new Uint8Array(audio.match(/.{1,2}/g).map((byte:any) => parseInt(byte, 16)));

    // Create a Blob from the binary data
    const blob = await new Blob([binaryData], { type: 'audio/wav' }); // Adjust MIME type as needed
    const url = await URL.createObjectURL(blob);

    console.log("url ===>", url);
    
    // Create Howl instance
    const howlInstance = new Howl({
      src: [url],
      format: ["wav"],
    });
    howlInstance.play();
  };


  return loading ? <div className='w-full h-60 flex justify-center items-center'><CircularProgress color="success" /></div> :  (
    <div className="flex flex-1 h-[900px]">
      <div className="w-2/5 p-6 my-10">
  <h1 className="text-3xl font-bold mb-4">Query Details</h1>
  
  <div className="grid grid-cols-1 gap-6 pt-20 text-lg font-semibold">

    <div className="flex justify-between items-center mb-4">
      <div className="text-gray-500">Phone Number</div>
      <div className="text-green-500 text-2xl font-bold">{enquiryDetails.phone_number || '-'}</div>
    </div>

    <div>
      <hr />
    </div>

    <div className="flex justify-between items-center mb-4">
      <div className="text-gray-500">Time</div>
      <div className="text-black">{enquiryDetails.created_at ? formatDate(enquiryDetails.created_at) : '-'}</div>
    </div>

    <div>
      <hr />
    </div>

    <div className="flex justify-between items-center mb-4">
      <div className="text-gray-500">Feedback Rating</div>
      <div className="text-black text-right">{enquiryDetails.feedback || '-'}</div>
    </div>

    <div>
      <hr />
    </div>

    {/* Status Row with curved sides and color based on status */}
    <div className="flex justify-between items-center mb-4">
      <div className="text-gray-500">Status</div>
      <div className={`px-4 py-2 rounded-full font-semibold ${
        enquiryDetails.status === 'PENDING' ? "bg-green-100 text-green-800"
        : enquiryDetails.status === 'RESOLVED' ? "bg-yellow-100 text-yellow-800"
                      : "bg-red-100 text-red-800"
      }`}>
        {enquiryDetails.status || '-'}
      </div>
    </div>

  </div>
</div>


      <div className={`w-3/5 m-10 mr-0 overflow-scroll pb-6 pr-0 bg-white rounded-2xl border-gray-300 shadow-xl`}>
        <div className="chat-container flex flex-col p-4 ">
          {enquiryDetails?.messages?.map((msg: any, index: any) => (
            <div
              key={index}
              className={`message flex items-center mb-10 ${msg.author === 'User' ? 'justify-start' : 'justify-end'}`}
            >
              {msg.author === 'User' ? (
                <div className="avatar-user flex-shrink-0 mr-3">
                  <div className="w-8 h-8 rounded-full bg-gray-400 text-white flex items-center justify-center">U</div>
                </div>
              ) : null}

              <div
                className={`message-body max-w-[70%] p-3 rounded-lg shadow-md flex items-center space-x-2 ${
                  msg.author === 'User' ? 'bg-gray-200 text-left' : 'bg-green-200 text-right'
                }`}
              >
                <div className="w-full">
                  <p className="text-lg font-medium">
                    {msg.transcript} 
                  </p>
                  <span className="text-gray-600">{msg.translation}</span>
                  <span className="block text-xs text-gray-500 mt-1">{msg.time}</span>
                </div>
                <button
                  onClick={() => playAudio(msg.audio)}
                  className="ml-2 text-gray-500 hover:text-gray-800"
                >
                  <FaVolumeUp size={25} />
                </button>
              </div>

              {msg.author === 'AI Agent' ? (
                <div className="avatar-agent flex-shrink-0 ml-3">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center">D</div>
                </div>
              ) : null}
            </div>
          ))}
          <div
            className={`message flex items-center mb-4 ${
              lastMessageUser === 'User' ? 'justify-end' : 'justify-start'
            }`}
          >
            {enquiryDetails.status === 'ongoing' && (lastMessageUser === 'User' ? (
              <>
                <div className={`${styles['loader']} w-12 h-6 py-8`} />
                <div className="avatar-agent flex-shrink-0 ml-3">
                  <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center">A</div>
                </div>
              </>
            ) : (
              <>
                <div className="avatar-user flex-shrink-0 mr-3">
                  <div className="w-8 h-8 rounded-full bg-gray-400 text-white flex items-center justify-center">U</div>
                </div>
                <div className={`${styles['loader']} w-12 h-6 py-8`} />
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsView;
