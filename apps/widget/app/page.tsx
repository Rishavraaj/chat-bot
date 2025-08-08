"use client";

import { useVapi } from "@/modules/hooks/use-vapi";
import { Button } from "@workspace/ui/components/button";
export default function Page() {
  const {
    isConnected,
    isConnecting,
    isSpeaking,
    transcript,
    startCall,
    stopCall,
  } = useVapi();
  return (
    <div className="flex items-center justify-center min-h-svh flex-col gap-4">
      <Button onClick={startCall} disabled={isConnected || isConnecting}>
        Start Call
      </Button>
      <Button onClick={stopCall} disabled={!isConnected || isConnecting}>
        Stop Call
      </Button>
      <p>isConnected: {`${isConnected}`}</p>
      <p>isConnecting: {`${isConnecting}`}</p>
      <p>isSpeaking: {`${isSpeaking}`}</p>
      <pre>{JSON.stringify(transcript, null, 2)}</pre>
    </div>
  );
}
