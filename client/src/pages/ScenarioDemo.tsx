import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldAlert, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

type Choice = {
  id: string;
  text: string;
  nextNodeId: string;
  feedback?: string;
  isCorrect?: boolean;
};

type Node = {
  id: string;
  content: string;
  choices: Choice[];
  type?: 'scenario' | 'ending';
};

const scenarioData: Record<string, Node> = {
  start: {
    id: "start",
    content: "You are reviewing a high-value transaction request from a client known as 'Apex Global'. The transfer amount is $450,000 to an account in the Cayman Islands. The authorization signature looks slightly different from the one on file.",
    choices: [
      { 
        id: "c1", 
        text: "Approve the transaction immediately to maintain client satisfaction.", 
        nextNodeId: "fail_speed",
        isCorrect: false
      },
      { 
        id: "c2", 
        text: "Call the client at the number on file to verify the request.", 
        nextNodeId: "success_verify",
        isCorrect: true 
      },
      { 
        id: "c3", 
        text: "Email the client asking for confirmation.", 
        nextNodeId: "fail_email",
        isCorrect: false
      }
    ]
  },
  fail_speed: {
    id: "fail_speed",
    type: "ending",
    content: "You approved a fraudulent transaction! The signature was forged. By rushing to please the client, you bypassed critical security protocols. The bank has lost $450,000.",
    choices: []
  },
  fail_email: {
    id: "fail_email",
    type: "ending",
    content: "The fraudster had compromised the client's email account. They replied confirming the transaction. The money is now gone. Always use an out-of-band communication channel (like a phone call) for verification.",
    choices: []
  },
  success_verify: {
    id: "success_verify",
    type: "ending",
    content: "Great catch! You called the client, and they confirmed they never made this request. You prevented a massive loss and identified a security breach in their email system.",
    choices: []
  }
};

export default function ScenarioDemo() {
  const [currentNodeId, setCurrentNodeId] = useState("start");
  const [history, setHistory] = useState<string[]>([]);

  const currentNode = scenarioData[currentNodeId];

  const handleChoice = (nextNodeId: string) => {
    setHistory([...history, currentNodeId]);
    setCurrentNodeId(nextNodeId);
  };

  const resetScenario = () => {
    setCurrentNodeId("start");
    setHistory([]);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <Navigation />
      
      <div className="pt-32 px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider mb-4 border border-primary/20">
            INTERACTIVE DEMO
          </span>
          <h1 className="text-4xl font-bold mb-4">The Deepfake Deposit</h1>
          <p className="text-muted-foreground text-lg">
            A branching scenario demonstrating decision-making under pressure.
          </p>
        </motion.div>

        <div className="glass-card p-8 md:p-12 min-h-[400px] flex flex-col justify-center relative overflow-hidden">
          {/* Background decorative element */}
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <ShieldAlert className="w-32 h-32 text-white" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentNodeId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mb-8 relative z-10">
                <h3 className="text-xl md:text-2xl font-medium leading-relaxed text-white">
                  {currentNode.content}
                </h3>
              </div>

              <div className="space-y-4 relative z-10">
                {currentNode.choices.length > 0 ? (
                  currentNode.choices.map((choice) => (
                    <button
                      key={choice.id}
                      onClick={() => handleChoice(choice.nextNodeId)}
                      className="w-full text-left p-4 rounded-xl border border-white/10 hover:border-primary/50 hover:bg-white/5 transition-all duration-200 group flex items-center justify-between"
                    >
                      <span className="text-lg text-muted-foreground group-hover:text-white transition-colors">
                        {choice.text}
                      </span>
                      <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10">
                        <span className="text-muted-foreground group-hover:text-primary">→</span>
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <div className={`flex items-center gap-3 mb-6 text-xl font-bold ${currentNodeId.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                      {currentNodeId.includes('success') ? (
                        <CheckCircle2 className="w-8 h-8" />
                      ) : (
                        <XCircle className="w-8 h-8" />
                      )}
                      {currentNodeId.includes('success') ? 'Mission Accomplished' : 'Mission Failed'}
                    </div>
                    
                    <button
                      onClick={resetScenario}
                      className="btn-primary"
                    >
                      Restart Scenario
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <AlertTriangle className="w-8 h-8 text-yellow-400 mb-4" />
            <h4 className="font-bold text-white mb-2">Identify Risks</h4>
            <p className="text-sm text-muted-foreground">Scenarios challenge learners to spot red flags in realistic situations.</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <ShieldAlert className="w-8 h-8 text-cyan-400 mb-4" />
            <h4 className="font-bold text-white mb-2">Apply Policy</h4>
            <p className="text-sm text-muted-foreground">Test knowledge of compliance protocols without real-world consequences.</p>
          </div>
          <div className="p-6 rounded-xl bg-white/5 border border-white/10">
            <CheckCircle2 className="w-8 h-8 text-green-400 mb-4" />
            <h4 className="font-bold text-white mb-2">Instant Feedback</h4>
            <p className="text-sm text-muted-foreground">Immediate consequences reinforce learning and correct behavior patterns.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
