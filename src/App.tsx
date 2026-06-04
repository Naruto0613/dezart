import { useState, useEffect, useRef, MouseEvent, TouchEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import {
  ChevronLeft,
  ChevronRight,
  Wind,
  Droplets,
  Trees,
  ThermometerSun,
  AlertTriangle,
  Globe,
  Leaf,
  ArrowRightLeft,
  Quote,
  Truck,
  Megaphone,
  Users,
  Plus,
  Lamp,
  Sprout,
  Smile,
  ShoppingBag,
  Wine,
  Package,
  Key,
  Heart,
  ChevronDown,
  Award,
  ShieldCheck,
  BookOpen,
  Landmark,
  Star,
  Trophy,
  ListChecks,
  Handshake,
  Ticket,
  Gavel,
  Sparkles,
  RefreshCw,
  Video,
  FileText,
  ArrowRight,
  Monitor,
  Layout,
  MousePointer2,
  Compass,
  Volume2,
  VolumeX,
  Menu,
  X,
} from "lucide-react";

// --- Types ---
interface SlideProps {
  isActive: boolean;
}

// --- Components ---

const SandParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-orange-200/20 rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            scale: Math.random() * 0.5 + 0.2,
            opacity: Math.random() * 0.5,
          }}
          animate={{
            x: ["-10%", "110%"],
            y: ["0%", (Math.random() - 0.5) * 100 + "%"],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: -Math.random() * 20,
          }}
          style={{ width: "4px", height: "4px" }}
        />
      ))}
    </div>
  );
};

const TitleSlide = ({ isActive }: SlideProps) => (
  <div className="h-full w-full relative overflow-hidden flex flex-col justify-center">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 grayscale contrast-125 pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F05] via-transparent to-transparent pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 w-full text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-8xl md:text-[12rem] font-bold text-[#D2691E] tracking-tighter mb-4 uppercase drop-shadow-2xl">
          Цөлжилт
        </h1>
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={isActive ? { opacity: 1, width: "100%" } : {}}
          transition={{ delay: 0.5, duration: 1 }}
          className="h-1 bg-[#D2691E] mb-6"
        />
        <p className="text-2xl md:text-4xl text-[#F5DEB3] font-light tracking-widest uppercase">
          Газрын доройтлын өсөн нэмэгдэж буй хямрал
        </p>
      </motion.div>
    </div>
  </div>
);

const TeammatesSlide = ({ isActive }: SlideProps) => {
  const teams = [
    {
      name: "Маркетингийн Баг",
      members: [
        "Мишээл",
        "Удвал",
        "Анар-Эрдэнэ",
        "Анхболор",
        "Буянтөгс",
        "Бат-Эрдэнэ",
        "Дорж",
      ],
    },
    {
      name: "Илтгэлийн Баг",
      members: [
        "Сэцэн",
        "Наранбадрах",
        "Ууганбаяр",
        "Түвшинжаргал",
        "Арвин-Erdene",
        "Цэцэг",
        "Бат",
      ],
    },
    {
      name: "Судалгааны Баг",
      members: [
        "Анундари",
        "Анужин",
        "Мөнгөнзаяа",
        "Оюунсувд",
        "Гэрэл",
        "Төгөлдөр",
        "Очир",
      ],
    },
  ];

  const avatars = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=150",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150",
  ];

  return (
    <div className="h-full w-full relative overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.08] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-center justify-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          className="text-4xl md:text-5xl font-extrabold text-[#F4A460] mb-12 uppercase tracking-widest border-b-2 border-[#D2691E] pb-4 z-10 text-center"
        >
          МАНАЙ БАГ (21 ГИШҮҮН)
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full z-10">
          {teams.map((team, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isActive ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: idx * 0.2 }}
              className="bg-[#3E2723]/60 backdrop-blur-md rounded-3xl p-6 border border-[#D2691E]/20 hover:border-[#D2691E] transition-all"
            >
              <h3 className="text-xl md:text-2xl font-bold text-[#D2691E] mb-6 text-center border-b border-[#D2691E]/30 pb-2">
                {team.name}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {team.members.map((member, mIdx) => {
                  const avatarUrl = avatars[(mIdx + idx * 7) % avatars.length];
                  return (
                    <div
                      key={mIdx}
                      className="flex flex-col items-center group"
                    >
                      <div className="w-16 h-16 rounded-full bg-[#1A0F05] border-2 border-[#D2691E]/30 flex items-center justify-center overflow-hidden mb-2 group-hover:border-[#D2691E] group-hover:scale-105 transition-all relative">
                        <img
                          src={avatarUrl}
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                          alt={member}
                        />
                      </div>
                      <span className="text-xs md:text-sm text-[#F5DEB3] text-center font-medium opacity-80 group-hover:opacity-100">
                        {member}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FocusSlide = ({ isActive }: SlideProps) => (
  <div className="h-full w-full relative overflow-hidden flex flex-col justify-center">
    {/* Decorative spotlight effect */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D2691E]/5 rounded-full blur-3xl pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
      <div className="text-center mb-10">
        <div className="inline-block bg-[#D2691E]/15 text-[#F4A460] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.25em] mb-4 border border-[#D2691E]/20">
          Our Strategic Directives
        </div>
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter"
        >
          БИД ЮУНД ЧИГЛЭЖ <span className="text-[#D2691E]">БАЙГАА ВЭ?</span>
        </motion.h2>
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D2691E] to-transparent mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          {
            num: "01",
            title: "ХОГ ХАЯГДАЛ",
            subtitle: "Waste Stream Reduction",
            desc: "Сургууль болон ойр орчим дахь хуванцар сав, хаягдлыг системтэйгээр бүртгэж, хогийн савны зөв удирдлагыг суулгах ажиллагаа.",
            icon: <ShoppingBag size={24} className="text-blue-400" />,
            glow: "group-hover:border-blue-500/30",
          },
          {
            num: "02",
            title: "ЭРГЭЛТЭД ОРУУЛАХ",
            subtitle: "Circular Recycling",
            desc: "Цугларсан дахин боловсруулах боломжтой хаягдлыг түүхий эдийн үйлдвэрт тушааж, өөрөө өөрийгөө санхүүжүүлэх ногоон эдийн засгийг босгох.",
            icon: <RefreshCw size={24} className="text-purple-400" />,
            glow: "group-hover:border-purple-500/30",
          },
          {
            num: "03",
            title: "ОЙЖУУЛАЛТ",
            subtitle: "Desert Afforestation",
            desc: "Борлуулалтын цэвэр орлогоор Говийн хөрсний элэгдлийг зогсоох урт настай чацаргана болон хуайс моддыг олноор тарих ажлыг эхлүүлэх.",
            icon: <Trees size={24} className="text-emerald-400" />,
            glow: "group-hover:border-emerald-500/30",
          },
          {
            num: "04",
            title: "ЭКО БОЛОВСРОЛ",
            subtitle: "Digital Advocacy",
            desc: "Электрон сургалтын платформоор дамжуулан эко зөвлөмж өгөх болон хамтын хяналтын системийг сурагчдад өдөр тутам хэвшүүлэх.",
            icon: <Monitor size={24} className="text-amber-400" />,
            glow: "group-hover:border-amber-500/30",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className="bg-[#1b120c]/40 border border-white/5 rounded-[2.5rem] p-7 flex flex-col justify-between relative overflow-hidden group hover:bg-[#1b120c]/60 transition-all shadow-xl backdrop-blur-md"
          >
            {/* Top visual elements */}
            <div className="flex justify-between items-start mb-6">
              <span className="text-sm font-mono text-[#F4A460] font-bold bg-[#D2691E]/10 px-3 py-1 rounded-full">
                {item.num}
              </span>
              <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-colors">
                {item.icon}
              </div>
            </div>

            <div>
              <span className="text-[10px] text-[#F5DEB3]/50 font-mono uppercase tracking-wider">
                {item.subtitle}
              </span>
              <h3 className="text-xl font-bold text-white uppercase tracking-tight mt-1 mb-3 group-hover:text-[#F4A460] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-[#F5DEB3]/70 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Accent bottom line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D2691E]/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const GoalsObjectivesSlide = ({ isActive }: SlideProps) => (
  <div className="h-full w-full relative overflow-hidden flex flex-col justify-center">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.14] pointer-events-none" />
    {/* Decorative lighting elements */}
    <div className="absolute top-10 left-10 w-96 h-96 bg-emerald-500/[0.03] rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500/[0.03] rounded-full blur-3xl pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
      <div className="text-center mb-10">
        <span className="inline-block bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 text-[10px] uppercase tracking-[0.25em] px-4 py-1 rounded-full font-bold">
          Target & Strategy
        </span>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          className="text-5xl font-black text-white uppercase tracking-tighter mt-3"
        >
          ЗОРИЛГО БОЛОН <span className="text-emerald-400">ЗОРИЛТУУД</span>
        </motion.h2>
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Big Vision Block (Зорилго) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 bg-[#120b05]/50 border border-orange-500/15 p-10 rounded-[3rem] shadow-2xl flex flex-col justify-between relative overflow-hidden group hover:border-orange-500/35 transition-all duration-300"
        >
          {/* Background visual texture */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.14] group-hover:scale-105 transition-transform duration-700 pointer-events-none" />

          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-orange-500/10 rounded-2xl border border-orange-500/20 text-[#F4A460]">
                <Leaf size={28} />
              </div>
              <div>
                <span className="text-[10px] text-orange-500/60 font-mono font-bold uppercase tracking-wider block">
                  MAIN GOAL
                </span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                  ЗОРИЛГО
                </h3>
              </div>
            </div>

            <p className="text-lg text-[#F5DEB3]/90 font-light leading-relaxed">
              Хуванцар хаягдлыг дахин ашиглаж, бохирдлыг багасгаснаар хөрсний
              доройтолтой нутгийг сэргээж, цөлжилттэй тэмцэх, дэлхийн цөлжилт
              төдийгүй Монголын Говийг дахин амь оруулж, эрүүл, тогтвортой
              ирээдүйг цогцлоох.
            </p>
          </div>

          {/* Decorative metric indicator */}
          <div className="mt-8 pt-6 border-t border-white/5 flex gap-6 text-[11px] font-mono font-bold text-orange-400 relative z-10">
            <div>
              🌎 GLOBAL TARGET: <span className="text-white">SDG 15</span>
            </div>
            <div>
              🌱 FOCUS: <span className="text-[#4CAF50]">AFFORESTATION</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Detailed Milestones Block (Зорилт) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-7 bg-[#0f1710]/50 border border-emerald-500/15 p-10 rounded-[3rem] shadow-2xl flex flex-col justify-between relative overflow-hidden group hover:border-emerald-500/35 transition-all duration-300"
        >
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-emerald-500/10 rounded-2xl border border-emerald-500/20 text-[#4CAF50]">
                <ArrowRightLeft size={28} />
              </div>
              <div>
                <span className="text-[10px] text-emerald-500/60 font-mono font-bold uppercase tracking-wider block">
                  KEY OBJECTIVES
                </span>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                  ЗОРИЛТУУД
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: "Ангилал & Багасгалт",
                  desc: "Сургууль доторх хуванцрын хаягдлыг бодитоор багасгаж хуваарилах.",
                  target: "85%",
                  icon: "🏫",
                },
                {
                  title: "Ойр орчим цэвэрлэгээ",
                  desc: "Сургуулийн ойр орчмын хуванцрын хаягдлыг системтэй цэвэрлэх.",
                  target: "90%",
                  icon: "🌳",
                },
                {
                  title: "Дахин боловсруулалт",
                  desc: "Цугларсан хаягдлыг үйлдвэрт тушааж эргэлтэд оруулах.",
                  target: "100%",
                  icon: "🔄",
                },
                {
                  title: "Ойжуулах компанит ажил",
                  desc: "Орлогоор Говийн бүсэд олноор чацарганы мод тарьж ургуулах.",
                  target: "2000+ мод",
                  icon: "🌱",
                },
              ].map((obj, i) => (
                <div
                  key={i}
                  className="bg-black/25 border border-white/5 p-4 rounded-2xl group/item hover:bg-black/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm font-bold text-white group-hover/item:text-emerald-400 transition-colors flex items-center gap-2">
                        <span>{obj.icon}</span> {obj.title}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                        {obj.target}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#F5DEB3]/70 font-light leading-relaxed">
                      {obj.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Action roadmap alignment */}
          <div className="mt-6 pt-6 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-emerald-400 relative z-10">
            <span>IMPLEMENTATION PIPELINE: ACTIVE</span>
            <span className="text-[#4CAF50] font-bold">
              READY FOR DEPLOYMENT ➔
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

const IssuesChallengesSlide = ({ isActive }: SlideProps) => (
  <div className="h-full w-full relative overflow-hidden flex flex-col justify-center">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.15] grayscale pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-8 z-10"
      >
        <span className="bg-red-500/10 border border-red-500/30 text-red-400 px-5 py-2 rounded-full text-xs font-mono tracking-widest uppercase mb-4 inline-block">
          ОНЦГОЙ БАЙДАЛ: СҮЙРЭЛ & СҮРДҮҮЛЭГ
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white hover:text-red-500 transition-colors uppercase tracking-widest leading-none">
          ТУЛГАМДАЖ БУЙ{" "}
          <span className="text-red-600 font-extrabold block md:inline">
            ҮНДЭСНИЙ АСУУДАЛ
          </span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 z-10">
        {[
          {
            num: "3.3 Сая Тн",
            title: "Хуванцрын хаягдал",
            desc: "Монгол улсад жил бүр 3.3 сая тонн хуурай хаягдал үүсдэг. Нийт хаягдлын 42%-ийг Улаанбаатар дангаараа бүрдүүлж, байгаль орчинд ноцтой аюул учруулж буй хамгийн том хямрал болж байна.",
            img: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&q=80",
            color:
              "border-red-500/30 hover:border-red-500 shadow-red-500/5 bg-red-950/20",
            textColor: "text-red-500",
            tag: "WASTE CRITICAL",
          },
          {
            num: "76.9%",
            title: "Цөлжилт & Газрын доройтол",
            desc: "Бэлчээр нутгийн 76.9% нь доройтолд өртөөд байна. Үүний тал хувь нь уур амьсгалаас гадна хүний зохисгүй үйл ажиллагаа, бэлчээрийн хэт их хэрэглээнээс шууд үүдэлтэй.",
            img: "https://images.unsplash.com/photo-1541013348633-14902b4d96a7?auto=format&fit=crop&q=80",
            color:
              "border-orange-500/30 hover:border-orange-500 shadow-orange-500/5 bg-orange-950/20",
            textColor: "text-orange-400",
            tag: "DESERTIFICATION",
          },
          {
            num: "350+ Гол горхи",
            title: "Ундны усны хомсдол",
            desc: "Экологийн дулаарал болон хайхрамжгүй байдлаас шалтгаалан сүүлийн хэдэн жилд хэдэн зуун гол горхи, нуур ширгэж, хөрсний гүний усны хэмжээ маш аюултай хурдаар доошилсоор байна.",
            img: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80",
            color:
              "border-amber-500/30 hover:border-amber-500 shadow-amber-500/5 bg-amber-950/20",
            textColor: "text-amber-500",
            tag: "WATER SCARCITY",
          },
          {
            num: "2.5 Дахин даац",
            title: "Бэлчээрийн талхлалт",
            desc: "Зохицуулалтгүй бэлчээрлэлт ба малын тоо хэт өссөнөөс нийт нутгийн бэлчээрийн даац бодит байдлаас 2.5 дахин хэтэрсэн бөгөөд энэ нь ургамал байгалийн жамаар нөхөн төлжих боломжийг хааж байна.",
            img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80",
            color:
              "border-yellow-500/30 hover:border-yellow-500 shadow-yellow-500/5 bg-yellow-950/20",
            textColor: "text-yellow-400",
            tag: "OVERGRAZING",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: idx * 0.12 }}
            className={`group bg-black/60 border-2 ${item.color} rounded-[2.5rem] p-8 flex flex-col justify-between relative overflow-hidden h-[490px] transition-all duration-300 backdrop-blur-md shadow-2xl`}
          >
            {/* Background image container directly in each card */}
            <div className="absolute top-0 left-0 right-0 z-0 h-44 overflow-hidden rounded-t-[2.2rem] border-b-2 border-white/10">
              <img
                src={item.img}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 select-none"
                alt={item.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0703] via-transparent to-transparent opacity-90" />
              <span className="absolute top-4 left-4 text-[9px] font-mono font-black text-white tracking-widest bg-black/85 border border-white/20 px-3 py-1.5 rounded-full uppercase shadow-lg">
                {item.tag}
              </span>
            </div>

            <div className="z-10 mt-44 pt-4 flex flex-col justify-between flex-1">
              <div className="space-y-2">
                <div
                  className={`${item.textColor} font-black text-3xl md:text-4xl font-mono tracking-tighter select-all leading-none`}
                >
                  {item.num}
                </div>
                <h3 className="text-md md:text-lg font-black text-white uppercase tracking-tight select-none group-hover:text-[#F4A460] transition-colors leading-tight">
                  {item.title}
                </h3>
                <p className="text-[11px] md:text-xs text-[#F5DEB3]/80 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="pt-2.5 border-t border-white/10 flex justify-between items-center text-[9px] font-mono text-[#F5DEB3]/40">
                <span className="tracking-widest uppercase font-bold text-[#F4A460]/70">
                  ХАМТЫН ХЯНАЛТ
                </span>
                <span className="text-red-500 font-bold uppercase">
                  SIA АНХААРУУЛГА
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const ActivitiesSlide = ({ isActive }: SlideProps) => (
  <div className="h-full w-full relative overflow-hidden flex flex-col justify-center">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.15] grayscale pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-10 z-10"
      >
        <h2 className="text-4xl md:text-5xl font-black text-[#F4A460] uppercase tracking-widest pb-3 leading-tight">
          Бидний хэрэгжүүлсэн{" "}
          <span className="text-white">өмнө жилийн бодит алхмууд</span>
        </h2>
        <p className="text-[#F5DEB3]/60 text-xs font-light uppercase tracking-widest font-mono">
          Бодит ажил хэрэг хуурай үгнээс илүү хүчтэй
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 z-10">
        {[
          {
            num: "01",
            text: "100кг хуванцар хаягдал цуглуулж дахин боловсруулах үйлдвэрт тушаав.",
            img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80",
            label: "Хуванцар Цуглуулалт",
            badge: "RECYCLE",
            accent: "border-sky-500/20 shadow-sky-500/5 hover:border-sky-400",
          },
          {
            num: "02",
            text: "20 ширхэг чацарганы мод Төв аймгийн Эрдэнэ сумд тарив.",
            img: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&q=80",
            label: "Ногоон Төгөл",
            badge: "AFFORESTAND",
            accent:
              "border-emerald-500/20 shadow-emerald-500/5 hover:border-emerald-400",
          },
          {
            num: "03",
            text: "БНСУ улсын Үндэсний Ассамблейд төслөө танилцуулав.",
            img: "https://images.unsplash.com/photo-1521791136064-7986c2959213?auto=format&fit=crop&q=80",
            label: "Олон Улсын Түвшинд",
            badge: "GLOCAL",
            accent:
              "border-purple-500/20 shadow-purple-500/5 hover:border-purple-400",
          },
          {
            num: "04",
            text: "200 хүүхдэд хуванцар ангилах нөлөөллийн ажлын сургалт явуулав.",
            img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80",
            label: "Сургалт & Нөлөөлөл",
            badge: "EDUCATION",
            accent:
              "border-amber-500/20 shadow-amber-500/5 hover:border-amber-400",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 85 }}
            className={`group relative h-[380px] rounded-[2.5rem] overflow-hidden border ${item.accent} bg-black/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-500`}
          >
            <img
              src={item.img}
              className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#120701] via-[#120701]/60 to-transparent p-6 flex flex-col justify-end">
              <div className="flex justify-between items-center mb-3">
                <span className="text-4xl font-extrabold text-white/10 group-hover:text-[#F4A460]/20 transition-colors font-mono leading-none">
                  {item.num}
                </span>
                <span className="text-[8px] font-mono tracking-widest bg-white/5 border border-white/10 px-2.5 py-1 rounded text-white/60">
                  {item.badge}
                </span>
              </div>
              <div className="text-xs font-bold text-[#F4A460] uppercase tracking-wider mb-2 font-mono">
                {item.label}
              </div>
              <p className="text-sm text-[#F5DEB3]/90 leading-relaxed font-light">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const ExpansionSlide = ({ isActive }: SlideProps) => (
  <div className="h-full w-full relative overflow-hidden flex flex-col justify-center">
    <div className="absolute inset-0 bg-[#0d0703]/95 z-0" />
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.03] pointer-events-none z-0" />

    <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-10 z-10"
      >
        <span className="bg-[#D2691E]/10 border border-[#D2691E]/20 text-[#F4A460] px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase mb-3 inline-block">
          ИРЭЭДҮЙН ТӨЛӨВЛӨГӨӨ
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-widest">
          Төслийг хэрхэн <span className="text-[#F4A460]">Өргөжүүлэх вэ?</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
        {[
          {
            phase: "ФАЗ 1",
            title: "СОШИАЛ НӨЛӨӨЛӨЛ",
            desc: "Залуусыг сошиал сувгаар нэгтгэж, байгальд ээлтэй тогтмол сонирхолтой контентоор дамжуулан эко дадал суулгана.",
            img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80",
            accent:
              "border-orange-500/30 hover:border-orange-400 shadow-orange-500/5",
            tagColor: "bg-orange-500/10 text-orange-400 border-orange-500/30",
            badge: "SOCIAL NETWORK",
          },
          {
            phase: "ФАЗ 2",
            title: "СУРГУУЛИЙН СҮЛЖЭЭ",
            desc: "Эхний жишиг сургуулийн туршлагыг дараагийн 10+ сургуульд нэвтрүүлж, сурагчдын эко бүлгэмүүдийг байгуулна.",
            img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80",
            accent:
              "border-emerald-500/30 hover:border-emerald-400 shadow-emerald-500/5",
            tagColor:
              "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
            badge: "SCHOOL NETWORK",
          },
          {
            phase: "ФАЗ 3",
            title: "ГЛОБАЛ СУВАГ",
            desc: "Бодлогын тайланг Үндэсний Ассамблей болон НҮБ-ын байгууллагуудад танилцуулж, урт хугацааны санхүүжилт босгоно.",
            img: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80",
            accent: "border-sky-500/30 hover:border-sky-400 shadow-sky-500/5",
            tagColor: "bg-sky-500/10 text-sky-400 border-sky-500/30",
            badge: "GLOBAL POLICY",
          },
        ].map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15, type: "spring", stiffness: 90 }}
            className={`group relative h-[420px] rounded-[2.5rem] overflow-hidden border ${step.accent} bg-black/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] transition-all duration-500`}
          >
            {/* Unsplash backgrounds with high visibility */}
            <div className="absolute inset-0 z-0">
              <img
                src={step.img}
                className="w-full h-full object-cover opacity-40 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
                alt={step.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#120701] via-[#120701]/80 to-[#120701]/30" />
            </div>

            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
              <div className="flex justify-between items-center mb-4">
                <span className="text-5xl font-black font-mono text-white/20 group-hover:text-white/40 transition-colors leading-none">
                  {step.phase}
                </span>
                <span
                  className={`text-[9px] font-mono tracking-widest border px-3 py-1.5 rounded-full uppercase ${step.tagColor}`}
                >
                  {step.badge}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight mb-3 group-hover:text-[#F4A460] transition-colors">
                {step.title}
              </h3>

              <p className="text-xs md:text-sm text-[#F5DEB3]/90 leading-relaxed font-normal">
                {step.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const SDGSlide = ({ isActive }: SlideProps) => (
  <div className="h-full w-full relative overflow-hidden flex flex-col justify-center">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.14] grayscale pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-10 z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#D2691E]/10 border border-[#D2691E]/20 text-[#F4A460] font-mono text-xs tracking-widest rounded-full uppercase mb-3">
          <Globe size={14} className="text-[#D2691E]" /> ТОГТВОРТОЙ ХӨГЖЛИЙН
          ЗОРИЛТУУД
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-widest uppercase">
          Эх Дэлхий ба <span className="text-[#F4A460]">SDG Төлөвлөгөө</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
        {[
          {
            goal: "13",
            title: "Уур амьсгалын өөрчлөлттэй тэмцэх",
            color: "bg-emerald-950/20 hover:bg-emerald-950/40",
            border: "border-emerald-500/20 hover:border-emerald-500/50",
            accent: "text-emerald-400",
            desc: "Хүлэмжийн хийн ялгарлыг бууруулах, байгаль орчинд ээлтэй залуусын хөдөлгөөнийг идэвхжүүлж уур амьсгалын өөрчлөлтөд дасан зохицох хөтөлбөр хэрэгжүүлэх.",
            img: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80",
            kpi: "Улсын Түвшин: Дунд",
          },
          {
            goal: "15",
            title: "Газар дээрх экосистемийг хамгаалах",
            color: "bg-amber-950/20 hover:bg-amber-950/40",
            border: "border-amber-500/20 hover:border-amber-500/50",
            accent: "text-[#F4A460]",
            desc: "Хуурай газрын экосистемийг хамгаалах, цөлжилт хөрсний элэгдэлтэй идэвхтэй тэмцэх, мод тарих замаар хөрс доройтлыг зогсоох бодит ажиллагаа.",
            img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80",
            kpi: "Бидний Гол Зорилт",
          },
          {
            goal: "6",
            title: "Цэвэр ус, ариун цэврийн байгууламжийг хангах",
            color: "bg-blue-950/20 hover:bg-blue-950/40",
            border: "border-blue-500/20 hover:border-blue-500/50",
            accent: "text-blue-400",
            desc: "Усны хомсдолоос сэргийлэх, сургууль орчимд усыг хэмнэлттэй зөв ашиглах соёлыг дэлгэрүүлэхэд чиглэсэн сорил ба багачуудын сургалт.",
            img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80",
            kpi: "Эко-Үр Нөлөө: Чөлөөт",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15 }}
            className={`${card.color} ${card.border} border-2 rounded-[2.5rem] p-8 flex flex-col justify-between group hover:scale-[1.02] transition-all duration-300 backdrop-blur-xl relative overflow-hidden h-[340px]`}
          >
            <div className="absolute inset-0 opacity-[0.04] group-hover:opacity-[0.1] transition-opacity duration-500">
              <img
                src={card.img}
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
            <div className="z-10">
              <div className="flex justify-between items-start mb-4">
                <span
                  className={`text-5xl font-black ${card.accent} opacity-40 group-hover:opacity-100 transition-opacity`}
                >
                  {card.goal}
                </span>
                <span className="text-[9px] font-mono tracking-wider bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-white/50">
                  {card.kpi}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F4A460] transition-colors leading-snug">
                {card.title}
              </h3>
              <p className="text-[#F5DEB3]/70 text-xs leading-relaxed font-light">
                {card.desc}
              </p>
            </div>
            <div className="z-10 pt-3 border-t border-white/5 flex justify-between items-center text-[9px] font-mono tracking-widest text-[#F5DEB3]/40 group-hover:text-white transition-colors">
              <span>НҮБ ПОЛИСИ</span>
              <span>ИДЭВХТЭЙ ➔</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Integrated target dashboard ribbon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4 }}
        className="mt-8 bg-black/30 border border-white/5 p-4 rounded-3xl flex flex-wrap justify-around items-center gap-4 z-10"
      >
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono text-[#F5DEB3]/60 tracking-wider">
            Монгол Улсын хөгжлийн бодлого Алсын Хараа 2050-тай холбогдсон
          </span>
        </div>
        <div className="hidden md:block w-px h-5 bg-white/10" />
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse" />
          <span className="text-xs font-mono text-[#F5DEB3]/60 tracking-wider">
            Оролцоо хамрах хүрээ: ЕРӨНХИЙ БОЛОВСРОЛЫН СУРГУУЛИУД
          </span>
        </div>
      </motion.div>
    </div>
  </div>
);

const SIASlide = ({ isActive }: SlideProps) => (
  <div className="h-full w-full relative overflow-hidden flex flex-col justify-center">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.08] pointer-events-none" />
    <div className="absolute top-10 left-10 w-96 h-96 bg-[#D2691E]/5 rounded-full blur-3xl pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left side: Mission & detailed concept */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          className="lg:col-span-4 flex flex-col justify-between space-y-6"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D2691E]/20 hover:bg-[#D2691E]/30 text-[#F4A460] font-mono text-[10px] rounded-full uppercase tracking-widest border border-[#D2691E]/30 w-fit">
              <Compass
                className="animate-spin-slow"
                style={{ animationDuration: "20s" }}
                size={12}
              />{" "}
              STUDENTS IN ACTION (SIA)
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white leading-none tracking-tight">
              БҮТЭЛТЭЙ СИСТЕМ: <span className="text-[#D2691E]">SIA</span>
            </h2>
            <p className="text-xs text-[#F5DEB3]/70 leading-relaxed font-light">
              SIA бол зөвхөн уриа лоозон биш, сургууль, залуучуудын оролцоог
              бодит эдийн засгийн цикл дээр суурилсан эко орчин болгон сэргээдэг
              үндэсний дүүрэн хөтөлбөр юм.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-white/5">
            <div className="text-[10px] uppercase tracking-widest text-[#F4A460] font-mono font-bold">
              Хөтөлбөрийн шууд өгөөж:
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { num: "12+", t: "Идэвхтэй сургууль" },
                { num: "450+", t: "Эко сурагчид" },
                { num: "2.4 Тн", t: "Дахивар хуванцар" },
                { num: "5 Салбар", t: "Байгуулагдсан клуб" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 p-3 rounded-xl hover:bg-black/30 hover:border-emerald-500/30 transition-all"
                >
                  <div className="text-xl font-black text-white">
                    {item.num}
                  </div>
                  <div className="text-[9px] uppercase font-mono text-emerald-400 font-medium tracking-wide">
                    {item.t}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Middle side: High tech diagram grid (Extremely detailed columns) */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
          {[
            {
              step: "01",
              title: "Соён гэгээрүүлэх урсгал",
              accent:
                "border-orange-500/20 hover:border-orange-500/40 bg-orange-950/10",
              icon: <Sparkles size={18} className="text-orange-400" />,
              desc: "Нийт сурагчид, залууст зориулж анхааруулах богино контент, постер бэлтгэж, сургуулийн сошиал сүлжээгээр дамжуулан тогтмол зөв соёл хэвшлийг суулгана.",
            },
            {
              step: "02",
              title: "Хаягдлын хяналт",
              accent:
                "border-emerald-500/20 hover:border-emerald-500/40 bg-emerald-950/10",
              icon: <RefreshCw size={18} className="text-emerald-400" />,
              desc: "Ширээ, хонгилуудад тусгай боловсруулсан хог хаягдлын ангилах сав, постер байршуулан идэвхтэй сорил явуулж, хаягдлын урсгалыг автоматжуулж хянана.",
            },
            {
              step: "03",
              title: "Өөрөө өөрийгөө санхүүжүүлэх",
              accent:
                "border-amber-500/20 hover:border-amber-500/40 bg-amber-950/10",
              icon: <Compass size={18} className="text-amber-400" />,
              desc: "Цугларсан дахин боловсруулах боломжтой хуванцарыг үйлдвэрүүдэд борлуулж, орлогоороо хэрэгцээт суулгац хамгаалалтын тор худалдан авч ойжуулалтдаа хэрэглэнэ.",
            },
            {
              step: "04",
              title: "Глобал шийдвэр гаргалт",
              accent: "border-sky-500/20 hover:border-sky-500/40 bg-sky-950/10",
              icon: <Globe size={18} className="text-sky-400" />,
              desc: "Хийсэн ажлаа баримтжуулан бодлогын тайлан бэлтгэж, Үндэсний Ассамблей болон НҮБ-ын Нөлөөллийн платформд сурагчдын бодит төлөөлөл болон танилцуулна.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`group rounded-3xl border-2 ${item.accent} p-6 flex flex-col justify-between transition-all duration-300 backdrop-blur-md relative overflow-hidden`}
            >
              {/* Visual background gradient inside each card */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/2 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform" />

              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="p-2.5 bg-black/40 rounded-xl w-fit border border-white/5">
                    {item.icon}
                  </div>
                  <span className="text-[28px] font-black font-mono text-white/5 group-hover:text-white/10 transition-colors">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-2 uppercase tracking-wide group-hover:text-[#F4A460] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#F5DEB3]/70 leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex justify-between items-center text-[8px] font-mono text-white/30 uppercase tracking-widest">
                <span>SIA FRAMEWORK</span>
                <span className="text-emerald-400">ACTIVE COMPLIANCE ➔</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const SkillsSlide = ({ isActive }: SlideProps) => (
  <div className="h-full w-full relative overflow-hidden flex flex-col justify-center">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.01] pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        className="text-center mb-10 z-10"
      >
        <span className="bg-[#D2691E]/10 border border-[#D2691E]/20 text-[#F4A460] px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase mb-3 inline-block">
          ЧАДАВХЖУУЛАЛТ
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-widest">
          Олж Авсан <span className="text-[#F4A460]">Мэдлэг & Чадвар</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
        {[
          {
            title: "Глобал Англи Хэл",
            items: [
              {
                h: "Speaking",
                d: "Хэлэлцүүлэгт оролцох, бусадтай ойлголцох.",
                level: 85,
              },
              {
                h: "Writing",
                d: "Судалгааны тайлан, төслийн баримт бичиг.",
                level: 80,
              },
              {
                h: "Reading",
                d: "Академик судалгаа, материал унших чадвар.",
                level: 90,
              },
            ],
            color: "border-sky-500/30",
            bg: "bg-sky-950/15",
            accent: "text-sky-400",
            barColor: "bg-sky-400",
          },
          {
            title: "Судалгааны Эко Клуб",
            items: [
              {
                h: "Судалгаа",
                d: "Байгаль орчны асуудлаар судалгаа хийх.",
                level: 95,
              },
              {
                h: "Шийдэл",
                d: "Тогтвортой хөгжлийн стратеги боловсруулах.",
                level: 75,
              },
              {
                h: "Санаачилга",
                d: "Ногоон практик хэрэгжүүлэх соёл.",
                level: 85,
              },
            ],
            color: "border-emerald-500/30",
            bg: "bg-emerald-950/15",
            accent: "text-emerald-400",
            barColor: "bg-emerald-400",
          },
          {
            title: "Илтгэлийн Манлайлал",
            items: [
              {
                h: "Илтгэх чадвар",
                d: "Тайзан дээр олон нийтийн өмнө танилцуулга.",
                level: 90,
              },
              {
                h: "Багаар ажиллах",
                d: "Хэлэлцүүлэгт манлайлж, хамтын шийдвэр.",
                level: 85,
              },
              {
                h: "Бусдад хүргэх",
                d: "Үзэл бодлоо зөвөөр ойлгуулж, хамтран зүтгэгч.",
                level: 88,
              },
            ],
            color: "border-amber-500/30",
            bg: "bg-amber-950/15",
            accent: "text-amber-400",
            barColor: "bg-amber-400",
          },
        ].map((col, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15 }}
            className={`${col.bg} border-2 ${col.color} p-8 rounded-[2.5rem] backdrop-blur-md hover:border-white/20 transition-all flex flex-col justify-between h-[420px]`}
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/5 pb-3 flex items-center justify-between">
                <span>{col.title}</span>
                <span
                  className={`w-2 h-2 rounded-full ${col.accent.replace("text-", "bg-")}`}
                />
              </h3>
              <div className="space-y-4">
                {col.items.map((item, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-white font-bold uppercase tracking-wider font-mono">
                        {item.h}
                      </span>
                      <span className={`${col.accent} font-mono font-bold`}>
                        {item.level}%
                      </span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full ${col.barColor} rounded-full`}
                        initial={{ width: 0 }}
                        animate={isActive ? { width: `${item.level}%` } : {}}
                        transition={{ duration: 1.2, delay: 0.2 + idx * 0.1 }}
                      />
                    </div>
                    <p className="text-[10px] text-[#F5DEB3]/60 leading-relaxed font-light">
                      {item.d}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-[9px] font-mono tracking-widest text-[#F5DEB3]/30 uppercase">
              УР ЧАДВАРЫН ТАВЦАН
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const FinanceSlide = ({ isActive }: SlideProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const data = [
    {
      name: "Тээвэрлэлт",
      value: 500000,
      percentage: "10%",
      icon: <Truck size={20} />,
      sub: "Логистик, түгээлт",
    },
    {
      name: "Маркетинг",
      value: 500000,
      percentage: "10%",
      icon: <Megaphone size={20} />,
      sub: "Сурталчилгаа, PR",
    },
    {
      name: "Чацаргана",
      value: 2000000,
      percentage: "40%",
      icon: <Trees size={20} />,
      sub: "Суулгац, арчилгаа",
    },
    {
      name: "Нөлөөлөл",
      value: 1000000,
      percentage: "20%",
      icon: <Users size={20} />,
      sub: "Сургалт, нөлөөллийн ажил",
    },
    {
      name: "Бусад",
      value: 1000000,
      percentage: "20%",
      icon: <Plus size={20} />,
      sub: "Бичиг хэрэг, бусад",
    },
  ];

  const COLORS = ["#D2691E", "#F4A460", "#A0522D", "#8B4513", "#6D4C41"];

  return (
    <div className="h-full w-full relative overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[url('https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-5 grayscale pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="text-center mb-12 z-10">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            className="text-5xl font-bold text-[#F4A460] uppercase tracking-widest border-b-2 border-[#D2691E] pb-4 inline-block"
          >
            Санхүүжилт
          </motion.h2>
          <p className="text-[#F5DEB3]/60 mt-4 font-mono tracking-widest">
            PROJECT BUDGET BREAKDOWN (2024-2025)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isActive ? { opacity: 1, scale: 1 } : {}}
            className="h-[450px] w-full relative flex items-center justify-center p-8 bg-black/20 rounded-[3rem] backdrop-blur-md border border-white/5"
          >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={110}
                  outerRadius={160}
                  paddingAngle={8}
                  dataKey="value"
                  stroke="none"
                  onMouseEnter={(_, index) => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      opacity={
                        activeIndex === null || activeIndex === index ? 1 : 0.6
                      }
                      stroke={activeIndex === index ? "#FFF" : "none"}
                      strokeWidth={2}
                      className="transition-all duration-300 cursor-pointer outline-none"
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1A0F05",
                    border: "1px solid #D2691E",
                    borderRadius: "12px",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.5)",
                  }}
                  itemStyle={{ color: "#F5DEB3" }}
                  cursor={{ fill: "transparent" }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center flex flex-col pointer-events-none">
              <span className="text-xs font-bold text-[#D2691E]/60 tracking-[0.3em] uppercase mb-1">
                Нийт Төсөв
              </span>
              <span className="text-4xl font-black text-white tracking-tighter">
                5,000,000{" "}
                <span className="text-lg font-light text-[#F5DEB3]/60">₮</span>
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            className="grid grid-cols-1 gap-4"
          >
            {data.map((item, i) => (
              <motion.div
                key={i}
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
                className={`flex items-center gap-6 p-5 rounded-2xl transition-all duration-300 border-l-8 group
                ${activeIndex === i ? "bg-[#D2691E]/20 scale-105 border-[#F4A460] shadow-xl" : "bg-white/5 border-[#D2691E] opacity-80"}`}
              >
                <div
                  className={`p-4 rounded-xl transition-colors duration-300 ${activeIndex === i ? "bg-[#F4A460] text-[#1A0F05]" : "bg-[#D2691E]/20 text-[#D2691E]"}`}
                >
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-end">
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-[#F4A460] transition-colors">
                        {item.name}
                      </h4>
                      <p className="text-xs text-[#F5DEB3]/50">{item.sub}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-[#F4A460] block leading-none">
                        {item.percentage}
                      </span>
                      <span className="text-sm font-mono text-[#F5DEB3]/60">
                        {item.value.toLocaleString()} ₮
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const VisionSlide = ({ isActive }: SlideProps) => (
  <div className="h-full w-full relative overflow-hidden flex flex-col justify-center">
    {/* Decorative blur backdrop */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D2691E]/5 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/[0.03] rounded-full blur-3xl pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
      <div className="text-center mb-10">
        <div className="inline-block bg-[#D2691E]/15 text-[#F4A460] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.25em] mb-4 border border-[#D2691E]/20">
          Strategic Future Mapping
        </div>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          className="text-5xl font-black text-white uppercase tracking-tighter"
        >
          АЛСЫН <span className="text-[#D2691E]">ХАРАА</span>
        </motion.h2>
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D2691E] to-transparent mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {[
          {
            phase: "2027 ОН",
            title: "Үүнээс эхэлнэ",
            body: "Гэхэд 1,000 мод тарьсан байх",
            img: "https://images.unsplash.com/photo-1542601906990-b4d3fb773b09?auto=format&fit=crop&q=80",
            icon: <Sparkles size={18} className="text-orange-400" />,
            color: "border-orange-500/10 hover:border-orange-500/30",
          },
          {
            phase: "2030 ОН",
            title: "Дотоодын нэр хүнд",
            body: "Гэхэд Монголдоо нэр хүндтэй төсөл болж 5,000 мод тарьж, Монголын хог хаягдлыг 10%-иар багасгасан байх",
            img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80",
            icon: <Compass size={18} className="text-emerald-400" />,
            color: "border-emerald-500/10 hover:border-emerald-500/30",
          },
          {
            phase: "2050 ОН",
            title: "Том зорилт",
            body: "Монголын цөлжилтийн 30%-ийг арилгах",
            img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80",
            icon: <Globe size={18} className="text-sky-400" />,
            color: "border-sky-500/10 hover:border-sky-500/30",
          },
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className={`bg-[#1c1109]/40 rounded-[2.5rem] overflow-hidden border ${card.color} flex flex-col group backdrop-blur-md shadow-xl transition-all duration-300`}
          >
            <div className="h-44 bg-black/45 relative overflow-hidden">
              <img
                src={card.img}
                className="w-full h-full object-cover opacity-50 group-hover:opacity-75 group-hover:scale-105 transition-all duration-700"
                alt={card.title}
              />
              {/* Colored top gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#120b05] via-transparent to-transparent" />

              {/* Custom visual indicator in image corner */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 p-2.5 rounded-2xl flex items-center gap-2">
                {card.icon}
                <span className="text-[10px] font-mono font-bold text-white uppercase tracking-wider">
                  {card.phase}
                </span>
              </div>
            </div>

            <div className="p-7 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white uppercase tracking-tight group-hover:text-[#F4A460] transition-colors">
                  {card.title}
                </h3>
                <p className="text-xs text-[#F5DEB3]/70 font-light leading-relaxed mt-2">
                  {card.body}
                </p>
              </div>

              {/* Dynamic target marker for aesthetic alignment */}
              <div className="pt-4 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-[#F5DEB3]/40">
                <span>TARGET MILESTONE</span>
                <span className="text-[#F4A460]/60">ACTIVE TRACK ──▶</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

const FutureTasksSlide = ({ isActive }: SlideProps) => (
  <div className="h-full w-full relative overflow-hidden flex flex-col justify-center">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.14] pointer-events-none" />
    {/* Ambient lighting */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D2691E]/5 rounded-full blur-3xl pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
      <div className="text-center mb-10">
        <div className="inline-block bg-[#D2691E]/15 text-[#F4A460] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.25em] mb-4 border border-[#D2691E]/20">
          Roadmap & Action Strategy
        </div>
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          className="text-6xl font-black text-white uppercase tracking-tighter"
        >
          ХИЙХ ЁСТОЙ <span className="text-[#D2691E]">АЖЛУУД</span>
        </motion.h2>
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D2691E] to-transparent mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {/* 1. Cycle (Wide - spans 2 columns) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 bg-[#1b120c]/60 border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between relative overflow-hidden group hover:border-[#D2691E]/30 transition-all shadow-2xl backdrop-blur-md"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#D2691E]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#D2691E]/20 transition-all duration-750" />

          <div>
            <div className="flex items-center gap-5 mb-6">
              <div className="p-4 bg-gradient-to-br from-[#D2691E] to-[#CD853F] rounded-[1.25rem] text-white shadow-xl shadow-[#D2691E]/20">
                <RefreshCw
                  size={28}
                  className="animate-spin-[spin_10s_linear_infinite]"
                  style={{ animationDuration: "12s" }}
                />
              </div>
              <div>
                <div className="text-[10px] text-[#F4A460] font-bold uppercase tracking-widest">
                  Autonomous Loop
                </div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                  ♻️ THE GREEN CYCLE
                </h3>
              </div>
            </div>

            <p className="text-base text-[#F5DEB3]/85 font-light leading-relaxed max-w-xl">
              Хуванцар хог хаягдлыг цуглуулан дахин боловсруулж (Recycle),
              борлуулсан орлогоор нь чацарганы болон бусад нэн хэрэгцээт модны
              суулгац худалдан авч тарина. Энэхүү цикл нь санхүүгийн болон
              байгаль орчны хувьд тасралтгүй, өөрөө өөрийгөө тэтгэх мөчлөг юм.
            </p>
          </div>

          {/* Process Steps Visualizer */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 relative">
            {[
              {
                label: "Цуглуулах",
                desc: "Хуванцар хог хаягдал",
                icon: <Leaf size={16} className="text-sky-400" />,
                border: "border-sky-500/20",
                bg: "bg-sky-500/5",
              },
              {
                label: "Боловсруулах",
                desc: "Eco Recycle үйлдвэр",
                icon: <RefreshCw size={16} className="text-purple-400" />,
                border: "border-purple-500/20",
                bg: "bg-purple-500/5",
              },
              {
                label: "Борлуулах",
                desc: "Ногоон ашиг олох",
                icon: <ShoppingBag size={16} className="text-amber-400" />,
                border: "border-amber-500/20",
                bg: "bg-amber-500/5",
              },
              {
                label: "Мод Тарих",
                desc: "Чацарганаар сэргээх",
                icon: <Sprout size={16} className="text-emerald-400" />,
                border: "border-emerald-500/20",
                bg: "bg-emerald-500/5",
              },
            ].map((step, i) => (
              <div key={i} className="relative">
                <div
                  className={`p-4 rounded-2xl border ${step.border} ${step.bg} flex flex-col justify-between h-28 group-hover:bg-white/[0.02] transition-colors`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono text-[#F4A460]/75">
                      0{i + 1}
                    </span>
                    <div className="p-1 px-1.5 rounded-md bg-black/40">
                      {step.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-white uppercase tracking-wider">
                      {step.label}
                    </h4>
                    <p className="text-[10px] text-[#F5DEB3]/50 line-clamp-1 mt-0.5">
                      {step.desc}
                    </p>
                  </div>
                </div>
                {i < 3 && (
                  <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 hidden md:block z-20">
                    <ArrowRight size={14} className="text-[#D2691E]/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* 2. Reel Challenge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-[#1b120c]/40 border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between relative overflow-hidden group hover:border-red-500/20 transition-all shadow-xl backdrop-blur-md"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/[0.02] rounded-full blur-2xl pointer-events-none group-hover:bg-red-500/[0.05] transition-all" />

          <div className="flex justify-between items-start mb-6">
            <div className="p-3.5 bg-red-500/10 rounded-2xl text-red-400 border border-red-500/20 shadow-inner">
              <Video size={24} />
            </div>
            <span className="text-[10px] font-mono text-red-400 font-bold bg-red-500/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
              Social Viral
            </span>
          </div>

          <div>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3">
              🎬 Reel Challenge
            </h3>
            <p className="text-sm text-[#F5DEB3]/70 font-light leading-relaxed">
              <span className="text-white font-bold text-red-400">
                "1 Follower = 1кг Хог цуглуулах"
              </span>{" "}
              уриалгыг сошиал тавцанд гарган бодит үйлдлээр вирал болгож, олон
              зуун залуусыг нийгмийн хариуцлагатай эко давалгаанд нэгтгэнэ.
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] font-bold text-red-400 uppercase font-mono tracking-widest">
                LIVE TRACKING
              </span>
            </div>
            <span className="text-xs text-[#F5DEB3]/40 font-mono">
              Tik Tok & Reels
            </span>
          </div>
        </motion.div>

        {/* 3. 1000 Trees */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#1b120c]/40 border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-500/20 transition-all shadow-xl backdrop-blur-md"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/[0.02] rounded-full blur-2xl pointer-events-none group-hover:bg-emerald-500/[0.05] transition-all" />

          <div className="flex justify-between items-start mb-6">
            <div className="p-3.5 bg-emerald-500/10 rounded-2xl text-emerald-400 border border-emerald-500/20 shadow-inner">
              <Trees size={24} />
            </div>
            <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
              Major Target
            </span>
          </div>

          <div>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3">
              🌳 1000 Мод Тарих
            </h3>
            <p className="text-sm text-[#F5DEB3]/70 font-light leading-relaxed">
              Нийт{" "}
              <span className="text-white font-bold text-emerald-400">
                1,000 чацарганы болон орон нутагт дасан зохицох чадвартай
                моддийг
              </span>{" "}
              голлон суулгаж, хөрсний эвдрэл, элсний нүүлтийг бодитоор зогсоох
              экологийн хана үүсгэнэ.
            </p>
          </div>

          {/* Beautiful tiny custom dynamic progress indicator */}
          <div className="mt-6">
            <div className="flex justify-between text-[10px] text-[#F5DEB3]/50 font-mono mb-1.5 uppercase">
              <span>Progress</span>
              <span className="font-bold text-emerald-400">100% Target</span>
            </div>
            <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden p-[2px]">
              <div
                className="h-full bg-gradient-to-r from-[#D2691E] to-emerald-500 rounded-full animate-pulse"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </motion.div>

        {/* 4. Official Partners */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="bg-[#1b120c]/40 border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between relative overflow-hidden group hover:border-amber-500/20 transition-all shadow-xl backdrop-blur-md"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/[0.02] rounded-full blur-2xl pointer-events-none group-hover:bg-amber-500/[0.05] transition-all" />

          <div className="flex justify-between items-start mb-6">
            <div className="p-3.5 bg-amber-500/10 rounded-2xl text-amber-400 border border-amber-500/20 shadow-inner">
              <Handshake size={24} />
            </div>
            <span className="text-[10px] font-mono text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded-full uppercase tracking-wider">
              Alliance
            </span>
          </div>

          <div>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-3">
              🤝 Гэрээ байгуулах
            </h3>
            <p className="text-sm text-[#F5DEB3]/70 font-light leading-relaxed">
              Сургууль, сургалтын төв, албан байгууллагуудтай{" "}
              <span className="text-white font-bold text-amber-400">
                хамтын ажиллагааны Харилцан Ойлголцлын Санамж бичиг
              </span>{" "}
              үзэглэж, эко сүлжээг урт хугацаанд тогтвортой ажиллуулна.
            </p>
          </div>

          <div className="mt-6 flex items-center gap-2 border-t border-white/5 pt-4 text-[10px] text-[#F5DEB3]/50">
            <Sparkles size={12} className="text-amber-400" />
            <span>Сургуулиудын нэгдмэл сүлжээ бий болгоно</span>
          </div>
        </motion.div>

        {/* 5. Summary / Countdown Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-[#D2691E]/10 border border-[#D2691E]/20 rounded-[2.5rem] p-6 flex flex-col justify-center items-center text-center relative overflow-hidden group hover:scale-[1.02] transition-transform"
        >
          {/* Subtle glow behind the metric */}
          <div className="absolute inset-0 bg-radial-gradient from-[#D2691E]/20 to-transparent pointer-events-none" />
          <div className="text-[#F4A460] font-black text-5xl tracking-tight mb-1 font-mono">
            2026
          </div>
          <div className="text-xs text-white uppercase font-bold tracking-[0.2em]">
            НОГООН ЗОРИЛТ
          </div>
          <p className="text-[10px] text-[#F5DEB3]/60 max-w-[180px] mt-2 leading-relaxed">
            Монгол орны цөлжилт уур амьсгалын өөрчлөлтийн эсрэг бодит үйл хэрэг
          </p>
        </motion.div>
      </div>
    </div>
  </div>
);

const EcoAcademySlide = ({ isActive }: SlideProps) => (
  <div className="h-full w-full relative overflow-hidden flex flex-col justify-center">
    {/* Decorative blur backdrop */}
    <div className="absolute right-10 top-1/4 w-96 h-96 bg-[#4CAF50]/10 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute left-10 bottom-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left side: Description */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-6 lg:col-span-5"
        >
          <div className="inline-block bg-[#4CAF50]/15 text-[#4CAF50] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.25em] border border-[#4CAF50]/20">
            Digital Education Platform
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tighter">
            ECO SYSTEM
            <br />
            <span className="text-[#4CAF50]">LEARNING HUB</span>
          </h2>
          <p className="text-lg text-[#F5DEB3]/80 leading-relaxed font-light">
            Сургуулийн сурагчдад эко систем, ургамал зүйн үндэс, хог хаягдлын
            зөв ангиллын боловсролыг хувийн хурцадмал бус хөгжилтэй, тоглоомжсон
            дижитал орчинд олгоно.
          </p>

          <div className="space-y-3.5 pt-2">
            {[
              {
                t: "Интерактив диаграммууд",
                d: "Цөлжилт болон шим мандлын эко сүлжээ зургууд",
              },
              {
                t: "Тоглоомжуулсан сорил",
                d: "Ургамал тарьж, оноо цуглуулах виртуал туршилт",
              },
              {
                t: "Нээлттэй мэдээллийн сан",
                d: "Төслийн явц, залуусын идэвх зүтгэлийн нэгдсэн хяналт",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white/[0.02] border border-white/5 px-5 py-3.5 rounded-2xl hover:bg-[#4CAF50]/10 hover:border-[#4CAF50]/20 transition-colors"
              >
                <div className="w-10 h-10 bg-[#4CAF50]/15 rounded-xl flex items-center justify-center text-[#4CAF50] font-bold shrink-0">
                  <Layout size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wide leading-tight">
                    {item.t}
                  </h4>
                  <p className="text-xs text-[#F5DEB3]/60 mt-0.5 leading-relaxed">
                    {item.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right side: Mock Educational Platform (Absolutely Stunning / Interactive Mockup with Cursor) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={isActive ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-7 relative group"
        >
          {/* Mock Browser Interface */}
          <div className="relative z-10 bg-[#160d05]/95 rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden aspect-[4/3] flex flex-col backdrop-blur-2xl">
            {/* Browser Tab/URL Bar */}
            <div className="bg-white/[0.04] px-5 py-4 flex items-center gap-4 border-b border-white/5 shrink-0">
              {/* Red / Yellow / Green window controls */}
              <div className="flex gap-1.5 shrink-0">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
              </div>

              {/* Fully styled mock URL bar */}
              <div className="bg-black/40 rounded-xl px-4 py-1.5 text-xs text-white/40 font-mono flex-1 flex items-center justify-between border border-white/5">
                <span>https://eco-academy.mn/learning-node</span>
                <span className="text-[#4CAF50] text-[9px] font-bold tracking-widest bg-[#4CAF50]/10 px-2 py-0.5 rounded-md">
                  SECURE SSL
                </span>
              </div>
            </div>

            {/* Browser Main Workspace */}
            <div className="p-6 flex-1 flex gap-4 bg-gradient-to-b from-[#140b04] to-[#121c13] overflow-hidden select-none relative">
              {/* Live Interactive elements within interface */}
              {/* Inside Browser Left Sidebar */}
              <div className="w-1/4 h-full border-r border-white/5 pr-4 flex flex-col gap-2 shrink-0">
                <div className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1 pl-2">
                  Хичээлүүд
                </div>
                <div className="bg-[#4CAF50]/15 text-[#4CAF50] p-2.5 rounded-xl text-[10px] font-bold uppercase tracking-wider pl-3 flex items-center gap-2 border border-[#4CAF50]/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4CAF50] animate-pulse" />
                  #1. Эко систем
                </div>
                <div className="text-white/60 p-2 text-[10px] uppercase font-bold pl-3 hover:bg-white/5 rounded-xl cursor-default">
                  #2. Хөрс сэргээлт
                </div>
                <div className="text-white/60 p-2 text-[10px] uppercase font-bold pl-3 hover:bg-white/5 rounded-xl cursor-default">
                  #3. Ус хамгаалал
                </div>
                <div className="mt-auto p-3 bg-black/40 rounded-2xl border border-white/5 text-center">
                  <div className="text-[10px] font-bold text-[#F4A460]">
                    LEVEL 4 [ECOLOGIST]
                  </div>
                  <div className="text-xs font-black text-white mt-1">
                    2,450 XP
                  </div>
                </div>
              </div>

              {/* Inside Browser Main Content Section */}
              <div className="flex-1 flex flex-col gap-4 overflow-hidden relative">
                {/* Header card of selected lesson */}
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl">
                  <span className="text-[9px] font-mono text-[#4CAF50] bg-[#4CAF50]/10 px-2 py-0.5 rounded uppercase font-bold">
                    Хүүхдэд зориулсан сорил
                  </span>
                  <h3 className="text-md font-black text-white mt-2 leading-none uppercase">
                    ЦӨЛЖИЛИЙГ ШИЙДЭХ НЬ
                  </h3>
                  <p className="text-[10px] text-[#F5DEB3]/60 mt-1 lines-clamp-1">
                    Элсний нүүдлийг ямар бүтэцтэй ургамал хамгийн сайн
                    хазаарладаг вэ?
                  </p>
                </div>

                {/* Ecosystem Web / Food cycle simulation built beautifully (STUNNING GRAPHIC DETAILS) */}
                <div className="bg-black/30 border border-white/5 rounded-2xl p-3 flex flex-col items-center justify-center min-h-[90px] relative overflow-hidden">
                  <div className="absolute inset-0 bg-grid-[#4CAF50]/5 bg-[size:10px_10px] pointer-events-none" />
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="flex flex-col items-center gap-0.5 scale-90">
                      <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-500">
                        <ThermometerSun size={18} />
                      </div>
                      <span className="text-[8px] font-bold text-amber-400 font-mono">
                        НАР
                      </span>
                    </div>
                    <div className="text-[#4CAF50]/30 animate-pulse text-xs shrink-0 font-mono">
                      ──▶
                    </div>
                    <div className="flex flex-col items-center gap-0.5 scale-90">
                      <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-500">
                        <Trees size={18} />
                      </div>
                      <span className="text-[8px] font-bold text-emerald-400 font-mono">
                        ЧАЦАРГАНА
                      </span>
                    </div>
                    <div className="text-[#4CAF50]/30 animate-pulse text-xs shrink-0 font-mono">
                      ──▶
                    </div>
                    <div className="flex flex-col items-center gap-0.5 scale-90">
                      <div className="w-10 h-10 rounded-full bg-[#D2691E]/20 border border-[#D2691E]/30 flex items-center justify-center text-[#F4A460]">
                        <Sprout size={18} />
                      </div>
                      <span className="text-[8px] font-bold text-[#F4A460] font-mono">
                        ХӨРС_СЭРГЭЭЛТ
                      </span>
                    </div>
                  </div>
                </div>

                {/* Fake Question Interactive quiz Block */}
                <div className="bg-black/35 rounded-2xl p-4 border border-white/5 space-y-2 relative">
                  <div className="text-[9px] text-[#F5DEB3]/50 font-bold uppercase tracking-wider">
                    Асуулт #12:
                  </div>
                  <div className="text-xs font-black text-white">
                    Мод тарих нь элсний шороон шуургыг хэрхэн дарах вэ?
                  </div>

                  <div className="space-y-1.5 pt-1">
                    {/* Option A */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-white/[0.01] border border-white/5 text-[10px]">
                      <span className="text-white/60">
                        A. Хөрсийг халааж, тэнгэр рүү уур амьсгалыг хөргөнө
                      </span>
                      <div className="w-3.5 h-3.5 rounded-full border border-white/20" />
                    </div>
                    {/* Option B: Selected / Correct Option */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-[#4CAF50]/5 border border-[#4CAF50]/40 text-[10px] relative">
                      <span className="text-white font-black">
                        B. Хөрсний үндсийг барьж, шороо урт болохоос сэргийлнэ
                      </span>
                      <div className="w-3.5 h-3.5 rounded-full bg-[#4CAF50] flex items-center justify-center text-white text-[9px] font-bold">
                        ✓
                      </div>

                      {/* Interactive Mouse Click Ripple effect inside mock interface */}
                      <div className="absolute top-1/2 left-3/4 -translate-y-1/2 pointer-events-none">
                        <div
                          className="w-12 h-12 bg-[#4CAF50]/20 rounded-full animate-ping absolute -top-6 -left-6"
                          style={{ animationDuration: "2s" }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* High-fidelity Mock Mouse Cursor */}
                <motion.div
                  animate={{
                    x: [180, 220, 200, 180],
                    y: [190, 160, 175, 190],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 6,
                    ease: "easeInOut",
                  }}
                  className="absolute text-emerald-400 drop-shadow-2xl z-40 pointer-events-none"
                >
                  <MousePointer2 size={24} className="fill-emerald-400" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Glow behind the browser frame */}
          <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-[#4CAF50]/5 blur-3xl rounded-full -z-10 group-hover:bg-[#4CAF50]/10 transition-all duration-700" />
          <div className="absolute -top-6 -left-6 w-72 h-72 bg-blue-500/5 blur-3xl rounded-full -z-10" />
        </motion.div>
      </div>
    </div>
  </div>
);

const MonthlyCompetitionsSlide = ({ isActive }: SlideProps) => {
  const comps = [
    {
      title: "Хог ангилалтын тэмцээн",
      desc: "Хамгийн зөв ангилсан анги шалгарна.",
      img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80",
      label: "09 САР: Waste Classify",
    },
    {
      title: "Ус хэмнэлтийн сорил",
      desc: "7 хоногт хамгийн бага ус хэрэглэсэн анги шалгарна.",
      img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80",
      label: "10 САР: Hydro Smart",
    },
    {
      title: "Ногоон ангийн тэмцээн",
      desc: "Ангидаа ургамал тарьж, хамгийн сайн арчилсан анги шалгарна.",
      img: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80",
      label: "11 САР: Green Room",
    },
    {
      title: "Хог хаягдалгүй өдөр",
      desc: "Бүтэн долоо хоног хог хаягдалгүй байсан анги шалгарна.",
      img: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80",
      label: "02 САР: Zero Waste",
    },
    {
      title: "Хуванцраас татгалзах сорил",
      desc: "Нэг сарын хугацаанд хуванцар хэрэглээгээ хамгийн их бууруулсан анги шалгарна.",
      img: "https://images.unsplash.com/photo-1618477431435-08169135061b?auto=format&fit=crop&q=80",
      label: "03 САР: No Plastic",
    },
    {
      title: "Дахин боловсруулалтын бүтээлч тэмцээн",
      desc: "Хаягдал материалаар хамгийн гоё бүтээл хийсэн анги шалгарна.",
      img: "https://images.unsplash.com/photo-1536859355448-76f92ebdc33d?auto=format&fit=crop&q=80",
      label: "04 САР: Upcycle Art",
    },
  ];

  return (
    <div className="h-full w-full relative overflow-hidden flex flex-col justify-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.01] grayscale" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="text-center mb-10">
          <span className="bg-[#D2691E]/10 border border-[#D2691E]/20 text-[#F4A460] px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase mb-3 inline-block">
            ИДЭВХТЭЙ ОРОЛЦОО
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-widest">
            Сар Бүрийн <span className="text-[#F4A460]">Тэмцээн & Сорилт</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {comps.map((comp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 95 }}
              className="group relative h-48 rounded-[2rem] overflow-hidden border border-white/5 hover:border-[#D2691E]/40 bg-black/40 transition-all cursor-pointer shadow-xl flex flex-col justify-between p-6"
            >
              <div className="absolute inset-0 opacity-40 group-hover:opacity-85 transition-all duration-700">
                <img
                  src={comp.img}
                  className="w-full h-full object-cover scale-105 group-hover:scale-100"
                  alt={comp.title}
                />
              </div>

              <div className="z-10 flex justify-between items-start">
                <span className="text-[9px] font-mono font-bold text-white/45 tracking-wider bg-white/5 border border-white/10 px-2.5 py-1 rounded">
                  {comp.label}
                </span>
                <span className="text-[9px] font-mono text-[#F4A460]/40 group-hover:text-[#F4A460] transition-colors uppercase">
                  ACTIVE ➔
                </span>
              </div>

              <div className="z-10 mt-4">
                <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-[#F4A460] transition-colors leading-snug">
                  {comp.title}
                </h3>
                <p className="text-[#F5DEB3]/70 text-[11px] leading-relaxed font-light">
                  {comp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

const AwardsSlide = ({ isActive }: SlideProps) => (
  <div className="h-full w-full relative overflow-hidden flex flex-col justify-center">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none flex items-center justify-center">
      <Award size={600} />
    </div>

    <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          className="text-6xl font-black text-white mb-4 uppercase tracking-tighter"
        >
          Шагнал <span className="text-[#D2691E]">&</span> Сертификат
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isActive ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="text-[#F4A460] text-xl font-light max-w-3xl mx-auto"
        >
          Сар бүрийн тэмцээнд ялагчдад зөвхөн шагнал биш, албан ёсны certificate
          гардуулна.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] shadow-2xl space-y-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <BookOpen className="text-[#D2691E]" size={40} />
            <h3 className="text-3xl font-bold text-white">
              🏫 Сургуулийн түвшин
            </h3>
          </div>
          <p className="text-[#F4A460] font-medium border-b border-[#D2691E]/30 pb-4">
            Сар бүр зохион байгуулагдах тэмцээн бүрийн ялагч анги болон
            сурагчдад:
          </p>
          <ul className="space-y-4">
            {[
              "Мерч болон шагнал гардуулна.",
              "Сургуулийн тамгатай албан ёсны сертификат олгоно.",
              "Сертификат нь сурагчийн портфолио болон ирээдүйн өргөдөлд ашиглагдах боломжтой.",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3 text-[#F5DEB3]">
                <div className="mt-2 w-2 h-2 bg-[#D2691E] rounded-full shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          className="bg-[#D2691E]/5 backdrop-blur-xl border border-[#D2691E]/30 p-10 rounded-[3rem] shadow-2xl space-y-6"
        >
          <div className="flex items-center gap-4 mb-4">
            <Landmark className="text-[#F4A460]" size={40} />
            <h3 className="text-3xl font-bold text-white">🏛️ Улсын түвшин</h3>
          </div>
          <p className="text-[#F4A460] font-medium border-b border-[#D2691E]/30 pb-4">
            Жилд нэг удаа сургуулиудын хооронд улсын хэмжээний тэмцээн зохион
            байгуулагдана:
          </p>
          <ul className="space-y-4">
            {[
              "Улсын хэмжээний тэмцээнд шилдэг ангиуд оролцоно.",
              "Ялагч сурагч, ангиудад Улсын Хүүхдийн Байгууллагын тамгатай улсын сертификат олгоно.",
              "Шилдэг төслүүдийг Үндэсний Ассамблей болон олон нийтэд танилцуулах боломж олгоно.",
              "Энэхүү сертификат нь дээд боловсролын байгууллагад элсэхэд давуу эрх олгох суурь болно.",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-3 text-[#F5DEB3]">
                <div className="mt-2 w-2 h-2 bg-[#F4A460] rounded-full shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.6 }}
        className="mt-16 text-center"
      >
        <div className="inline-flex items-center gap-4 bg-white/10 px-10 py-5 rounded-full border-2 border-[#D2691E]/30 backdrop-blur-md">
          <Star className="text-yellow-500 fill-yellow-500" size={24} />
          <span className="text-2xl font-black text-white italic tracking-tight uppercase">
            Зөвхөн цаас биш — ирээдүйн боломжийн түлхүүр!
          </span>
        </div>
      </motion.div>
    </div>
  </div>
);

const InternationalLevelSlide = ({ isActive }: SlideProps) => (
  <div className="h-full w-full relative overflow-hidden flex flex-col justify-center">
    <div className="absolute inset-0 bg-black/90 z-0" />
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187534963-565868af21f6?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.06] pointer-events-none z-0" />

    <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
      <div className="text-center mb-8">
        <span className="bg-[#D2691E]/10 border border-[#D2691E]/20 text-[#F4A460] px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase mb-3 inline-block">
          ОЛОН УЛСЫН ТҮВШИН
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-widest">
          Глобал <span className="text-[#F4A460]">Холбоос & Сүлжээ</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10 items-stretch">
        {/* Overview & Benefits */}
        <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isActive ? { opacity: 1, scale: 1 } : {}}
            className="bg-[#1C120B]/60 border border-[#D2691E]/15 p-6 rounded-[2.5rem] backdrop-blur-md flex-1"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2.5 bg-[#D2691E]/20 rounded-xl text-[#F4A460]">
                <Globe size={20} />
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                Глобал Платформын тухай
              </h3>
            </div>
            <p className="text-[#F5DEB3]/75 text-xs leading-relaxed font-light">
              SIA (Students in Action) олон улсын тэмцээн нь дэлхийн өнцөг булан
              бүрийн залуу эко манлайлагчдыг нэгтгэж, улс дамнасан хамтын
              ажиллагааны гүүр болно.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isActive ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.15 }}
            className="bg-white/5 border border-white/5 p-6 rounded-[2.5rem] backdrop-blur-md flex-1 mt-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-[#D2691E]/20 rounded-xl text-[#F4A460]">
                <Trophy size={20} />
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                Оролцогчдын Давуу Тал
              </h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#F5DEB3]/80 font-light">
              {[
                "Олон улсын тамгатай сертификат",
                "Сургалтын тэтгэлэгт хамрагдах үндэс",
                "Глобал залуучуудын сүлжээнд орох",
                "НҮБ-ын залуучуудын арга хэмжээний урилга",
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Leaf size={12} className="text-[#F4A460] shrink-0" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Timeline Steps */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isActive ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1 }}
            className="bg-black/30 border border-white/5 p-6 rounded-[2.5rem] backdrop-blur-md h-full flex flex-col justify-between"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-[#D2691E]/20 rounded-xl text-[#F4A460]">
                <ListChecks size={20} />
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                Шат Дараалсан Замнал
              </h3>
            </div>
            <div className="space-y-4 flex-1 flex flex-col justify-center">
              {[
                {
                  t: "Сургууль",
                  d: "Дотоодын шалгаруулалт, анхан шатны төслүүд.",
                },
                { t: "Аймаг / Хот", d: "Бүсийн шилдэг төслүүдийн уралдаан." },
                {
                  t: "Үндэсний Түвшин",
                  d: "Монгол улсын хэмжээн дэх шигшээ уулзалт.",
                },
                {
                  t: "Олон Улсын Тавцан",
                  d: "НҮБ-аар баталгаажсан дэлхийн хуралдаан.",
                },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-8 h-8 rounded-full bg-[#D2691E]/20 border border-[#D2691E] flex items-center justify-center text-white font-mono font-bold shrink-0 text-xs group-hover:bg-[#D2691E] transition-all">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xs uppercase tracking-wider">
                      {step.t}
                    </h4>
                    <p className="text-[10px] text-[#F5DEB3]/60 font-light">
                      {step.d}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </div>
);

const CausesSlide = ({ isActive }: SlideProps) => {
  const causes = [
    {
      icon: <ThermometerSun size={28} />,
      title: "Уур амьсгал",
      sub: "Global Warming",
      desc: "Дэлхийн температурын эрчимтэй өсөлт, хур тунадасны урт хугацааны хэт хомсдол.",
    },
    {
      icon: <Trees size={28} />,
      title: "Ой мод огтлолт",
      sub: "Deforestation",
      desc: "Моддыг ихээр устгаж хөрсийг салхи, тунадасны хамгаалалтгүй болгон хатаах.",
    },
    {
      icon: <Wind size={28} />,
      title: "Хэт бэлчээрлэлт",
      sub: "Overgrazing",
      desc: "Малын тоо толгой бэлчээрийн даацаас хэтэрч хөрсний ургамлан бүрхэвчийг талхлах.",
    },
    {
      icon: <Droplets size={28} />,
      title: "Усны буруу хэрэглээ",
      sub: "Water Mismanagement",
      desc: "Гадаргын сувгуудын зохисгүй хэрэглээ, гүрний болон гүний усны хомсдол.",
    },
    {
      icon: <AlertTriangle size={28} />,
      title: "Буруу тариалан",
      sub: "Soil Depletion",
      desc: "Хөрсийг тасралтгүй амралтгүй ашиглаж, үржил шимийг бүрэн алдагдуулах.",
    },
  ];

  return (
    <div className="h-full w-full relative overflow-hidden flex flex-col justify-center">
      {/* Dynamic ambient highlight */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#D2691E]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="text-center mb-10 relative z-10">
          <span className="inline-block bg-red-500/10 text-red-400 border border-red-500/25 text-[10px] uppercase tracking-[0.25em] px-4 py-1 rounded-full font-bold">
            Crisis Identification
          </span>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            className="text-5xl font-black text-white uppercase tracking-tighter mt-3"
          >
            ЦӨЛЖИЛТИЙН ГОЛ <span className="text-orange-500">ШАЛТГААНУУД</span>
          </motion.h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-[#D2691E] to-transparent mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 relative z-10">
          {causes.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isActive ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-[#1c1109]/70 backdrop-blur-md p-6 rounded-[2rem] border border-white/5 hover:border-[#D2691E]/30 hover:bg-[#1b120c]/90 transition-all duration-300 group flex flex-col justify-between h-80 relative"
            >
              {/* Corner accent serial index */}
              <span className="absolute top-4 right-4 text-[10px] font-mono text-white/20 group-hover:text-amber-500/50 transition-colors">
                [ 0{idx + 1} ]
              </span>

              <div>
                <div className="text-orange-400 mb-6 p-3.5 bg-[#D2691E]/10 rounded-2xl w-fit group-hover:scale-110 group-hover:bg-[#D2691E]/20 transition-all border border-[#D2691E]/20">
                  {item.icon}
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight mb-1">
                  {item.title}
                </h3>
                <p className="text-[10px] text-orange-400/60 font-mono font-bold uppercase tracking-wider mb-3">
                  {item.sub}
                </p>
              </div>

              <p className="text-xs text-[#F5DEB3]/75 font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Statistics / Telemetry banner to make the slide "with things" and very cool */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-8 bg-black/40 border border-white/5 rounded-2xl p-4 flex flex-col md:flex-row items-center justify-between gap-4 z-10"
        >
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shrink-0" />
            <span className="text-xs font-mono text-white/50 uppercase">
              Нөлөөллийн харьцаа:
            </span>
          </div>
          <div className="flex flex-wrap gap-6 text-[11px] font-bold uppercase text-[#F5DEB3]/70 font-mono">
            <div>
              🔥 Цаг уурын шууд хүчин зүйл:{" "}
              <span className="text-orange-500 font-bold">13%</span>
            </div>
            <div>
              🚜 Хүний буруутай үйл ажиллагаа:{" "}
              <span className="text-[#4CAF50] font-bold">87%</span>
            </div>
          </div>
          <div className="text-[10px] font-bold tracking-widest text-[#F4A460] bg-[#D2691E]/10 px-3 py-1 rounded-md border border-[#D2691E]/15">
            Хүний хүчин зүйл давамгайлж байна
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const SolutionsSlide = ({ isActive }: SlideProps) => (
  <div className="h-full w-full relative overflow-hidden flex flex-col justify-center">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.14] pointer-events-none" />
    {/* Ambient lighting */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/[0.04] rounded-full blur-3xl pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
      <div className="text-center mb-10">
        <span className="inline-block bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 text-[10px] uppercase tracking-[0.25em] px-4 py-1 rounded-full font-bold">
          Reclamation Tactics
        </span>
        <h2 className="text-5xl font-black text-white uppercase tracking-tighter mt-3">
          ШИЙДЛҮҮД:{" "}
          <span className="text-emerald-400">БИД ЮУ ХИЙЖ ЧАДАХ ВЭ?</span>
        </h2>
        <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {[
          {
            title: "Ойжуулалт",
            category: "ECO-RESTORATION",
            desc: "Цөлжилттэй бүсүүдэд олноор мод тарьж хөрсийг бэхжүүлэх, салхины хүчтэй нөлөөллийг зогсоох.",
            icon: <Leaf size={24} className="text-emerald-400" />,
          },
          {
            title: "Тогтвортой ХАА",
            category: "MANAGEMENT",
            desc: "Бэлчээрийн даацыг ухаалгаар зохицуулах, хөрсийг амраах, сэлгэж тариалах ухаалаг арга зүй.",
            icon: <ArrowRightLeft size={24} className="text-blue-400" />,
          },
          {
            title: "Усны хэмнэлт",
            category: "HYDRO-SYSTEMS",
            desc: "Говийн хөрсөнд тохиромжтой дуслын болон ухаалаг усалгааны дэвшилтэт хамгаалалтын систем.",
            icon: <Droplets size={24} className="text-[#F4A460]" />,
          },
          {
            title: "Эко Мэдлэг олгох",
            category: "ADVOCACY",
            desc: "Шинэ үеийнхэнд байгаль дэлхийгээ хамгаалах хандлага хэвшил олгож, экологийн боловсрол суулгах.",
            icon: <Globe size={24} className="text-sky-400" />,
          },
          {
            title: "Бодлого, хяналт",
            category: "REGULATION",
            desc: "Хууль эрх зүйн орчныг чангалж, мод бэлтгэл, бэлчээрийн доройтлыг төрийн хяналтаар журамлах.",
            icon: <AlertTriangle size={24} className="text-red-400" />,
          },
          {
            title: "Нөхөн сэргээлт",
            category: "RECLAMATION",
            desc: "Доройтсон газруудын экосистемийг байгалийн болон туслах механик аргуудаар сэргээн идэвхжүүлэх.",
            icon: <Wind size={24} className="text-purple-400" />,
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={isActive ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-[#101912]/50 backdrop-blur-md p-6 rounded-[2rem] border border-white/5 hover:border-emerald-500/30 hover:bg-[#101b13]/80 transition-all duration-300 group flex flex-col justify-between h-56 relative overflow-hidden"
          >
            {/* Subtle serialization */}
            <span className="absolute top-4 right-4 text-[10px] font-mono text-white/10 group-hover:text-emerald-500/50 transition-colors">
              [ 0{i + 1} ]
            </span>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-emerald-500/10 group-hover:scale-105 border border-white/5 group-hover:border-emerald-500/20 transition-all">
                  {item.icon}
                </div>
                <div>
                  <span className="text-[9px] text-emerald-400/60 font-mono font-bold uppercase tracking-wider block">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-black text-white uppercase tracking-tight group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-[#F5DEB3]/75 font-light leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Action tracker footer */}
            <div className="pt-2 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-[#F5DEB3]/40">
              <span>ACTIVE BLUEPRINT</span>
              <span className="scale-x-0 group-hover:scale-x-100 transition-transform duration-300 transform origin-right text-[#4CAF50] font-bold">
                READY ➔
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

// ComparisonSlide removed per user request

const NationalAssemblySlide = ({ isActive }: SlideProps) => (
  <div className="h-full w-full relative overflow-hidden flex flex-col justify-center">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521791136064-7986c2959213?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-[0.05] grayscale pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          className="space-y-8"
        >
          <div className="inline-block bg-[#D2691E]/20 text-[#F4A460] px-4 py-1 rounded-full text-xs font-bold uppercase tracking-[0.3em] mb-4">
            Decision Making Level
          </div>
          <h2 className="text-6xl font-black text-white leading-none">
            ҮНДЭСНИЙ
            <br />
            <span className="text-[#D2691E]">АССАМБЛЕЙ</span>
          </h2>
          <p className="text-xl text-[#F5DEB3]/80 leading-relaxed font-light">
            Бид өөрсдийн боловсруулан хэрэгжүүлсэн "Ногоон Ирээдүй" төслөө
            шийдвэр гаргах хамгийн дээд түвшинд танилцуулж, залуучуудын дуу
            хоолойг бодлогын түвшинд хүргэдэг.
          </p>
          <div className="space-y-4">
            {[
              {
                t: "Төслийн танилцуулга & Илтгэл",
                d: "Үр дүн, статистик мэдээллийг танилцуулах",
              },
              {
                t: "Бодлого боловсруулагчдад зөвлөмж хүргэх",
                d: "Хууль тогтоомжид залуучуудын саналыг тусгах",
              },
              {
                t: "Үндэсний хэмжээний сүлжээ үүсгэх",
                d: "Бусад сургууль, байгууллагуудтай хамтрах",
              },
              {
                t: "Шийдвэр гаргах үйл явдалд оролцох",
                d: "Экологийн боловсролыг заавал үзэх хөтөлбөрт оруулах",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white/5 px-6 py-4 rounded-2xl border-l-4 border-[#D2691E] group hover:bg-[#D2691E]/10 transition-colors"
              >
                <div className="w-10 h-10 bg-[#D2691E]/20 rounded-xl flex items-center justify-center text-[#F4A460] font-bold shrink-0">
                  0{i + 1}
                </div>
                <div>
                  <h4 className="text-white font-bold">{item.t}</h4>
                  <p className="text-sm text-[#F5DEB3]/60">{item.d}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isActive ? { opacity: 1, scale: 1 } : {}}
          className="relative"
        >
          <div className="relative z-10 rounded-[4rem] overflow-hidden border-8 border-white/5 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-700 aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80"
              className="w-full h-full object-cover"
              alt="Meeting"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-12">
              <Quote className="text-[#D2691E] mb-4" size={40} />
              <p className="text-2xl text-white font-bold italic leading-tight">
                "Залуучуудын оролцоо бол зөвхөн сонголт биш, энэ бол зайлшгүй
                шаардлага юм."
              </p>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#D2691E]/20 blur-3xl -z-10" />
          <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500/20 blur-3xl -z-10" />

          {/* Floating badge */}
          <div className="absolute -right-8 top-20 bg-white p-6 rounded-3xl shadow-2xl z-20 rotate-12 animate-bounce">
            <Landmark className="text-[#D2691E]" size={40} />
          </div>

          {/* New Goal Badge */}
          <div className="absolute left-0 -bottom-10 bg-[#1A0F05] p-6 rounded-3xl shadow-2xl z-20 border border-white/10 max-w-[200px]">
            <p className="text-[#F4A460] font-black text-3xl mb-1">2026</p>
            <p className="text-[10px] text-white uppercase font-bold tracking-widest leading-tight">
              Үндэсний хэмжээний хөтөлбөрт багтах зорилт
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

const SIADetailsSlide = ({ isActive }: SlideProps) => {
  const pillars = [
    {
      title: "Эко Манлайлал",
      sub: "Eco Leadership",
      desc: "Шинэ үеийн сурагчдыг сургалт, уралдаанаар дамжуулан байгаль орчны эко манлайлагч болгон бэлтгэж, портфолиог нь олон улсын түвшинд баталгаажуулна.",
      stats: "92% Илүү идэвхтэй оролцоо",
      color:
        "border-orange-500/20 text-orange-400 bg-orange-500/5 hover:border-orange-500/40",
    },
    {
      title: "Эргэх Холбоот Логистик",
      sub: "Circular Recycling",
      desc: "ЕБС-ийн сургуулиудад дахивар хуванцар цуглуулах ухаалаг эко Хайрцаг байршуулан, тээвэрлэлт ба боловсруулалтын нэгдсэн сүлжээг үүсгэсэн салбар.",
      stats: "2.4 тонн дахивар хуванцар",
      color:
        "border-emerald-500/20 text-emerald-400 bg-emerald-500/5 hover:border-emerald-500/40",
    },
    {
      title: "Дижитал Платформ",
      sub: "Gamified Tech Hub",
      desc: "Сурагчид өөрсдийн хийсэн байгальд ээлтэй үйлдлүүдээс XP хуримтлуулж, хувийн амжилтаа хянах, эко тэмцээний үр дүнгээ бодитоор харах ухаалаг систем.",
      stats: "450+ Бүртгэлтэй эко сурагчид",
      color:
        "border-sky-500/20 text-sky-400 bg-sky-500/5 hover:border-sky-500/40",
    },
    {
      title: "Олон Улсын Холбоос",
      sub: "Global Network Link",
      desc: "НҮБ-ын ТХЗ-д нийцүүлэн, дотоодын шилдэг төслүүдийг олон улсын тавцанд танилцуулж, сурагчдыг гадаадын тэтгэлэгт замаар хөтлөх гүүр хөтөлбөр.",
      stats: "100% Олон улсын сертификат",
      color:
        "border-amber-500/20 text-amber-400 bg-amber-500/5 hover:border-amber-500/40",
    },
  ];

  return (
    <div className="h-full w-full relative overflow-hidden flex flex-col justify-center">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.015] pointer-events-none overflow-hidden select-none">
        <div className="text-[25rem] font-black text-white absolute -top-40 -left-45">
          SIA
        </div>
      </div>
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="text-center mb-10">
          <span className="bg-[#D2691E]/10 border border-[#D2691E]/20 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest text-[#F4A460] inline-block mb-3">
            SIA СТРАТЕГИЙН ТҮЛХҮҮР
          </span>
          <h2 className="text-5xl font-black text-white uppercase tracking-tight leading-none mb-4">
            STUDENTS IN <span className="text-[#F4A460]">ACTION_</span>
          </h2>
          <p className="text-sm text-[#F5DEB3]/60 max-w-2xl mx-auto font-light">
            SIA бол зөвхөн хөтөлбөр биш. Энэ бол хүүхэд залуусын эко оролцоог
            системчилсэн, технологиор дэмжсэн олон улсын хамтын ажиллагааны
            ухаалаг экосистем юм.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Detailed Left Panel: Platform metrics and detailed summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isActive ? { opacity: 1, x: 0 } : {}}
            className="lg:col-span-5 bg-gradient-to-br from-[#1A0F05]/90 to-[#100A03]/90 border border-[#D2691E]/20 p-8 rounded-[2.5rem] flex flex-col justify-between backdrop-blur-md shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D2691E]/5 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#D2691E]/15 rounded-2xl border border-[#D2691E]/20">
                  <ShieldCheck size={24} className="text-[#F4A460]" />
                </div>
                <div>
                  <h3 className="text-white font-black text-lg uppercase tracking-tight">
                    SIA Интеграци
                  </h3>
                  <span className="text-[10px] font-mono text-[#F4A460]/70 uppercase tracking-widest">
                    ECOSYSTEM CERTIFIED
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-xs text-[#F5DEB3]/80 leading-relaxed font-light">
                  Бид залуу үед байгаль дэлхийгээ хайрлах мэдлэгийг онолоор биш,
                  бодит дадал хэвшил болгон олгож байна. Сургуулиудад эко соёл
                  түгүүлэх шинэлэг загварыг боловсруулсан.
                </p>
                <p className="text-xs text-[#F5DEB3]/80 leading-relaxed font-light">
                  Гар утасны болон вэб платформ, сургууль бүрийн орон нутгийн
                  клуб, олон улсын хамтрагч талуудыг нэг сүлжээнд оруулснаар үр
                  дүнг <b>100% блокчэйн мэт баталгаажуулж</b> чадна.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
              <div className="text-[10px] font-mono text-[#F4A460] font-bold uppercase tracking-wider">
                Салбарын гүйцэтгэлийн үзүүлэлт:
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl hover:bg-white/[0.04] transition-colors">
                  <span className="text-[9px] font-mono text-[#F5DEB3]/40 uppercase block">
                    Орон нутагт
                  </span>
                  <span className="text-2xl font-black text-white">4 Зүгт</span>
                  <p className="text-[9px] text-[#F4A460]/75 mt-1 font-mono">
                    АЙМАГ БҮРҮҮДЭД
                  </p>
                </div>
                <div className="bg-white/[0.02] border border-white/5 p-4 rounded-2xl hover:bg-white/[0.04] transition-colors">
                  <span className="text-[9px] font-mono text-[#F5DEB3]/40 uppercase block">
                    Хэрэгжилт
                  </span>
                  <span className="text-2xl font-black font-mono text-emerald-400">
                    ЛАЙВ
                  </span>
                  <p className="text-[9px] text-[#F5DEB3]/50 mt-1 font-mono">
                    100% АШИГЛАЛТ
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Panel: Beautiful list of detailed columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={isActive ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * idx, duration: 0.5 }}
                className={`border p-6 rounded-[2rem] flex flex-col justify-between backdrop-blur-md group hover:bg-white/[0.02] transition-all duration-300 relative overflow-hidden ${pillar.color}`}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/[0.01] rounded-full blur-xl pointer-events-none group-hover:scale-150 transition-transform" />

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-white/30">
                      Pillar_0{idx + 1}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest bg-white/[0.05] px-2.5 py-1 rounded-full">
                      {pillar.sub}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-white group-hover:text-white transition-colors mb-2 uppercase">
                    {pillar.title}
                  </h3>
                  <p className="text-[11px] text-[#F5DEB3]/70 font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-[9px] font-mono text-emerald-400">
                  <span className="uppercase text-white/45">ГОЛ ҮЗҮҮЛЭЛТ:</span>
                  <span className="font-bold uppercase">{pillar.stats} ➔</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const WarningSlide = ({ isActive }: SlideProps) => (
  <div className="h-full w-full relative overflow-hidden flex flex-col justify-center bg-black">
    <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col items-center justify-center">
      <div className="max-w-4xl relative">
        <motion.div
          initial={{ opacity: 0, scale: 2 }}
          animate={isActive ? { opacity: 0.1, scale: 1 } : {}}
          transition={{ duration: 2 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <AlertTriangle size={400} className="text-red-900" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 1 }}
          className="z-10 relative text-center"
        >
          <Quote className="text-[#D2691E] mx-auto mb-8" size={60} />
          <h2 className="text-6xl font-black text-red-700 mb-8 uppercase">
            Ирээдүйн Анхааруулга
          </h2>
          <p className="text-3xl text-gray-300 italic mb-12 leading-relaxed">
            "Хөрс бол амьдралын үндэс. Хөрс үгүй бол хүн төрөлхтөн үгүй."
          </p>
          <div className="inline-block bg-red-950 p-8 border-2 border-red-900 rounded-2xl">
            <p className="text-[#F5DEB3] text-xl">
              2050 он гэхэд дэлхийн хүн амын 75% нь хуурайшилт, цөлжилттэй нүүр
              тулна. Одоо л арга хэмжээ авах цаг.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

const ConclusionSlide = ({ isActive }: SlideProps) => (
  <div className="h-full w-full relative overflow-hidden flex flex-col justify-center">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80')] bg-cover bg-center brightness-[0.3] pointer-events-none" />

    <div className="max-w-7xl mx-auto px-6 w-full text-center relative z-10 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isActive ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1 }}
        className="z-10 max-w-4xl"
      >
        <Leaf className="text-[#4CAF50] mx-auto mb-8" size={80} />
        <h2 className="text-6xl font-bold text-white mb-6 uppercase">
          Бид хамтдаа чадна
        </h2>
        <p className="text-3xl text-[#F5DEB3] mb-12 font-light">
          Байгалиа хайрлаж, ирээдүй хойчдоо өвлүүлэн үлдээцгээе.
        </p>

        <div className="text-4xl font-black text-[#4CAF50] tracking-widest bg-white/5 py-4 px-12 rounded-full border-2 border-[#4CAF50]/30 backdrop-blur-md">
          БИДНИЙ ИРЭЭДҮЙ БИДНИЙ ГАРТ
        </div>

        <p className="mt-20 text-[#D2B48C] font-semibold text-lg">
          © 2026 Цөлжилттэй тэмцэх аян
        </p>
      </motion.div>
    </div>
  </div>
);

// --- Procedural Gobi Desert Ambient Sound Generator (Web Audio API) ---
class AmbientAudioEngine {
  private ctx: AudioContext | null = null;
  private noiseSource: AudioBufferSourceNode | null = null;
  private filterNode: BiquadFilterNode | null = null;
  private mainGain: GainNode | null = null;
  private synthOscs: { osc: OscillatorNode; gainNode: GainNode }[] = [];
  private timers: number[] = [];
  public isPlaying = false;

  public start() {
    if (this.isPlaying) return;
    try {
      const AudioContextClass =
        window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioContextClass();
      this.mainGain = this.ctx.createGain();
      this.mainGain.gain.setValueAtTime(0, this.ctx.currentTime);
      this.mainGain.connect(this.ctx.destination);

      // --- Wind Noise (Modulated Lowpass White Noise) ---
      const bufferSize = 2 * this.ctx.sampleRate;
      const noiseBuffer = this.ctx.createBuffer(
        1,
        bufferSize,
        this.ctx.sampleRate,
      );
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      this.noiseSource = this.ctx.createBufferSource();
      this.noiseSource.buffer = noiseBuffer;
      this.noiseSource.loop = true;

      this.filterNode = this.ctx.createBiquadFilter();
      this.filterNode.type = "lowpass";
      this.filterNode.Q.setValueAtTime(2.2, this.ctx.currentTime);
      this.filterNode.frequency.setValueAtTime(180, this.ctx.currentTime);

      this.noiseSource.connect(this.filterNode);

      // Low Frequency Oscillator for wind gusts
      const lfo = this.ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.07, this.ctx.currentTime); // very slow cycle
      const lfoGain = this.ctx.createGain();
      lfoGain.gain.setValueAtTime(90, this.ctx.currentTime);
      lfo.connect(lfoGain);
      lfoGain.connect(this.filterNode.frequency);

      const windGain = this.ctx.createGain();
      windGain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      this.filterNode.connect(windGain);
      windGain.connect(this.mainGain);

      this.noiseSource.start(0);
      lfo.start(0);

      // --- Afforestation Slow Harmony (Pentatonic Pad) ---
      const freqs = [110, 165, 220, 275, 330]; // Pentatonic scale notes (A, E, A, C#, E)
      this.synthOscs = freqs.map((freq, i) => {
        const osc = this.ctx!.createOscillator();
        const gainNode = this.ctx!.createGain();

        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, this.ctx!.currentTime);
        osc.detune.setValueAtTime(
          (Math.random() - 0.5) * 10,
          this.ctx!.currentTime,
        );

        gainNode.gain.setValueAtTime(0, this.ctx!.currentTime);
        osc.connect(gainNode);

        const lp = this.ctx!.createBiquadFilter();
        lp.type = "lowpass";
        lp.frequency.setValueAtTime(320, this.ctx!.currentTime);
        gainNode.connect(lp);
        lp.connect(this.mainGain!);

        osc.start(0);
        this.swell(gainNode, i * 2.0);

        return { osc, gainNode };
      });

      this.mainGain.gain.linearRampToValueAtTime(
        0.4,
        this.ctx.currentTime + 3.0,
      );
      this.isPlaying = true;
    } catch (e) {
      console.warn("Unable to initialize procedural audio context", e);
    }
  }

  private swell(gainNode: GainNode, delay: number) {
    if (!this.ctx || !this.isPlaying) return;
    const now = this.ctx.currentTime;
    const swellLength = 8 + Math.random() * 4;

    gainNode.gain.setValueAtTime(0, now);
    gainNode.gain.linearRampToValueAtTime(0, now + delay);
    gainNode.gain.linearRampToValueAtTime(
      0.02 + Math.random() * 0.03,
      now + delay + swellLength * 0.4,
    );
    gainNode.gain.linearRampToValueAtTime(0, now + delay + swellLength);

    const tid = window.setTimeout(
      () => {
        if (this.isPlaying) {
          this.swell(gainNode, 0);
        }
      },
      (delay + swellLength) * 1000,
    );
    this.timers.push(tid);
  }

  public stop() {
    this.isPlaying = false;
    this.timers.forEach(clearTimeout);
    this.timers = [];

    if (this.ctx) {
      try {
        this.mainGain?.gain.linearRampToValueAtTime(
          0,
          this.ctx.currentTime + 1.0,
        );
        const savedCtx = this.ctx;
        window.setTimeout(() => {
          try {
            this.noiseSource?.stop();
            this.synthOscs.forEach((item) => item.osc.stop());
            savedCtx.close();
          } catch (e) {}
        }, 1100);
      } catch (e) {}
      this.ctx = null;
    }
  }
}

const slideMeta = [
  { title: "Эхлэл нүүр", desc: "Аяны нээлт, гол сүнс ба мэдээлэл", icon: "🌱" },
  {
    title: "Багийн хамт олон",
    desc: "Хамтран зүтгэгч соён гэгээрүүлэгч залуус",
    icon: "👥",
  },
  {
    title: "Төслийн үндсэн чиглэл",
    desc: "Сургууль, хүнс, судалгаа, нөлөөллийн ажил",
    icon: "🎯",
  },
  {
    title: "Үндсэн асуудлууд",
    desc: "Аюулт цөлжилт болон хөрсний элэгдэл",
    icon: "🌋",
  },
  {
    title: "Шалтгаант нөлөө",
    desc: "Байгалийн хүчин зүйлс ба хүний үйл ажиллагаа",
    icon: "⚠️",
  },
  {
    title: "Хэтийн зорилго",
    desc: "Хуванцрын дахин боловсруулалт ба ойжуулалт",
    icon: "⛳",
  },
  {
    title: "Боломжит шийдэл",
    desc: "Экологийн цогц тактик, урт хугацааны үр дүн",
    icon: "💡",
  },
  {
    title: "Тогтвортой хөгжил (SDG 15)",
    desc: "Хуурай газрын экосистемийг хамгаалах сүлжээ",
    icon: "🌍",
  },
  {
    title: "Төлөвлөгөөт үйл ажиллагаа",
    desc: "Соён гэгээрүүлэх сургалт ба бодит ургацууд",
    icon: "📝",
  },
  {
    title: "Харьцуулсан харах цонх",
    desc: "Тал нутгийн доройтлын дүн шинжилгээ",
    icon: "📊",
  },
  {
    title: "SIA шинжилгээ",
    desc: "Нийгэм ба эдийн засагт үзүүлэх нөлөөллийн үнэлгээ",
    icon: "🔬",
  },
  {
    title: "SIA дэлгэрэнгүй",
    desc: "Соёл, эрүүлийн эрсдэлүүдийг үгүй хийх хасалт",
    icon: "🕵️",
  },
  {
    title: "Залуусын чуулган",
    desc: "Хуванцар цуглуулалтын цогц тогтвортой мөчлөг",
    icon: "🤝",
  },
  {
    title: "Эзэмшсэн ур чадвар",
    desc: "Олж авсан байгалийн халамж ба урам зориг",
    icon: "🎓",
  },
  {
    title: "Төслийн өргөжин тэлэлт",
    desc: "Сайжруулан дарах ухаалаг схемийн урсгал",
    icon: "✈️",
  },
  {
    title: "Ирээдүйн алхмууд",
    desc: "Эхний 5 жилийн дараалсан үр дүнтэй үйлсүүд",
    icon: "🚀",
  },
  {
    title: "Эко Академи",
    desc: "Багачуудын оюунд ногоон сэтгэлгээг суулгах ая",
    icon: "🏫",
  },
  {
    title: "Уралдаан тэмцээнүүд",
    desc: "Сургууль даяарх сар бүрийн бүтээлч сорилтууд",
    icon: "🏆",
  },
  {
    title: "Идэвхжүүлэх шагналын сан",
    desc: "Урам зориг өгөх, шилдэг ангиудыг шагнах систем",
    icon: "🎁",
  },
  {
    title: "Олон улсын жишиг загвар",
    desc: "Ногоон Хэрэм ба Сахелийн сургамжит арга замууд",
    icon: "🌐",
  },
  {
    title: "Санхүүжилт төсөв",
    desc: "Нийт төсвийн хуваарилалт, боломжууд",
    icon: "💰",
  },
  {
    title: "Алсын хараа",
    desc: "Эхний 20 жилийн стратеги төлөвлөгөө",
    icon: "🔭",
  },
  {
    title: "Сэрэмжлүүлэг анхааруулга",
    desc: "Бид засаж чадах хамтын хариуцлагатай ирээдүй",
    icon: "🚨",
  },
  {
    title: "Төгсгөлийн дүгнэлт",
    desc: "Ногоон цагариг сүлжээг хамтдаа цогцлооё",
    icon: "🌟",
  },
];

// --- Main Presentation Shell ---

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isAmbientPlaying, setIsAmbientPlaying] = useState(false);
  const ambientEngineRef = useRef<AmbientAudioEngine | null>(null);

  const slides = [
    <TitleSlide isActive={true} />,
    <TeammatesSlide isActive={true} />,
    <FocusSlide isActive={true} />,
    <IssuesChallengesSlide isActive={true} />,
    <CausesSlide isActive={true} />,
    <GoalsObjectivesSlide isActive={true} />,
    <SolutionsSlide isActive={true} />,
    <SDGSlide isActive={true} />,
    <ActivitiesSlide isActive={true} />,
    <SIASlide isActive={true} />,
    <SIADetailsSlide isActive={true} />,
    <NationalAssemblySlide isActive={true} />,
    <SkillsSlide isActive={true} />,
    <ExpansionSlide isActive={true} />,
    <FutureTasksSlide isActive={true} />,
    <EcoAcademySlide isActive={true} />,
    <MonthlyCompetitionsSlide isActive={true} />,
    <AwardsSlide isActive={true} />,
    <InternationalLevelSlide isActive={true} />,
    <FinanceSlide isActive={true} />,
    <VisionSlide isActive={true} />,
    <WarningSlide isActive={true} />,
    <ConclusionSlide isActive={true} />,
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  // Toggle ambient Soundscape
  const toggleAmbient = () => {
    if (!ambientEngineRef.current) {
      ambientEngineRef.current = new AmbientAudioEngine();
    }
    const engine = ambientEngineRef.current;
    if (engine.isPlaying) {
      engine.stop();
      setIsAmbientPlaying(false);
    } else {
      engine.start();
      setIsAmbientPlaying(true);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore key events when the user is typing in the search bar
      if (document.activeElement?.tagName === "INPUT") return;

      if (e.key === "ArrowRight" || e.key === " ") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key.toLowerCase() === "m") setIsMenuOpen((prev) => !prev);
      if (e.key.toLowerCase() === "a") toggleAmbient();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      ambientEngineRef.current?.stop();
    };
  }, []);

  // Filtered slides based on search
  const filteredIndexes = slideMeta
    .map((meta, index) => ({ ...meta, index }))
    .filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase()),
    );

  const handleContainerClick = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    if (
      target.closest("button") ||
      target.closest("a") ||
      target.closest("input") ||
      target.closest('[role="button"]') ||
      target.closest(".pointer-events-auto")
    ) {
      return;
    }
    const width = window.innerWidth;
    if (e.clientX > width / 2) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  return (
    <div className="fixed inset-0 bg-[#1A0F05] text-[#F5DEB3] font-sans selection:bg-[#D2691E] selection:text-white overflow-hidden select-none">
      <SandParticles />

      {/* Slide Container */}
      <div
        onClick={handleContainerClick}
        className="relative w-full h-full cursor-pointer"
        title="Зүүн талд дарж ухрах, баруун талд дарж урагшлах"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-full h-full"
          >
            {slides[currentSlide]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Index / HUD Quick Navigation Sidebar Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Dark glass backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="absolute inset-0 bg-[#0c0602] backdrop-blur-sm z-[90] cursor-pointer"
            />

            {/* Sidebar drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 120 }}
              className="absolute left-0 top-0 bottom-0 w-full max-w-md bg-[#120b06]/95 border-r border-[#D2691E]/20 backdrop-blur-xl z-[100] shadow-[10px_0_40px_rgba(0,0,0,0.8)] p-8 flex flex-col justify-between"
            >
              <div className="space-y-6 flex-1 flex flex-col min-h-0">
                {/* Header of indexing board */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-[#D2691E]/15 border border-[#D2691E]/20 text-orange-400 rounded-xl">
                      <Layout size={18} />
                    </div>
                    <div>
                      <h4 className="text-md font-black text-white tracking-widest uppercase">
                        СЛАЙД СҮЛЖЭЭ
                      </h4>
                      <p className="text-[10px] font-mono text-[#F4A460]/60 uppercase tracking-widest">
                        Interactive HUD Index
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 border border-white/5 hover:border-[#D2691E]/30 bg-white/5 hover:bg-white/10 rounded-xl transition-all cursor-pointer text-[#F5DEB3]"
                  >
                    <X size={16} />
                  </button>
                </div>

                {/* Live Keyword Search Input Box */}
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Хуудасны түлхүүр үгээр хайх..."
                    className="w-full bg-black/45 border border-white/10 hover:border-[#D2691E]/30 focus:border-[#D2691E] focus:outline-none focus:ring-0 text-sm leading-relaxed px-5 py-3 rounded-2xl text-white font-light placeholder:text-[#F5DEB3]/30 transition-all font-sans"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery("")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-orange-400 hover:text-white transition-colors"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Slide index map scroll area */}
                <div className="flex-1 overflow-y-auto pr-3 space-y-2.5 custom-scrollbar">
                  {filteredIndexes.length > 0 ? (
                    filteredIndexes.map((item) => (
                      <button
                        key={item.index}
                        onClick={() => {
                          setCurrentSlide(item.index);
                          setIsMenuOpen(false);
                        }}
                        className={`w-full text-left p-4 rounded-2xl flex items-start gap-4 transition-all duration-300 group/btn border cursor-pointer ${
                          currentSlide === item.index
                            ? "bg-[#D2691E]/15 border-[#D2691E] text-white shadow-lg"
                            : "bg-black/20 hover:bg-white/5 border-white/5 hover:border-white/10 text-[#F5DEB3]/80"
                        }`}
                      >
                        <span className="text-lg leading-none shrink-0 filter drop-shadow">
                          {item.icon}
                        </span>

                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center">
                            <span
                              className={`text-xs font-black uppercase tracking-wider group-hover/btn:text-orange-400 transition-colors ${currentSlide === item.index ? "text-orange-400" : "text-white"}`}
                            >
                              {item.title}
                            </span>
                            <span className="text-[9px] font-mono font-bold text-white/30 tracking-tight">
                              [ {String(item.index + 1).padStart(2, "0")} ]
                            </span>
                          </div>

                          <p className="text-[10px] text-[#F5DEB3]/50 font-light mt-1 truncate group-hover/btn:text-[#F5DEB3]/80 transition-colors">
                            {item.desc}
                          </p>
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="py-12 text-center text-wheat/40 text-xs font-mono select-none">
                      Бүртгэгдсэн слайд олдсонгүй
                    </div>
                  )}
                </div>
              </div>

              {/* Back branding tag */}
              <div className="mt-6 pt-5 border-t border-white/5 flex justify-between items-center text-[10px] font-mono text-wheat/30 select-none">
                <span>ЦӨЛЖИЛТТЭЙ ТЭМЦЭХ АЯН</span>
                <span>VER 2.5</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Modern Overlay Gradient */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_200px_rgba(0,0,0,0.8)]" />
    </div>
  );
}
