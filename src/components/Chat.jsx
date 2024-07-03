import { useRef } from "react";
import { FaCoffee } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Chat = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_9qoun4u", "template_81sw5yx", form.current, {
        publicKey: "2mgosK3JibVuZv_GQ",
      })
      .then(
        () => {
          // console.log("SUCCESS!");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your email has been sent",
            showConfirmButton: false,
            timer: 1500,
          });
          e.target.reset();
        },
        (error) => {
          // console.log("FAILED...", error.text);
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Your email couldn't send",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
  };

  return (
    <div id="contact" className="container mx-auto mt-10">
      <h2 className="text-3xl font-bold text-center">{"Let's have a chat"}</h2>
      <div className="flex justify-center items-center mt-10 gap-10">
        <div className="text-9xl">
          <FaCoffee />
        </div>
        <p className="bg-black text-white p-2 rounded-xl font-bold">
          {"md.ashikur.upwork@gmail.com"}
        </p>
      </div>
      <div className="hero">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">
              You can directly send me an email from here
            </h1>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form ref={form} onSubmit={sendEmail} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="user_name"
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="user_email"
                  type="email"
                  placeholder="Your email address"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Your message"
                  className="input input-bordered h-24"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Send Email"
                  className="btn hover:scale-105 transition-transform bg-black text-white hover:bg-black"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
