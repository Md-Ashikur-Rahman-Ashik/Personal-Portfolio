import { FaCoffee } from "react-icons/fa";

const Chat = () => {
  return (
    <div className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center">{"Let's have a chat"}</h2>
      <div className="flex justify-center items-center mt-10 gap-10">
        <div className="text-9xl">
          <FaCoffee />
        </div>
        <p className="bg-black text-white p-2 rounded-xl font-bold">
          {"md.ashikur.upwork@gmail.com"}
        </p>
      </div>
    </div>
  );
};

export default Chat;
