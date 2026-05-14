import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Users, TrendingUp, Award, Clock, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="px-8 py-12 md:py-16 grid md:grid-cols-2 gap-8 md:gap-8 bg-gray-light items-center">
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 bg-amber-light px-3 py-1 rounded-sm mb-4.5">
            <div className="w-1.5 h-1.5 bg-amber rounded-full"></div>
            <span className="text-xs font-semibold text-amber-dark uppercase tracking-wider">
              VTU Recognized Partner · 2025 Cohort Open
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif font-bold text-3xl md:text-4.5xl text-gray-dark leading-tight mb-3.5">
            Build Your Career with <em className="text-amber not-italic">Industry-Ready Skills</em>
          </h1>

          {/* Body */}
          <p className="text-sm text-gray-text leading-relaxed mb-6 max-w-sm">
            Learn from top mentors, work on real-world projects, and get hired by leading companies. Your transformation starts at ATOS Recruit.
          </p>

          {/* Buttons */}
          <div className="flex gap-2.5 mb-4.5">
            <button className="bg-amber hover:bg-amber-dark text-white text-xs font-semibold px-5 py-2.5 transition">
              Register Now →
            </button>
            <button className="border border-gray-dark text-gray-dark text-xs font-medium px-5 py-2.5 hover:bg-gray-medium transition">
              Explore Courses
            </button>
          </div>

          {/* Trust Items */}
          <div className="flex gap-4">
            <div className="flex items-center gap-1.5 text-xs text-gray-text">
              <div className="w-3.5 h-3.5 border border-amber rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-amber rounded-full"></div>
              </div>
              100% Placement Assistance
            </div>
            <div className="flex items-center gap-1.5 text-xs text-gray-text">
              <div className="w-3.5 h-3.5 border border-amber rounded-full flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-amber rounded-full"></div>
              </div>
              0% EMI Available
            </div>
          </div>
        </div>

        {/* Hero Right */}
        <div className="relative">
          {/* Top Right Stat */}
          <div className="absolute top-0 right-0 bg-white border border-gray-medium px-3.5 py-2 text-right">
            <div className="font-serif font-bold text-lg text-gray-dark">10k+</div>
            <div className="text-xs text-gray-text">Learners</div>
          </div>

          {/* Hero Image */}
          <div className="w-full h-56 bg-gray-medium rounded flex items-center justify-center flex-col gap-1.5 mb-3.5">
            <Users className="w-8 h-8 text-gray-text opacity-60" />
            <span className="text-xs text-gray-text">Hero image placeholder</span>
          </div>

          {/* Bottom Left Stat */}
          <div className="absolute -bottom-3.5 left-0 bg-white border border-gray-medium px-3.5 py-2.5 flex items-center gap-2.5">
            <div className="w-7 h-7 bg-amber flex items-center justify-center">
              <TrendingUp className="w-3.5 h-3.5 text-white" />
            </div>
            <div>
              <div className="font-serif font-bold text-gray-dark">92%</div>
              <div className="text-xs text-gray-text">Placement Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBILITY BAR */}
      <div className="bg-white border-t border-b border-gray-medium px-8 py-3.5 flex items-center gap-6">
        <span className="text-xs font-semibold text-gray-text uppercase tracking-wider whitespace-nowrap">
          Recognized & Listed on
        </span>
        <div className="w-px h-3.5 bg-gray-medium"></div>
        <div className="flex gap-3 flex-wrap">
          <span className="text-xs font-medium text-gray-dark">VTU Portal</span>
          <span className="text-xs text-gray-medium">·</span>
          <span className="text-xs font-medium text-gray-dark">NSDC</span>
          <span className="text-xs text-gray-medium">·</span>
          <span className="text-xs font-medium text-gray-dark">Skill India</span>
          <span className="text-xs text-gray-medium">·</span>
          <span className="text-xs font-medium text-gray-dark">AICTE Affiliated</span>
          <span className="text-xs text-gray-medium">·</span>
          <span className="text-xs font-medium text-gray-dark">Startup India</span>
        </div>
      </div>

      {/* SERVICES */}
      <section className="px-8 py-12 md:py-16 bg-gray-light">
        <div className="text-xs font-semibold text-amber uppercase tracking-wider mb-2.5">What We Do</div>
        <h2 className="font-serif font-bold text-2xl md:text-3xl text-gray-dark leading-tight mb-8">
          Focused on quality,<br />we build <em className="text-amber not-italic">real careers</em>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-0 border border-gray-medium">
          <div className="px-6 py-6 border-r border-gray-medium last:border-r-0">
            <div className="font-serif font-bold text-4xl text-gray-medium mb-3">01</div>
            <h3 className="text-sm font-semibold text-gray-dark mb-2">Manpower Solutions</h3>
            <p className="text-xs text-gray-text leading-relaxed">
              Reliable, ethical staffing solutions for commercial and enterprise establishments across sectors.
            </p>
          </div>
          <div className="px-6 py-6 border-r border-gray-medium last:border-r-0">
            <div className="font-serif font-bold text-4xl text-gray-medium mb-3">02</div>
            <h3 className="text-sm font-semibold text-gray-dark mb-2">Internships & Career Guidance</h3>
            <p className="text-xs text-gray-text leading-relaxed">
              Structured VTU-approved internships with clear career direction and mentor-led support.
            </p>
          </div>
          <div className="px-6 py-6">
            <div className="font-serif font-bold text-4xl text-gray-medium mb-3">03</div>
            <h3 className="text-sm font-semibold text-gray-dark mb-2">Crash Courses & Skill Programs</h3>
            <p className="text-xs text-gray-text leading-relaxed">
              Focused, industry-aligned programs to build practical, job-ready skills fast.
            </p>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="bg-navy px-8 py-9">
        <div className="grid md:grid-cols-4 gap-0">
          <div className="text-center px-4 border-r border-white/10 last:border-r-0">
            <div className="font-serif font-bold text-4xl md:text-5xl text-white leading-tight">
              50<span className="text-amber">+</span>
            </div>
            <div className="text-xs text-gray-border mt-1">College Tie-ups</div>
          </div>
          <div className="text-center px-4 border-r border-white/10 last:border-r-0">
            <div className="font-serif font-bold text-4xl md:text-5xl text-white leading-tight">
              200<span className="text-amber">+</span>
            </div>
            <div className="text-xs text-gray-border mt-1">Industry Partners</div>
          </div>
          <div className="text-center px-4 border-r border-white/10 last:border-r-0">
            <div className="font-serif font-bold text-4xl md:text-5xl text-white leading-tight">
              15<span className="text-amber">k+</span>
            </div>
            <div className="text-xs text-gray-border mt-1">Students Trained</div>
          </div>
          <div className="text-center px-4">
            <div className="font-serif font-bold text-4xl md:text-5xl text-white leading-tight">
              92<span className="text-amber">%</span>
            </div>
            <div className="text-xs text-gray-border mt-1">Placement Rate</div>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="px-8 py-12 md:py-16 bg-white">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-7">
          <div>
            <div className="text-xs font-semibold text-amber uppercase tracking-wider mb-2.5">Programs</div>
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-gray-dark">
              Learn what top companies hire for
            </h2>
          </div>
          <Link to="/courses" className="text-xs text-amber font-medium hover:text-amber-dark transition mt-4 md:mt-0">
            View all courses →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-3.5">
          {[
            {
              program: "Internship Program",
              level: "Beginner",
              title: "AI with Python — Training + Internship",
              duration: "3–6 Months",
              enrolled: "1.2k enrolled",
              type: "Training + Internship"
            },
            {
              program: "Internship Program",
              level: "Beginner",
              title: "Data Analytics — Training + Internship",
              duration: "3 Months",
              enrolled: "1.6k enrolled",
              type: "Training + Internship"
            },
            {
              program: "Skill Program",
              level: "Intermediate",
              title: "Full Stack Development",
              duration: "4 Months",
              enrolled: "980 enrolled",
              type: "Skill Program"
            }
          ].map((course, idx) => (
            <div key={idx} className="border border-gray-medium p-4.5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs bg-amber-light text-amber-dark px-2.25 py-0.75 font-semibold">
                  {course.program}
                </span>
                <span className="text-xs bg-gray-medium text-gray-text px-2.25 py-0.75">
                  {course.level}
                </span>
              </div>
              <h3 className="font-serif font-bold text-sm text-gray-dark leading-snug mb-2">
                {course.title}
              </h3>
              <div className="flex gap-3 mb-3.5 text-xs text-gray-text">
                <div className="flex items-center gap-1">
                  <Clock className="w-2.75 h-2.75" />
                  {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-2.75 h-2.75" />
                  {course.enrolled}
                </div>
              </div>
              <div className="border-t border-gray-medium pt-3 flex justify-between items-center">
                <span className="text-xs text-gray-text">{course.type}</span>
                <button className="bg-navy hover:bg-gray-dark text-white text-xs font-semibold px-3.5 py-1.75 transition">
                  Register →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-8 py-12 md:py-16 bg-gray-light">
        <div className="text-xs font-semibold text-amber uppercase tracking-wider mb-2.5">Why Choose Us</div>
        <h2 className="font-serif font-bold text-2xl md:text-3xl text-gray-dark leading-tight mb-7">
          Built for outcomes,<br />not just <em className="text-amber not-italic">learning</em>
        </h2>

        <div className="grid md:grid-cols-4 gap-0 border border-gray-medium">
          <div className="px-4.5 py-5 border-r border-gray-medium last:border-r-0">
            <div className="w-8 h-8 border border-gray-medium flex items-center justify-center text-amber text-base mb-3">
              <Award className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-semibold text-gray-dark mb-1.5">Job-Ready Curriculum</h3>
            <p className="text-xs text-gray-text leading-relaxed">
              Built with hiring managers from top companies. What you learn is what gets you hired.
            </p>
          </div>
          <div className="px-4.5 py-5 border-r border-gray-medium last:border-r-0">
            <div className="w-8 h-8 border border-gray-medium flex items-center justify-center text-amber text-base mb-3">
              <Users className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-semibold text-gray-dark mb-1.5">1:1 Mentorship</h3>
            <p className="text-xs text-gray-text leading-relaxed">
              Weekly sessions with industry experts. Personal guidance throughout your journey.
            </p>
          </div>
          <div className="px-4.5 py-5 border-r border-gray-medium last:border-r-0">
            <div className="w-8 h-8 border border-gray-medium flex items-center justify-center text-amber text-base mb-3">
              <Award className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-semibold text-gray-dark mb-1.5">Recognized Certificate</h3>
            <p className="text-xs text-gray-text leading-relaxed">
              Industry-validated certification on completion. VTU and ATOS endorsed.
            </p>
          </div>
          <div className="px-4.5 py-5">
            <div className="w-8 h-8 border border-gray-medium flex items-center justify-center text-amber text-base mb-3">
              <TrendingUp className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-semibold text-gray-dark mb-1.5">Placement Assistance</h3>
            <p className="text-xs text-gray-text leading-relaxed">
              Dedicated career coach, resume review, and direct interview drives with partners.
            </p>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="px-8 py-12 md:py-16 bg-white">
        <div className="text-xs font-semibold text-amber uppercase tracking-wider mb-2.5">Student Stories</div>
        <h2 className="font-serif font-bold text-2xl md:text-3xl text-gray-dark mb-6">
          Loved by 10,000+ <em className="text-amber not-italic">learners</em>
        </h2>

        <div className="border border-gray-medium p-8">
          <div className="font-serif text-5xl text-amber leading-none mb-2">"</div>
          <p className="font-serif text-lg italic text-gray-dark leading-relaxed mb-5">
            ATOS transformed my career. The mentorship and live projects gave me real confidence to crack interviews. I went from zero coding background to a developer role in 5 months.
          </p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gray-medium rounded-full flex items-center justify-center text-xs font-semibold text-gray-text">
              PS
            </div>
            <div>
              <div className="text-xs font-semibold text-gray-dark">Priya Sharma</div>
              <div className="text-xs text-gray-text">Software Engineer @ Infosys</div>
            </div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex gap-1.5 justify-center mt-5">
          <div className="w-1.5 h-1.5 bg-amber rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-gray-medium rounded-full"></div>
          <div className="w-1.5 h-1.5 bg-gray-medium rounded-full"></div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-navy px-8 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h2 className="font-serif font-bold text-2xl md:text-3xl text-white leading-tight max-w-sm">
            Ready to launch<br />your <em className="text-amber not-italic">career?</em>
          </h2>
          <p className="text-xs text-gray-border mt-2">
            Join 10,000+ learners who transformed their future with ATOS Recruit.
          </p>
        </div>
        <div className="flex gap-2.5">
          <button className="bg-white hover:bg-gray-light text-navy text-xs font-semibold px-5.5 py-2.75 transition">
            Register Now →
          </button>
          <button className="border border-white/35 hover:border-white/60 text-white text-xs font-medium px-5.5 py-2.75 transition">
            Browse Courses
          </button>
        </div>
      </section>
    </Layout>
  );
}
