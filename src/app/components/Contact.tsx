import { useState } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  UserIcon,
  AtSymbolIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

interface ContactProps {
  darkMode: boolean;
}

// Ambil Access Key dari environment variable
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "";

export default function Contact({ darkMode }: ContactProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    // Reset status message when user starts typing again
    setSubmitStatus("idle");
    setStatusMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    // Validasi sederhana sebelum mengirim
    if (!formState.name || !formState.email || !formState.message) {
      setSubmitStatus("error");
      setStatusMessage("Please fill in all fields.");
      return;
    }

    // Validasi Access Key
    if (!WEB3FORMS_ACCESS_KEY) {
      setSubmitStatus("error");
      setStatusMessage(
        "Form not configured. Please check environment variables."
      );
      console.error("WEB3FORMS_ACCESS_KEY is not set!");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setStatusMessage("");

    // Siapkan data yang akan dikirim ke Web3Forms
    // Access Key harus disertakan dalam data
    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("name", formState.name);
    formData.append("email", formState.email);
    formData.append("message", formState.message);

    // Opsional: Redirect URL setelah sukses (lihat dokumentasi Web3Forms)
    // formData.append("redirect", "https://yourwebsite.com/thank-you");

    try {
      // Kirim data ke endpoint Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        // Web3Forms menerima FormData atau JSON, FormData lebih umum untuk form POST
        // headers: {
        //   'Content-Type': 'application/json', // Uncomment if sending JSON
        // },
        body: formData, // Use formData for standard form submission
        // body: JSON.stringify({...formState, access_key: WEB3FORMS_ACCESS_KEY}), // Use this if sending JSON
      });

      const data = await response.json(); // Web3Forms selalu mengembalikan JSON

      // Cek respon dari Web3Forms
      if (data.success) {
        setSubmitStatus("success");
        setStatusMessage(data.message || "Message sent successfully!");
        setFormState({ name: "", email: "", message: "" }); // Clear the form on success
      } else {
        setSubmitStatus("error");
        setStatusMessage(data.message || "Failed to send message.");
        console.error("Web3Forms Error:", data.message); // Log the actual error
      }
    } catch (error) {
      // Handle network errors or other exceptions
      setSubmitStatus("error");
      setStatusMessage("An unexpected error occurred.");
      console.error("Fetch error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className={`py-20 ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
      }`}
    >
      <div className="container mx-auto px-6">
        <h2 className="section-title flex items-center justify-center group">
          <ChatBubbleLeftRightIcon className="h-8 w-8 mr-2 text-indigo-600 transition-transform duration-300 group-hover:scale-110" />
          Get In Touch
        </h2>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information - (No changes needed here) */}
            <div className="transform transition-all duration-500 hover:translate-y-[-10px]">
              <h3
                className={`text-xl font-bold mb-4 ${
                  darkMode ? "text-indigo-400" : "text-indigo-600"
                } flex items-center`}
              >
                <UserIcon className="h-6 w-6 mr-2" />
                Contact Information
              </h3>
              <p className="mb-4">
                Feel free to reach out through any of the following channels:
              </p>
              <ul className="space-y-6">
                <li className="flex items-center group transition-all duration-300 hover:translate-x-2">
                  <div
                    className={`mr-4 ${
                      darkMode ? "bg-indigo-900" : "bg-indigo-100"
                    } p-3 rounded-full transition-all duration-300 group-hover:scale-110`}
                  >
                    <EnvelopeIcon
                      className={`h-6 w-6 ${
                        darkMode ? "text-indigo-400" : "text-indigo-600"
                      }`}
                    />
                  </div>
                  <a
                    href="mailto:syaidxandhika@gmail.com"
                    className={`hover:underline transition-colors duration-300 ${
                      darkMode
                        ? "hover:text-indigo-400"
                        : "hover:text-indigo-600"
                    }`}
                  >
                    syaidxandhika@gmail.com
                  </a>
                </li>
                <li className="flex items-center group transition-all duration-300 hover:translate-x-2">
                  <div
                    className={`mr-4 ${
                      darkMode ? "bg-indigo-900" : "bg-indigo-100"
                    } p-3 rounded-full transition-all duration-300 group-hover:scale-110`}
                  >
                    <PhoneIcon
                      className={`h-6 w-6 ${
                        darkMode ? "text-indigo-400" : "text-indigo-600"
                      }`}
                    />
                  </div>
                  <span>+62 896 0776 5169</span>
                </li>
                <li className="flex items-center group transition-all duration-300 hover:translate-x-2">
                  <div
                    className={`mr-4 ${
                      darkMode ? "bg-indigo-900" : "bg-indigo-100"
                    } p-3 rounded-full transition-all duration-300 group-hover:scale-110`}
                  >
                    <MapPinIcon
                      className={`h-6 w-6 ${
                        darkMode ? "text-indigo-400" : "text-indigo-600"
                      }`}
                    />
                  </div>
                  <span>Yogyakarta, Indonesia</span>
                </li>
              </ul>

              {/* Social Media Links - (No changes needed here) */}
              <div className="mt-8">
                <h4
                  className={`text-lg font-semibold mb-4 ${
                    darkMode ? "text-indigo-400" : "text-indigo-600"
                  }`}
                >
                  Connect on Social Media
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/syaid-andhika-24831b2bb/"
                    className={`${
                      darkMode
                        ? "bg-gray-700 hover:bg-gray-600"
                        : "bg-indigo-100 hover:bg-indigo-200"
                    } p-3 rounded-full transition-all duration-300 hover:scale-110`}
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className={`h-6 w-6 ${
                        darkMode ? "text-indigo-400" : "text-indigo-600"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/l0c4lxid"
                    className={`${
                      darkMode
                        ? "bg-gray-700 hover:bg-gray-600"
                        : "bg-indigo-100 hover:bg-indigo-200"
                    } p-3 rounded-full transition-all duration-300 hover:scale-110`}
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className={`h-6 w-6 ${
                        darkMode ? "text-indigo-400" : "text-indigo-600"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                      />
                    </svg>
                  </a>
                  {/* Remove Twitter link or update href */}
                  {/*
                  <a
                    href="#" // Update this href to your Twitter profile
                    className={`${
                      darkMode
                        ? "bg-gray-700 hover:bg-gray-600"
                        : "bg-indigo-100 hover:bg-indigo-200"
                    } p-3 rounded-full transition-all duration-300 hover:scale-110`}
                    aria-label="Twitter"
                   >
                    <svg ... >...</svg>
                   </a>
                   */}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`${
                darkMode ? "bg-gray-700" : "bg-white"
              } p-6 rounded-lg shadow-lg transition-all duration-500 hover:shadow-xl transform hover:scale-[1.02]`}
            >
              <h3
                className={`text-xl font-bold mb-4 ${
                  darkMode ? "text-indigo-400" : "text-indigo-600"
                } flex items-center`}
              >
                <PaperAirplaneIcon className="h-6 w-6 mr-2 transform rotate-90" />
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit}>
                {/* Input fields remain the same */}
                <div className="mb-4 relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <UserIcon
                      className={`h-5 w-5 ${
                        darkMode ? "text-gray-500" : "text-gray-400"
                      } group-focus-within:text-indigo-500 transition-colors duration-200`}
                    />
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className={`w-full p-3 pl-10 rounded border ${
                      darkMode
                        ? "bg-gray-600 border-gray-500 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-gray-800"
                    } focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300`}
                    required
                  />
                </div>
                <div className="mb-4 relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <AtSymbolIcon
                      className={`h-5 w-5 ${
                        darkMode ? "text-gray-500" : "text-gray-400"
                      } group-focus-within:text-indigo-500 transition-colors duration-200`}
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className={`w-full p-3 pl-10 rounded border ${
                      darkMode
                        ? "bg-gray-600 border-gray-500 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-gray-800"
                    } focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300`}
                    required
                  />
                </div>
                <div className="mb-4 relative group">
                  <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                    <ChatBubbleLeftRightIcon // Using ChatBubble for textarea icon
                      className={`h-5 w-5 ${
                        darkMode ? "text-gray-500" : "text-gray-400"
                      } group-focus-within:text-indigo-500 transition-colors duration-200`}
                    />
                  </div>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className={`w-full p-3 pl-10 rounded border ${
                      darkMode
                        ? "bg-gray-600 border-gray-500 text-white placeholder-gray-400"
                        : "bg-white border-gray-300 text-gray-800"
                    } focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32 transition-all duration-300`}
                    required
                  ></textarea>
                </div>

                {/* Display submission status message */}
                {submitStatus !== "idle" && (
                  <p
                    className={`mb-4 text-center ${
                      submitStatus === "success"
                        ? "text-green-600"
                        : "text-red-600"
                    } ${
                      darkMode && submitStatus === "success"
                        ? "text-green-400"
                        : ""
                    } ${
                      darkMode && submitStatus === "error" ? "text-red-400" : ""
                    }`}
                  >
                    {statusMessage}
                  </p>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  className={`btn-primary w-full flex items-center justify-center transition-all duration-300 ${
                    isSubmitting
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:scale-[1.02]"
                  }`}
                  disabled={isSubmitting || !WEB3FORMS_ACCESS_KEY} // Disable if submitting or key is missing
                >
                  {isSubmitting ? (
                    <svg
                      className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    <PaperAirplaneIcon className="h-5 w-5 mr-2 transform rotate-90" />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                {!WEB3FORMS_ACCESS_KEY && (
                  <p className="text-center text-red-500 text-sm mt-2">
                    Form is not configured. Please set
                    NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
