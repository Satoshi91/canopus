"use client";

import { useChat } from "@ai-sdk/react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, status, error } = useChat();

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage({
        parts: [{ type: "text", text: input }],
        role: "user",
      });
      setInput("");
    }
  };

  const isLoading = status === "streaming";

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          className={cn(
            "fixed bottom-6 right-6 z-50",
            "w-14 h-14 rounded-full bg-blue-600 text-white",
            "shadow-lg hover:shadow-xl hover:bg-blue-700",
            "flex items-center justify-center",
            "transition-all duration-200",
            "hover:scale-110 active:scale-95"
          )}
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        side="top"
        sideOffset={12}
        className={cn(
          "w-80 h-[500px] p-0 flex flex-col",
          "bg-white border border-gray-200 shadow-xl"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">
            AIアシスタント
          </h2>
          <button
            onClick={() => setOpen(false)}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
          {messages.length === 0 && (
            <div className="text-center text-gray-500 text-sm mt-8">
              こんにちは！何かお手伝いできることはありますか？
            </div>
          )}
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex",
                message.role === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[80%] rounded-lg px-4 py-2",
                  message.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-900"
                )}
              >
                <div className="text-sm whitespace-pre-wrap break-words">
                  {message.parts
                    .filter((part) => part.type === "text" && "text" in part)
                    .map((part, idx) => (
                      <span key={idx}>
                        {typeof part === "object" && "text" in part
                          ? part.text
                          : ""}
                      </span>
                    ))}
                </div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-100 text-gray-900 rounded-lg px-4 py-2">
                <Loader2 className="w-4 h-4 animate-spin" />
              </div>
            </div>
          )}
          {error && (
            <div className="flex justify-start">
              <div className="bg-red-50 text-red-700 rounded-lg px-4 py-2 text-sm">
                エラーが発生しました。もう一度お試しください。
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4">
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="メッセージを入力..."
              disabled={isLoading}
              className={cn(
                "flex-1 px-4 py-2 rounded-lg border border-gray-300",
                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent",
                "disabled:bg-gray-100 disabled:cursor-not-allowed",
                "text-sm"
              )}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className={cn(
                "px-4 py-2 rounded-lg bg-blue-600 text-white",
                "hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed",
                "transition-colors duration-200",
                "flex items-center justify-center"
              )}
              aria-label="Send message"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
