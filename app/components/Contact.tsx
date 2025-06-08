import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, User, MessageSquare } from "lucide-react";
import { TextRevealCard } from "@/components/ui/text-reveal-card";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }

    const phoneNumber = "+917651908979";
    const baseUrl = `https://wa.me/${phoneNumber}?text=`;

    let textMessage = `*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}`;

    const encodedMessage = encodeURIComponent(textMessage);
    window.open(`${baseUrl}${encodedMessage}`, "_blank");
  };

  return (
    <section className="bg-transparent text-white py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <Card className="bg-white/5 backdrop-blur-sm border border-white/5 shadow-2xl rounded-2xl">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              
            <TextRevealCard
              text="You know the business"
              revealText="Get in Touch "
            ></TextRevealCard>
              
            </h2>
            <form onSubmit={sendMessage} className="space-y-4">
              <div className="relative">
                <User
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50"
                  size={20}
                />
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="pl-10 bg-transparent border border-white/20 placeholder-white/50 text-white"
                />
              </div>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50"
                  size={20}
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-transparent border border-white/20 placeholder-white/50 text-white"
                />
              </div>
              <div className="relative">
                <MessageSquare
                  className="absolute left-3 top-4 text-white/50"
                  size={20}
                />
                <Textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="pl-10 pt-4 bg-transparent border border-white/20 placeholder-white/50 text-white min-h-[120px]"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700"
              >
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
