import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  ServerIcon,
  CloudIcon,
  CommandLineIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

interface SkillsProps {
  darkMode: boolean;
}

interface SkillProgressProps {
  skill: string;
  percentage: number;
  color: string;
  delay: number;
}

export default function Skills({ darkMode }: SkillsProps) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section
      id="skills"
      className={`py-20 ${
        darkMode ? "bg-gray-800 text-white" : "bg-slate-50 text-gray-800"
      }`}
    >
      <div className="container mx-auto px-6">
        <motion.h2
          className="section-title flex items-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <CommandLineIcon className="h-8 w-8 mr-2 text-indigo-600" />
          My Skills
        </motion.h2>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Skill Card 1 - Web Development */}
          <motion.div
            className={`card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all ${
              darkMode ? "bg-gray-700" : "bg-white"
            }`}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div className="w-16 h-16 rounded-lg bg-indigo-100 flex items-center justify-center mb-6 group">
              <CodeBracketIcon className="h-8 w-8 text-indigo-600 group-hover:animate-pulse" />
            </div>
            <h3 className="text-xl font-bold mb-3 flex items-center">
              Web Development
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                Frontend
              </span>
            </h3>
            <p
              className={`mb-4 ${
                darkMode ? "text-gray-300" : "text-slate-600"
              }`}
            >
              Building responsive and dynamic web applications using modern
              frameworks and tools.
            </p>
            <div className="space-y-3">
              <SkillProgress
                skill="HTML/CSS"
                percentage={90}
                color="indigo"
                delay={0.1}
              />
              <SkillProgress
                skill="JavaScript"
                percentage={85}
                color="indigo"
                delay={0.2}
              />
              <SkillProgress
                skill="React.js"
                percentage={80}
                color="indigo"
                delay={0.3}
              />
            </div>
          </motion.div>

          {/* Skill Card 2 - Database Management */}
          <motion.div
            className={`card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all ${
              darkMode ? "bg-gray-700" : "bg-white"
            }`}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div className="w-16 h-16 rounded-lg bg-blue-100 flex items-center justify-center mb-6 group">
              <ServerIcon className="h-8 w-8 text-blue-600 group-hover:animate-pulse" />
            </div>
            <h3 className="text-xl font-bold mb-3 flex items-center">
              Database Management
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                Backend
              </span>
            </h3>
            <p
              className={`mb-4 ${
                darkMode ? "text-gray-300" : "text-slate-600"
              }`}
            >
              Designing and implementing efficient database solutions for
              various applications.
            </p>
            <div className="space-y-3">
              <SkillProgress
                skill="MySQL"
                percentage={85}
                color="blue"
                delay={0.1}
              />
              <SkillProgress
                skill="PostgreSQL"
                percentage={75}
                color="blue"
                delay={0.2}
              />
              <SkillProgress
                skill="MongoDB"
                percentage={70}
                color="blue"
                delay={0.3}
              />
            </div>
          </motion.div>

          {/* Skill Card 3 - Cloud Computing */}
          <motion.div
            className={`card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all ${
              darkMode ? "bg-gray-700" : "bg-white"
            }`}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div className="w-16 h-16 rounded-lg bg-purple-100 flex items-center justify-center mb-6 group">
              <CloudIcon className="h-8 w-8 text-purple-600 group-hover:animate-pulse" />
            </div>
            <h3 className="text-xl font-bold mb-3 flex items-center">
              Cloud Computing
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                DevOps
              </span>
            </h3>
            <p
              className={`mb-4 ${
                darkMode ? "text-gray-300" : "text-slate-600"
              }`}
            >
              Leveraging cloud services to enhance application performance and
              scalability.
            </p>
            <div className="space-y-3">
              <SkillProgress
                skill="AWS"
                percentage={80}
                color="purple"
                delay={0.1}
              />
              <SkillProgress
                skill="Azure"
                percentage={70}
                color="purple"
                delay={0.2}
              />
              <SkillProgress
                skill="Google Cloud"
                percentage={65}
                color="purple"
                delay={0.3}
              />
            </div>
          </motion.div>

          {/* Skill Card 4 - Mobile Development */}
          <motion.div
            className={`card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all ${
              darkMode ? "bg-gray-700" : "bg-white"
            }`}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div className="w-16 h-16 rounded-lg bg-green-100 flex items-center justify-center mb-6 group">
              <DevicePhoneMobileIcon className="h-8 w-8 text-green-600 group-hover:animate-pulse" />
            </div>
            <h3 className="text-xl font-bold mb-3 flex items-center">
              Mobile Development
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Cross-Platform
              </span>
            </h3>
            <p
              className={`mb-4 ${
                darkMode ? "text-gray-300" : "text-slate-600"
              }`}
            >
              Creating intuitive and responsive mobile applications for iOS and
              Android platforms.
            </p>
            <div className="space-y-3">
              <SkillProgress
                skill="React Native"
                percentage={75}
                color="green"
                delay={0.1}
              />
              <SkillProgress
                skill="Flutter"
                percentage={65}
                color="green"
                delay={0.2}
              />
              <SkillProgress
                skill="Swift"
                percentage={60}
                color="green"
                delay={0.3}
              />
            </div>
          </motion.div>

          {/* Skill Card 5 - Data Analysis */}
          <motion.div
            className={`card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all ${
              darkMode ? "bg-gray-700" : "bg-white"
            }`}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div className="w-16 h-16 rounded-lg bg-red-100 flex items-center justify-center mb-6 group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-red-600 group-hover:animate-pulse"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 flex items-center">
              Data Analysis
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                Analytics
              </span>
            </h3>
            <p
              className={`mb-4 ${
                darkMode ? "text-gray-300" : "text-slate-600"
              }`}
            >
              Extracting meaningful insights from data to drive business
              decisions and strategy.
            </p>
            <div className="space-y-3">
              <SkillProgress
                skill="Python"
                percentage={80}
                color="red"
                delay={0.1}
              />
              <SkillProgress
                skill="R"
                percentage={65}
                color="red"
                delay={0.2}
              />
              <SkillProgress
                skill="Tableau"
                percentage={70}
                color="red"
                delay={0.3}
              />
            </div>
          </motion.div>

          {/* Skill Card 6 - System Architecture */}
          <motion.div
            className={`card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all ${
              darkMode ? "bg-gray-700" : "bg-white"
            }`}
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            }}
          >
            <div className="w-16 h-16 rounded-lg bg-amber-100 flex items-center justify-center mb-6 group">
              <CpuChipIcon className="h-8 w-8 text-amber-600 group-hover:animate-pulse" />
            </div>
            <h3 className="text-xl font-bold mb-3 flex items-center">
              System Architecture
              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                Infrastructure
              </span>
            </h3>
            <p
              className={`mb-4 ${
                darkMode ? "text-gray-300" : "text-slate-600"
              }`}
            >
              Designing robust and scalable system architectures for enterprise
              applications.
            </p>
            <div className="space-y-3">
              <SkillProgress
                skill="Microservices"
                percentage={75}
                color="amber"
                delay={0.1}
              />
              <SkillProgress
                skill="API Design"
                percentage={85}
                color="amber"
                delay={0.2}
              />
              <SkillProgress
                skill="System Integration"
                percentage={80}
                color="amber"
                delay={0.3}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

const SkillProgress: React.FC<SkillProgressProps> = ({
  skill,
  percentage,
  color,
  delay,
}) => {
  const colorClasses = {
    indigo: "bg-indigo-600",
    blue: "bg-blue-600",
    purple: "bg-purple-600",
    green: "bg-green-600",
    red: "bg-red-600",
    amber: "bg-amber-600",
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: delay, duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill}</span>
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: delay + 0.3, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {percentage}%
        </motion.span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className={`h-2.5 rounded-full ${
            colorClasses[color as keyof typeof colorClasses]
          }`}
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          transition={{
            delay: delay + 0.1,
            duration: 1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        ></motion.div>
      </div>
    </motion.div>
  );
};
