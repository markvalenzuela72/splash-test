"use client";
import { useState, useEffect, useRef } from "react";
import { CornerDownLeft, Mic, Paperclip } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { usePathname } from "next/navigation";
import { fetchCardData } from "@/lib/data";
export default function Chat() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const [fetchData, setFetchedData] = useState([]);
  const chatContainerRef = useRef(null);

  const chatAction = (name, message) => {
    setChat([...chat, { name, message }]);
  };

  const chatCPUAction = (nameIndex, message) => {
    const cpuNames = ["CPU 1", "CPU 2", "CPU 3", "CPU 4"];
    const cpuName = cpuNames[nameIndex];
    setChat([...chat, { name: cpuName, message }]);
  };

  const pathname = usePathname().replace(/\//g, "").split("?")[0];

  useEffect(() => {
    const generateFakeConversation = () => {
      const messages = [
        "Hey there!",
        "How are you doing?",
        "I'm doing well, thanks for asking!",
        "What about you?",
        "I'm good too. Just working on some stuff.",
        "That sounds interesting!",
        "Yes, it's quite challenging but also fun.",
        "I agree. Challenges make us grow.",
        "Absolutely!",
      ];

      let i = 0;
      const intervalId = setInterval(() => {
        if (i < messages.length) {
          const nameIndex = i % 4;
          const message = messages[i];
          chatCPUAction(nameIndex, message);
          i++;
        } else {
          clearInterval(intervalId);
        }
      }, 5000);
    };
    generateFakeConversation();
  }, []);

  useEffect(() => {
    // Scroll to the top of the chat container whenever chat updates
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [chat]);
  return (
    <div className="">
      <div className="h-[150px] p-5 overflow-hidden" ref={chatContainerRef}>
        {chat.map((c, index) => (
          <div key={c++} className="flex items-center space-x-1 text-xs">
            <p>{c.name}: </p>
            <div className="px-2 py-1 rounded-lg bg-gray-100 dark:bg-gray-800">
              <p className="text-xs">{c.message}</p>
            </div>
          </div>
        ))}
      </div>
      <div
        className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
        x-chunk="dashboard-03-chunk-1"
      >
        <Label htmlFor="message" className="sr-only">
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Type your message here..."
          className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
          onChange={(e) => setMessage(e.target?.value)}
        />
        <div className="flex items-center p-3 pt-0">
          <Button
            type="submit"
            size="sm"
            className="ml-auto gap-1.5"
            onClick={() => chatAction("Mark", message)}
          >
            Send Message
            <CornerDownLeft className="size-3.5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
