import { format } from 'date-fns';

interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: number;
}

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';
  const time = format(new Date(message.timestamp), 'h:mm a');

  return (
    <div 
      className={`flex mb-6 transition-all duration-200 ease-in-out transform hover:scale-[1.01] ${
        isUser ? 'justify-end' : 'justify-start'
      }`}
    >
      <div className={`flex max-w-3xl ${isUser ? 'flex-row-reverse' : ''} gap-3 w-full`}>
        {/* Avatar */}
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          isUser 
            ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300'
            : 'bg-indigo-600 text-white'
        }`}>
          {isUser ? (
            <svg 
              className="w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" 
              />
            </svg>
          ) : (
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2.5} 
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
              />
            </svg>
          )}
        </div>

        {/* Message bubble */}
        <div className={`flex-1 ${isUser ? 'flex justify-end' : ''}`}>
          <div className="flex flex-col">
            <div 
              className={`px-4 py-3 rounded-2xl ${
                isUser
                  ? 'bg-indigo-600 text-white rounded-br-sm'
                  : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-bl-sm shadow-sm'
              }`}
            >
              <div className="whitespace-pre-wrap break-words">{message.content}</div>
            </div>
            <div 
              className={`text-xs mt-1 px-1 text-gray-500 dark:text-gray-400 ${
                isUser ? 'text-right' : 'text-left'
              }`}
            >
              {time}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
