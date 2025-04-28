import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
import { motion } from "motion/react";

export const Contact = () => {
  const formSchema = z.object({
    subject: z.string().min(1, { message: "Please, enter a subject." }),
    email: z.string().email({ message: "Please, insert a valid email." }),
    message: z
      .string()
      .min(1, { message: "Please, enter a message." })
      .max(500),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: "",
      email: "",
      message: "",
    },
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = form;

  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <section className="h-screen w-full bg-[#050505] px-[40px] py-[86px] flex flex-col items-center justify-center overflow-y-auto">
      <div className="flex flex-col gap-4 max-w-[1000px] w-full">
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit(sendEmail)}
          className="p-12 rounded-[20px] w-full bg-[#1F1F1F] flex flex-col gap-4 shadow-[0_0_50px_0px_#FF333340]"
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-[24px] font-bold text-[#FFF] mb-4">
            Get in touch
          </h2>
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
              <p className="text-red-500 text-xs italic">
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
              <p className="text-red-500 text-xs italic">
                {errors.email?.message}
              </p>
            )}
          </div>

          <div className="">
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
              className={`shadow appearance-none border rounded w-full h-full py-2 px-3 text-[#FFF] leading-tight focus:outline-1 outline-[#7a7a7a] focus:shadow-outline border-[#333] bg-[#333] resize-none ${
                errors.message ? "border-red-500" : ""
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-xs italic">
                {errors.message?.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-red-500 hover:bg-red-950 text-white font-bold py-2 px-4 rounded focus:outline-1 outline-[#7a7a7a] focus:shadow-outline disabled:opacity-50 mt-12 cursor-pointer"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Email"}
          </button>
        </motion.form>
      </div>
    </section>
  );
};
