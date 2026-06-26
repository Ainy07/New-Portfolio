import { useState } from "react";
import { sendContactForm } from "../services/api";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus(null);
    try {
      await sendContactForm(formData);
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-accent transition-all";

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-xl mx-auto text-center mb-10">
        <p className="text-accent font-medium mb-2 tracking-wide">Let's connect</p>
        <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
      </div>

      <div className="max-w-xl mx-auto glass-card rounded-2xl p-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-center text-sm">
          <div>
            <p className="text-gray-500">Phone</p>
            <p className="font-medium text-gray-100">+91 7566248929</p>
          </div>
          <div>
            <p className="text-gray-500">Email</p>
            <p className="font-medium text-gray-100 break-all">ainygupta00@gmail.com</p>
          </div>
          <div>
            <p className="text-gray-500">Location</p>
            <p className="font-medium text-gray-100">Satna, India</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClass}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClass}
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={inputClass}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="5"
            className={inputClass}
          ></textarea>
          <button
            type="submit"
            disabled={sending}
            className="w-full accent-gradient text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 disabled:opacity-50"
          >
            {sending ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-sm text-center">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm text-center">Something went wrong. Try again.</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;