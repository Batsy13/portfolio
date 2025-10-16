import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID
  const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY

  console.log(serviceID, templateID, publicKey)

  const formSchema = z.object({
    name: z.string().min(1, { message: "Please, enter your name." }),
    subject: z.string().min(1, { message: "Please, enter a subject." }),
    email: z.string().email({ message: "Please, insert a valid email." }),
    message: z
      .string()
      .min(1, { message: "Please, enter a message." })
      .max(500),
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject: "",
      email: "",
      message: "",
    },
  });

  const sendEmail = async (data: z.infer<typeof formSchema>) => {
    setIsSuccess(false);
    setErrorMessage("");

    const templateParams = {
      name: data.name,
      subject: data.subject,
      email: data.email,
      message: data.message,
    };

    try {
      await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error("FAILED...", error);
      setErrorMessage("Failed to send email. Please try again later.");
    }
  };

  return (
    <section className="h-screen w-full bg-[#050505] px-7 sm:px-10 pb-20 pt-6 sm:pt-20 flex flex-col items-center justify-center overflow-y-auto">
      <div className="flex flex-col gap-4 max-w-[1000px] w-full">
        <motion.form
          onSubmit={handleSubmit(sendEmail)}
          className="p-6 sm:p-12 rounded-[20px] w-full bg-[#1F1F1F] flex flex-col gap-4 shadow-[0_0_50px_0px_#FF333340]"
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-[24px] font-bold text-[#FFF] mb-4">
            Get in touch
          </h2>
          <div>
            <label
              htmlFor="name"
              className="block text-[#FFF] text-sm font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              {...register("name")}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-[#FFF] leading-tight focus:outline-1 outline-[#7a7a7a] focus:shadow-outline border-[#333] bg-[#333] ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-xs italic text-red-500 mt-1">
                {errors.name.message}
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-[#FFF] text-sm font-bold mb-2"
            >
              Subject:
            </label>
            <input
              type="text"
              id="subject"
              placeholder="We need to talk"
              {...register("subject")}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-[#FFF] leading-tight focus:outline-1 outline-[#7a7a7a] focus:shadow-outline border-[#333] bg-[#333] ${
                errors.subject ? "border-red-500" : ""
              }`}
            />
            {errors.subject && (
              <p className="text-xs italic text-red-500 mt-1">
                {errors.subject.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-[#FFF] text-sm font-bold mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="email@email.com"
              {...register("email")}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-[#FFF] leading-tight focus:outline-1 outline-[#7a7a7a] focus:shadow-outline border-[#333] bg-[#333] ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-xs italic text-red-500 mt-1">
                {errors.email?.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="message"
              className="text-[#FFF] text-sm font-bold mb-2"
            >
              Message:
            </label>
            <textarea
              id="message"
              maxLength={500}
              placeholder="Enter your message"
              {...register("message")}
              className={`shadow appearance-none border rounded w-full h-24 py-2 px-3 text-[#FFF] leading-tight focus:outline-1 outline-[#7a7a7a] focus:shadow-outline border-[#333] bg-[#333] resize-none ${
                errors.message ? "border-red-500" : ""
              }`}
            />
            {errors.message && (
              <p className="text-xs italic text-red-500 mt-1">
                {errors.message?.message}
              </p>
            )}
          </div>

          {isSuccess && (
            <p className="text-green-500 text-sm font-bold text-center">
              Email sent successfully!
            </p>
          )}
          {errorMessage && (
            <p className="text-red-500 text-sm font-bold text-center">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            className="bg-red-500 hover:bg-red-950 text-white font-bold py-2 px-4 rounded focus:outline-1 outline-[#7a7a7a] focus:shadow-outline disabled:opacity-50 mt-8 cursor-pointer transition-colors duration-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Email"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};
