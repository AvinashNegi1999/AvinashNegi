/* Change this file to get your personal Portfolio */

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Avinash Negi",
  title: "Hi all, I'm Avinash",
  subTitle: emoji(
    "A passionate programmer 🚀 currently focusing on Python and C. I enjoy solving problems and building practical projects to sharpen my skills."
  ),
  resumeLink: "", 
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/AvinashNegi1999",
  kaggle: "https://www.kaggle.com/avinashnegi1999",
  leetcode: "https://leetcode.com/u/Avinashnegi1999/",
  gmail: "avinashnegi1999work@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I Do",
  subTitle: "FOCUSED ON BUILDING STRONG PROGRAMMING FUNDAMENTALS",
  skills: [
    emoji("⚡ Writing clean and efficient Python code for automation and data tasks"),
    emoji("⚡ Solving algorithmic problems using C on platforms like LeetCode")
  ],
  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "c",
      fontAwesomeClassname: "fas fa-code"
    }
  ],
  display: true
};

const educationInfo = {
  display: false,
  schools: []
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Python",
      progressPercentage: "75%"
    },
    {
      Stack: "C Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: false,
  experience: []
};

const openSource = {
  showGithubProfile: true,
  display: true
};

const bigProjects = {
  title: "Highlighted Project",
  subtitle: "PROJECTS I’M CURRENTLY WORKING ON",
  projects: [
    {
      image: require("./assets/images/codeInLogo.webp"),
      projectName: "100 Days of Python",
      projectDesc: "A daily challenge repository to master Python step by step.",
      footerLink: [
        {
          name: "GitHub Repo",
          url: "https://github.com/AvinashNegi1999/100-Days-of-Python-Code-challenge"
        }
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Achievements 🏆"),
  subtitle: "I am continuously learning and building. More to come soon!",
  achievementsCards: [],
  display: false
};

const blogSection = {
  title: "Blogs",
  subtitle: "Sharing what I learn is part of my journey.",
  displayMediumBlogs: false,
  blogs: [],
  display: false
};

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I'm open to knowledge-sharing opportunities."),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Hoping to share stories and learnings soon.",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Currently not uploaded.",
  display: false
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Let’s connect — I’m open to projects, collaborations, or just tech chats!",
  number: "",
  email_address: "avinashnegi1999work@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
