import {useEffect, useRef, useState} from "react";
import {map} from "ramda";
import {Notifications} from "./etc/style";

const SlowConnectionWarning = ({
  threshold = 2000,
  loading,
}: {
  threshold?: number;
  loading: boolean;
}) => {
  const slowTimeout = useRef<NodeJS.Timeout | undefined>(undefined);
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    if (loading) {
      slowTimeout.current = setTimeout(() => {
        setMessages(["Working on it..."]);

        slowTimeout.current = setTimeout(() => {
          setMessages((otherMessages) => [
            ...otherMessages,
            "You might want to refresh the page...",
          ]);

          slowTimeout.current = setTimeout(() => {
            setMessages((otherMessages) => [
              ...otherMessages,
              "This is taking waaaaaay too long!",
            ]);
          }, threshold);
        }, threshold);
      }, threshold);
    } else {
      clearTimeout(slowTimeout.current);
      setMessages([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  if (!messages.length) {
    return null;
  }

  return (
    <Notifications>
      {map(
        (message) => (
          <span key={message}>{message}</span>
        ),
        messages
      )}
    </Notifications>
  );
};

export default SlowConnectionWarning;
