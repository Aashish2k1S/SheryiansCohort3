import { useState } from "react";
import {
  LayoutDashboard,
  CheckSquare,
  Users,
  MessageSquare,
  Settings,
  Plus,
  Search,
  Bell,
  Grid,
  ChevronDown,
  Sparkles,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  FileEdit,
  CheckCircle2,
  UserPlus,
  X,
  Menu,
} from "lucide-react";

const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const barData = [
    { day: "Mon", height: "h-28" },
    { day: "Tue", height: "h-36" },
    { day: "Wed", height: "h-32" },
    { day: "Thu", height: "h-48", highlight: true },
    { day: "Fri", height: "h-24" },
    { day: "Sat", height: "h-20" },
    { day: "Sun", height: "h-20" },
  ];

  const teamMembers = [
    {
      name: "Sarah J.",
      status: "In Meeting",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
    },
    {
      name: "Alex M.",
      status: "Coding",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    },
    {
      name: "Elena R.",
      status: "Design Review",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    },
    {
      name: "Marcus L.",
      status: "Out of Office",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80",
    },
  ];

  const activities = [
    {
      id: 1,
      icon: <FileEdit className="w-3.5 h-3.5 text-purple-200" />,
      iconBg: "bg-purple-600/30 text-purple-400",
      text: "Sarah updated Landing Page Redesign",
      time: "2 hours ago",
    },
    {
      id: 2,
      icon: <CheckCircle2 className="w-3.5 h-3.5 text-indigo-200" />,
      iconBg: "bg-indigo-600/30 text-indigo-400",
      text: "Alex completed API Integration",
      time: "5 hours ago",
    },
    {
      id: 3,
      icon: <UserPlus className="w-3.5 h-3.5 text-amber-200" />,
      iconBg: "bg-amber-600/30 text-amber-400",
      text: "New member joined Design Team",
      time: "Yesterday",
    },
    {
      id: 4,
      icon: <AlertTriangle className="w-3.5 h-3.5 text-red-200" />,
      iconBg: "bg-red-600/30 text-red-400",
      text: "Server alert: High latency detected",
      time: "Yesterday",
    },
  ];

  const navLinks = [
    { label: "Dashboard", icon: LayoutDashboard, active: true },
    { label: "Tasks", icon: CheckSquare, active: false },
    { label: "Team", icon: Users, active: false },
    { label: "Chat", icon: MessageSquare, active: false },
    { label: "Settings", icon: Settings, active: false },
  ];

  return (
    <div className="flex min-h-screen bg-[#0d0d12] text-slate-300 font-sans antialiased overflow-x-hidden">
      {/* Mobile Drawer Backdrop */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
        />
      )}

      {/* Permanently Fixed Sidebar Across All Breakpoints */}
      <aside
        className={`fixed top-0 left-0 h-screen z-50 w-64 md:w-56 lg:w-64 border-r border-[#1e1e2d] p-5 md:p-6 flex flex-col justify-between bg-[#0e0e15] transition-transform duration-300 ease-in-out ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
      >
        <div className="space-y-6">
          {/* Header & Mobile Close */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-base font-semibold text-white tracking-wide">
                Synthetix AI
              </h1>
              <p className="text-xs text-slate-500 mt-0.5">Enterprise Workspace</p>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white md:hidden"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1 text-sm font-medium">
            {navLinks.map((item) => (
              <a
                key={item.label}
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${item.active
                    ? "bg-[#191926] text-white font-medium shadow-sm"
                    : "text-slate-400 hover:text-white hover:bg-[#151520]"
                  }`}
              >
                <item.icon
                  className={`w-4 h-4 ${item.active ? "text-purple-400" : "text-slate-400"
                    }`}
                />
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Sidebar Action Button */}
        <div>
          <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#6355d8] hover:bg-[#5244c9] text-white font-medium text-sm transition-all shadow-lg shadow-purple-900/20 active:scale-[0.98]">
            <Plus className="w-4 h-4" />
            New Task
          </button>
        </div>
      </aside>

      {/* Main Content Area: Offset with matching margin on tablet/desktop */}
      <div className="flex-1 flex flex-col min-w-0 md:ml-56 lg:ml-64">
        {/* Top Navbar */}
        <header className="sticky top-0 z-30 h-16 border-b border-[#1e1e2d] px-4 sm:px-6 lg:px-8 flex items-center justify-between bg-[#0e0e15]/80 backdrop-blur-md">
          {/* Mobile Menu Toggle & Search Bar */}
          <div className="flex items-center gap-3 flex-1 max-w-md">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-slate-400 hover:text-white hover:bg-[#1c1c2b] rounded-lg transition"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-sm">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Search workspace..."
                className="w-full bg-[#161622] border border-[#242436] rounded-xl pl-9 pr-4 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-all"
              />
            </div>
          </div>

          {/* Right Header Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 ml-2">
            <button className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-[#1c1c2b] transition">
              <Bell className="w-4 h-4" />
            </button>
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-semibold px-2 py-1 bg-[#1a1a29] border border-[#26263b] rounded-lg text-slate-300">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>RK</span>
            </div>
            <button className="hidden sm:block text-slate-400 hover:text-white p-2 rounded-lg hover:bg-[#1c1c2b] transition">
              <Grid className="w-4 h-4" />
            </button>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-purple-500/40">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </header>

        {/* Dashboard Body */}
        <main className="p-4 sm:p-6 lg:p-8 space-y-6 max-w-7xl 2xl:max-w-[1600px] w-full mx-auto">
          {/* Greeting Section */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
              Good morning, Devendra <span className="text-2xl">👋</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Here's what's happening in Synthetix AI today.
            </p>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Total Tasks */}
            <div className="bg-[#14141f] border border-[#202030] rounded-2xl p-5 hover:border-[#2d2d44] transition-all">
              <div className="flex items-center justify-between text-xs">
                <div className="p-2 rounded-lg bg-[#1f1f2e] text-slate-400">
                  <CheckSquare className="w-4 h-4" />
                </div>
                <span className="text-emerald-400 font-semibold flex items-center gap-0.5 text-[11px]">
                  +12%
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-4">Total Tasks</p>
              <h3 className="text-2xl font-bold text-white mt-0.5">128</h3>
            </div>

            {/* Completed Tasks */}
            <div className="bg-[#14141f] border border-[#202030] rounded-2xl p-5 hover:border-[#2d2d44] transition-all">
              <div className="flex items-center justify-between text-xs">
                <div className="p-2 rounded-lg bg-[#1f1f2e] text-slate-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-emerald-400 font-semibold flex items-center gap-0.5 text-[11px]">
                  +5%
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-4">Completed Tasks</p>
              <h3 className="text-2xl font-bold text-white mt-0.5">94</h3>
            </div>

            {/* Active Projects */}
            <div className="bg-[#14141f] border border-[#202030] rounded-2xl p-5 hover:border-[#2d2d44] transition-all">
              <div className="flex items-center justify-between text-xs">
                <div className="p-2 rounded-lg bg-[#1f1f2e] text-slate-400">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <span className="text-slate-400 font-semibold text-[10px] tracking-wider uppercase">
                  Active
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-4">Active Projects</p>
              <h3 className="text-2xl font-bold text-white mt-0.5">12</h3>
            </div>

            {/* Team Members */}
            <div className="bg-[#14141f] border border-[#202030] rounded-2xl p-5 hover:border-[#2d2d44] transition-all">
              <div className="flex items-center justify-between text-xs">
                <div className="p-2 rounded-lg bg-[#1f1f2e] text-slate-400">
                  <Users className="w-4 h-4" />
                </div>
                <span className="text-slate-400 font-semibold text-[10px] tracking-wider uppercase">
                  8 New
                </span>
              </div>
              <p className="text-[11px] text-slate-400 mt-4">Team Members</p>
              <h3 className="text-2xl font-bold text-white mt-0.5">42</h3>
            </div>
          </div>

          {/* Mid Section: Task Progress & Activity Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Task Progress Chart */}
            <div className="lg:col-span-2 bg-[#14141f] border border-[#202030] rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-white text-sm">Task Progress</h3>
                <button className="flex items-center gap-1.5 text-xs text-slate-400 bg-[#1a1a27] border border-[#26263b] px-2.5 py-1.5 rounded-lg hover:text-white transition">
                  Last 7 Days
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="overflow-x-auto">
                <div className="min-w-[280px] h-56 flex items-end justify-between gap-2 sm:gap-3 px-2 sm:px-4 pb-2 border-b border-[#202033]">
                  {barData.map((item, index) => (
                    <div
                      key={index}
                      className="flex-1 flex flex-col items-center gap-3 h-full justify-end"
                    >
                      <div
                        className={`w-full max-w-[36px] sm:max-w-[48px] rounded-t-lg transition-all duration-300 ${item.highlight
                            ? "bg-[#7c72c8]"
                            : "bg-[#272738] hover:bg-[#34344c]"
                          } ${item.height}`}
                      />
                      <span className="text-[11px] text-slate-500 font-medium">
                        {item.day}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Activity Timeline */}
            <div className="bg-[#14141f] border border-[#202030] rounded-2xl p-5 sm:p-6 flex flex-col">
              <h3 className="font-semibold text-white text-sm mb-6">
                Activity Timeline
              </h3>
              <div className="space-y-6 flex-1">
                {activities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div
                      className={`p-2 rounded-full shrink-0 ${activity.iconBg}`}
                    >
                      {activity.icon}
                    </div>
                    <div className="flex flex-col">
                      <p className="text-xs text-slate-300 leading-tight">
                        {activity.text}
                      </p>
                      <span className="text-[10px] text-slate-500 mt-1">
                        {activity.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section: Active Members & AI Suggestion */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Active Team Members */}
            <div className="lg:col-span-2 bg-[#14141f] border border-[#202030] rounded-2xl p-5 sm:p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-white text-sm">
                  Active Team Members
                </h3>
                <button className="text-xs text-slate-400 hover:text-white transition">
                  View All
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
                {teamMembers.map((member, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-10 h-10 rounded-full object-cover border border-[#2a2a40] shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-white leading-none truncate">
                        {member.name}
                      </p>
                      <p className="text-[11px] text-slate-500 mt-1 truncate">
                        {member.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Suggestion Card */}
            <div className="bg-[#14141f] border border-[#202030] rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-medium text-purple-400 mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span className="tracking-wider uppercase text-[10px] font-bold text-slate-400">
                    RK AI Suggestion
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-white">AI Suggestion</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Based on your activity, you should review the "Core API" tasks
                  today.
                </p>
              </div>
              <div className="mt-6">
                <button className="flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white transition group">
                  Take Action
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;