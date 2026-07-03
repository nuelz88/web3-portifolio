'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, Shield, CheckCircle, MessageSquare, Award, 
  Terminal, Users, Zap, Sparkles, Maximize2, X, Filter 
} from 'lucide-react';

const proofAssets = [
  { file: 'x-growth.jpg', title: 'X Analytics Metrics Tracker', type: 'growth', text: 'Live impression growth curves and engagement data points mapping multi-layer viral social outreach loops.' },
  { file: 'announcement.jpg', title: 'Broadcast Announcement Layout', type: 'host', text: 'Verified formatting patterns deployed for announcement deliveries across nested server architectures.' },
  { file: 'game-announcement.jpg', title: 'Gaming Meta Event Broadcast', type: 'host', text: 'Event management tracking log showcasing community notification dispatch configurations for active community tournaments.' },
  { file: 'game-announce.jpg', title: 'Live Tournament Feed Anchor', type: 'host', text: 'Automation configurations pushing instant tournament updates into public chats to spike peak concurrent user numbers.' },
  { file: 'community-announcement5.jpg', title: 'Community Event Hosting', type: 'host', text: 'Organised and hosted interactive community events that encouraged participation, strengthened engagement, and created an enjoyable experience for community members.' },
  { file: "community-announcement4.jpg",  title: "Community Event Announcements",  type: "host", text: "Created and shared announcements to keep members informed about upcoming events, updates, and important community activities." },
  { file: 'community-conversation.jpg', title: 'Discord Community Management', type: 'host', text: 'Coordinated live community activities and kept members informed with timely updates throughout each event.' },
  { file: 'community-announcement3.jpg', title: 'Alternative Server Telemetry Node', type: 'host', text: 'Secondary infrastructure instance records showcasing memory optimization parameters for background tasks.' },
  { file: 'community-announcement2.jpg', title: 'Primary Host System Active Logs', type: 'host', text: 'Live verification metrics tracking response parameters during intensive concurrent user sessions.' },
  { file: 'discord-game-host.jpg', title: 'Integrated Game Feed Hub', type: 'host', text: 'Backend hook infrastructure linking continuous event states into targeted client discord layouts.' },
  { file: 'community-conversation.jpg', title: 'Moderator Chat', type: 'chat', text: 'Collaborated with fellow moderators to resolve issues, coordinate tasks, and maintain a safe and organized community.' },
  { file: 'team-membership.jpg', title: 'Staff Roster Hierarchy Layout', type: 'chat', text: 'Operational layout structuring staff authority metrics, clear moderation shifts, and task routing fields.' },
  { file: 'sentries-sol-logo.jpg', title: 'Sentries SOL Community Architecture', type: 'logo', text: 'Past Project Branding Node: Engineered secure server layouts completely from scratch, scaling organic onboarding pathways.' },
  { file: 'solcrocs-by-argus-logo.jpg', title: 'SolCrocs Project', type: 'logo', text: 'Supported the SolCrocs community through moderation, member assistance, and ongoing engagement initiatives.' },
  { file: 'solcrocs-mod-proof.jpg', title: 'SolCrocs Token Volume Management', type: 'proof', text: 'Live channel sentiment tracking records managed securely during high-velocity trading spikes and volume meta shifts.' },
  { file: 'alora-mod-proof.jpg', title: 'Alora NFT Moderation Metrics', type: 'proof', text: 'Live verification tracking logs documenting automated rule configurations and spam containment workflows executed during active mint surges.' },
  { file: 'alora-nft-logo.jpg', title: 'Alora NFT Project Ecosystem', type: 'logo', text: 'Past Project Branding Node: Designed comprehensive server channel architectures and implemented role-gating filters.' },
  { file: 'dungeons-and-degen-mod-proof.jpg', title: 'Dungeons & Degens Timezone Defense', type: 'proof', text: 'Verified moderator rotation rosters mapping consistent 24-hour channel monitoring schedules to secure international chat pools.' },
  { file: 'dungeous-and-degens-logo.gif', title: 'Dungeons & Degens Core Architecture', type: 'logo', text: 'Past Project Branding Node: Structured backend automation workflows, custom event configurations, and server layouts.' },
  { file: 'fwd-mod-proof.jpg', title: 'FWD Volya Tactical Campaign Activity', type: 'proof', text: 'Operational tracking charts detailing cross-community joint activations and fast membership onboarding funnels.' },
  { file: 'fwd-volya-logo.avif', title: 'FWD Volya Operations Hub', type: 'logo', text: 'Past Project Branding Node: Formulated community strategy documentation and oversaw multi-language sub-community leads.' },
  { file: 'kayac-multimedia-logo.png', title: 'Kayac Multimedia Conversion Flow', type: 'logo', text: 'Past Project Branding Node: Designed interactive digital hooks connecting social media streams directly to server entry channels.' },
  { file: 'mod-chat-proof.jpg', title: 'Chat Engagement & Activity Audit', type: 'proof', text: 'Verified internal chat density records showcasing continuous engagement built via daily prompts and event structures.' },
  { file: 'mod-ticket-proof.jpg', title: 'Support Pipeline Ticket Resolution', type: 'proof', text: 'Performance statistics logging help desk optimization parameters that dropped technical support resolution times to under 5 minutes.' },
  { file: 'my-pfp.png', title: 'KhiNG Personal Brand Anchor', type: 'logo', text: 'Verified Personal Profile Anchor: Deployed across active operation networks to maintain professional identity coherence.' },
  { file: 'nailong-sol-logo.jpg', title: 'Nailong SOL Launch Tracking', type: 'logo', text: 'Past Project Branding Node: Supervised community communications and channel security parameters throughout token rollout phases.' },
  { file: 'payment.jpeg', title: 'Payment Confirmation', type: 'proof', text: 'Confirmation of successful payment received for completed community management and moderation services.' },
  { file: 'praise2-proof.jpeg', title: 'Client Feedback', type: 'praise', text: 'Positive feedback from a client recognizing professionalism, reliability, and consistent support throughout the project.' },
  { file: 'praise-proof.jpeg', title: 'Client Testimonial', type: 'praise', text: 'Recommendation highlighting the value of my work, communication skills, and contributions to the project success.' },
  { file: 'proud-cats-mod-proof.jpg', title: 'Proud Cats Moderation Infrastructure', type: 'proof', text: 'Operational screenshot proving holder space retention strategies and community moderation workflows applied post-mint.' },
  { file: 'founder-recognition.jpg', title: 'Founder Recommendation', type: 'proof', text: 'Recognition from a project founder acknowledging my dedication, professionalism, and impact on community growth.' },
  { file: 'Screenshot_20241225_211943.jpg', title: 'Organic User Intake Evidence', type: 'praise', text: 'Direct user feedback logging active engagement motivation spikes derived directly from organic network reach.' },
  { file: 'x-growth (2).jpg', title: 'Twitter Growth Analytics', type: 'growth', text: 'Analytics showing audience growth, impressions, and engagement achieved through consistent social media management.' },
  { file: 'founder-recognition.jpg', title: 'Founder Recognition', type: 'praise', text: 'Recognition from the project founder highlighting professionalism, reliability, and contributions to community growth.'},
  { file: 'team-appreciation.jpg', title: 'Team Appreciation', type: 'praise', text: 'Feedback from teammates acknowledging consistent moderation, collaboration, and operational support.'},
  { file: 'team-appreciation-message.jpg', title: 'Community Appreciation', type: 'praise', text: 'Positive feedback from the project team recognizing dedication, responsiveness, and member support.'},
  { file: 'team-recognition.jpeg', title: 'Team Recognition', type: 'praise', text: 'Recognition from project leadership for maintaining community standards and delivering reliable support.'},
];

const CATEGORIES = [
  { id: 'all', label: 'All Assets' },
  { id: 'proof', label: 'Proofs' },
  { id: 'logo', label: 'Projects' },
  { id: 'host', label: 'Hostings' },
  { id: 'growth', label: 'Analytics' },
  { id: 'chat', label: "Moderation"},
  { id: 'praise', label: 'Recommendations' }
];

export default function ProofsPage() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  const filteredAssets = proofAssets.filter((asset) => {
    const matchesCategory =
      activeFilter === "all" || asset.type === activeFilter;

    const matchesSearch =
      asset.title.toLowerCase().includes(search.toLowerCase()) ||
      asset.text.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const stats = [
    {
      icon: Shield,
      value: proofAssets.filter((a) => a.type === "proof").length,
      label: "Verified Proofs",
      color: "text-emerald-400",
    },
    {
      icon: Award,
      value: proofAssets.filter((a) => a.type === "praise").length,
      label: "Client Testimonials",
      color: "text-yellow-400",
    },
    {
      icon: Users,
      value: "200+",
      label: "Supported Lauched Projects",
      color: "text-cyan-400",
    },
    {
      icon: Zap,
      value: proofAssets.length,
      label: "Portifolio Assets",
      color: "text-purple-400",
    },
    {
    icon: MessageSquare,
    value: "50+",
    label: "Community Events Attended",
    color: "text-purple-400",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-purple-500 selection:text-white relative overflow-x-hidden">

      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-purple-500/15 via-indigo-500/10 to-transparent blur-3xl" />
      </div>

      <main className="max-w-7xl mx-auto px-6 pt-16 pb-24">

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-purple-400 transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Dashboard
        </Link>

        <section className="mb-16">

          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-xs uppercase tracking-widest text-purple-300 font-semibold mb-5">

            <Sparkles className="w-4 h-4" />

            Verified Web3 Portfolio

          </span>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none">

            Experience
            <br />

            <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              & Proof of Work
            </span>

          </h1>

          <p className="mt-8 max-w-3xl text-slate-400 leading-relaxed text-lg">

           A collection of real projects, moderation records, community management achievements,
            client testimonials, analytics, event hosting, and verified proof of work from my
            experience across multiple Web3 communities.

          </p>

        </section>

        <section className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-16">

          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-xl p-6 hover:border-purple-500/40 transition-all"
              >

                <div className="flex items-center justify-between mb-5">

                  <div
                    className={`w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center ${item.color}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <Terminal className="w-5 h-5 text-slate-600" />

                </div>

                <h3 className="text-3xl font-black mb-1">
                  {item.value}
                </h3>

                <p className="text-sm text-slate-400">
                  {item.label}
                </p>

              </div>
            );
          })}

        </section>

        <section className="mb-12 space-y-6">

          <div className="relative">

            <input
              type="text"
              placeholder="Search projects, proofs, recommendations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl bg-slate-900 border border-slate-800 px-5 py-4 text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
            />

          </div>

          <div className="flex flex-wrap gap-3">

            {CATEGORIES.map((category) => (

              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-5 py-2.5 rounded-full transition-all font-medium text-sm flex items-center gap-2

                ${
                  activeFilter === category.id
                    ? "bg-purple-600 text-white"
                    : "bg-slate-900 border border-slate-800 text-slate-400 hover:border-purple-500/40 hover:text-purple-300"
                }
                `}
              >

                <Filter className="w-4 h-4" />

                {category.label}

              </button>

            ))}

          </div>

        </section>

        {/* Gallery starts here */}
        <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {filteredAssets.map((asset, index) => (

            <div
              key={`${asset.file}-${index}`}
              className="group rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/40 backdrop-blur-xl hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-2"
            >

              <div
                className="relative aspect-video cursor-pointer overflow-hidden"
                onClick={() => setLightboxImg(asset.file)}
              >

                <Image
                  src={`/images/${asset.file}`}
                  alt={asset.title}
                  fill
                  sizes="(max-width:768px)100vw,(max-width:1280px)50vw,33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />

                <div className="absolute top-4 left-4">

                  <span
                    className={`
                      px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md border

                      ${
                        asset.type === "proof"
                          ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/30"
                          : asset.type === "logo"
                          ? "bg-cyan-500/15 text-cyan-300 border-cyan-500/30"
                          : asset.type === "growth"
                          ? "bg-purple-500/15 text-purple-300 border-purple-500/30"
                          : asset.type === "host"
                          ? "bg-orange-500/15 text-orange-300 border-orange-500/30"
                          : asset.type === "praise"
                          ? "bg-yellow-500/15 text-yellow-300 border-yellow-500/30"
                          : "bg-slate-700/40 text-slate-300 border-slate-600"
                      }
                    `}
                  >

                    {asset.type.toUpperCase()}

                  </span>

                </div>

                <div className="absolute bottom-4 right-4">

                  <div className="w-11 h-11 rounded-xl bg-slate-950/80 backdrop-blur-md flex items-center justify-center border border-slate-700 group-hover:border-purple-500 transition-colors">

                    <Maximize2 className="w-5 h-5 text-white" />

                  </div>

                </div>

              </div>

              <div className="p-6 space-y-4">

                <h3 className="text-xl font-bold leading-tight text-white group-hover:text-purple-300 transition-colors">

                  {asset.title}

                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">

                  {asset.text}

                </p>

                <div className="flex items-center justify-between pt-2">

                  <span className="inline-flex items-center gap-2 text-xs text-slate-500">

                    <Shield className="w-4 h-4 text-emerald-400" />

                    Verified Portfolio Asset

                  </span>

                  <button
                    onClick={() => setLightboxImg(asset.file)}
                    className="inline-flex items-center gap-2 text-sm text-purple-300 hover:text-white transition-colors"
                  >

                    View

                    <Maximize2 className="w-4 h-4" />

                  </button>

                </div>

              </div>

            </div>

          ))}

        </section>

        <section className="mt-24">

          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900/60 to-slate-950/80 p-10 text-center">

            <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-6">

              <Award className="w-8 h-8 text-purple-400" />

            </div>

            <h2 className="text-3xl font-black text-white mb-5">

              Every Asset Represents Real Work

            </h2>

            <p className="max-w-3xl mx-auto text-slate-400 leading-relaxed text-lg">

              These screenshots document community moderation, Discord administration,
              campaign execution, event hosting, analytics tracking, client
              recommendations and project contributions delivered across multiple
              Web3 ecosystems. Every image shown here is authentic evidence from
              live projects and reflects practical experience gained while
              supporting growing communities.

            </p>

          </div>

        </section>

        {lightboxImg && (

          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-6"
            onClick={() => setLightboxImg(null)}
          >

            <button
              className="absolute top-8 right-8 w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center hover:border-purple-500 transition-colors"
              onClick={() => setLightboxImg(null)}
            >

              <X className="w-6 h-6 text-white" />

            </button>

            <div
              className="relative w-full max-w-6xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >

              <Image
                src={`/images/${lightboxImg}`}
                alt="Proof Asset"
                fill
                className="object-contain rounded-2xl"
                sizes="100vw"
              />

            </div>

          </div>

        )}
                <section className="mt-24">

          <div className="rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-950/30 via-slate-900/80 to-slate-950 p-10 md:p-14 text-center">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Available for Web3 Opportunities
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Let's Build Your Community
            </h2>

            <p className="max-w-3xl mx-auto text-slate-400 text-lg leading-relaxed mb-10">
              Whether you need an experienced Discord moderator, community
              manager, event host, support specialist, or someone to build and
              scale your Web3 community from the ground up, I'm ready to help
              your project grow.
            </p>

            <div className="flex flex-wrap justify-center gap-4">

              <a
                href="https://t.me/iam0xKhiNG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-cyan-500 text-slate-950 font-semibold hover:bg-cyan-400 transition-all hover:scale-105"
              >
                <MessageSquare className="w-5 h-5" />
                Contact on Telegram
              </a>

              <Link
                href="/"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-300 font-semibold hover:bg-purple-500/20 hover:text-white transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Dashboard
              </Link>

            </div>

          </div>

        </section>

        <footer className="mt-20 border-t border-slate-800 pt-8">

          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            <div>

              <h3 className="text-xl font-bold text-white">
                KhiNG
              </h3>

              <p className="text-slate-500 mt-2">
                Web3 Community Specialist • Discord Moderator • Community Builder
              </p>

            </div>

            <div className="flex items-center gap-6 text-sm text-slate-500">

              <span>
                {proofAssets.length} Portfolio Assets
              </span>

              <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />

              <span>
                Verified Experience
              </span>

            </div>

          </div>

        </footer>

      </main>

    </div>

  );
}
