import { Navigation } from "@/components/Navigation";
import { motion } from "framer-motion";
import { Play, FileText, Download, Clock } from "lucide-react";

const assets = [
  {
    id: 1,
    type: "video",
    title: "Anti-Money Laundering Basics",
    duration: "2:45",
    description: "A quick primer on the three stages of money laundering: Placement, Layering, and Integration.",
    thumbnail: "bg-gradient-to-br from-purple-900 to-indigo-900"
  },
  {
    id: 2,
    type: "infographic",
    title: "The KYC Checklist",
    duration: "PDF",
    description: "One-page reference guide for front-line staff during customer onboarding.",
    thumbnail: "bg-gradient-to-br from-emerald-900 to-teal-900"
  },
  {
    id: 3,
    type: "video",
    title: "Phishing: Spot the Fake",
    duration: "1:30",
    description: "Interactive video overlay pointing out common indicators of a phishing email.",
    thumbnail: "bg-gradient-to-br from-orange-900 to-red-900"
  },
  {
    id: 4,
    type: "job-aid",
    title: "Escalation Matrix",
    duration: "Interactive PDF",
    description: "Clickable decision tree for reporting suspicious activity to the compliance officer.",
    thumbnail: "bg-gradient-to-br from-blue-900 to-cyan-900"
  }
];

export default function Microlearning() {
  return (
    <div className="min-h-screen bg-background pb-20">
      <Navigation />
      
      <div className="pt-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Microlearning Assets</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            High-impact, bite-sized learning resources designed for performance support at the moment of need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {assets.map((asset, index) => (
            <motion.div
              key={asset.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card overflow-hidden group hover:border-primary/50"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Thumbnail Side */}
                <div className={`w-full md:w-48 h-48 md:h-auto flex-shrink-0 relative ${asset.thumbnail} flex items-center justify-center group-hover:opacity-90 transition-opacity`}>
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform duration-300">
                    {asset.type === 'video' ? (
                      <Play className="w-6 h-6 text-white ml-1" />
                    ) : (
                      <FileText className="w-6 h-6 text-white" />
                    )}
                  </div>
                  
                  {asset.type === 'video' && (
                    <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/60 rounded text-xs text-white font-mono flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {asset.duration}
                    </div>
                  )}
                </div>

                {/* Content Side */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold tracking-wider text-primary uppercase">
                      {asset.type.replace('-', ' ')}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {asset.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {asset.description}
                  </p>

                  <div className="flex items-center gap-3">
                    <button className="flex-1 btn-primary py-2 text-sm flex items-center justify-center gap-2">
                      {asset.type === 'video' ? 'Watch Now' : 'View Document'}
                    </button>
                    <button className="p-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors text-muted-foreground hover:text-white" title="Download Asset">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Placeholder for more content */}
        <div className="mt-20 text-center p-12 rounded-2xl border border-dashed border-white/10 bg-white/5">
          <h3 className="text-xl font-semibold text-white mb-2">More Content Coming Soon</h3>
          <p className="text-muted-foreground">
            I am constantly updating my portfolio with new Storyline modules, Rise courses, and custom development examples.
          </p>
        </div>
      </div>
    </div>
  );
}
