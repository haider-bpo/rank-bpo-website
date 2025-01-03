import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "./use-toast";

const useEmail = () => {
  const [loading, setLoading] = useState(false);

  const sendEmail = async (templateParams, emailjsTemplateId) => {
    setLoading(true);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        emailjsTemplateId,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      toast({
        type: "success",
        message: "Email sent successfully",
      });
    } catch (error) {
      toast({
        type: "error",
        message: "Failed to send email",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return { sendEmail, loading };
};

export default useEmail;
