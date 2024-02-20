import Image from "next/image";
import { Inter } from "next/font/google";
import AboutScreen from "@/components/Screens/AboutScreen";
import HomeScreen from "@/components/Screens/HomeScreen";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  const { home, ...data } = props.data;
  return (
    <>
      <section>
        <HomeScreen data={home} />
        <AboutScreen data={data} />
      </section>
    </>
  );
}

export async function getStaticProps(ctx) {
  const data = {
    home: {
      name: "Nikhil V.",
      profile: "Full Stack Engineer",
      bio: "I am passionate about Development, Machine Learning and ML model Training, have a strong Communication skills, having 2+ years of experience in Web Development",
      cvUrl: "/media/resume.pdf",
    },
    about: {
      name: "Nikhil",
      experience: 2,
      cvUrl: "/media/resume.pdf",
      info: {
        "main skills": [
          {
            title: "Full Stack Development",
            desc: "I am working on that",
          },
          {
            title: "MERN Stack",
            desc: "I worked through the Scalable apps in Node.JS",
          },
          {
            title: "Next.JS Developer",
            desc: "I build this website using Next.JS and Tailwind CSS",
          },
        ],
        awards: [
          {
            title: "AADHAR Compition Winner",
            desc: "A Project Showcase Event held in SISTec Gandhinagar ",
          },
          {
            title: "IOT-COE Merrit Certification",
            desc: "Hands on Workshop on Arduino and Embebbed System at IOT-COE Bhopal ",
          },
          {
            title: "Next.JS Developer",
            desc: "I build this website using Next.JS and Tailwind CSS",
          },
        ],
        education: [
          {
            title: "B.Tech | CSE-AIDS - 2022-26 Batch",
            desc: "Sagar Institute of Science and Technology (SISTec), Gandhinagar, Bhopal, M.P. India (462036)",
          },
          {
            title: "Higher Secondary Education - 2022 (I Div)",
            desc: "Prerna Kiran Public School, Pipalner, Bhopal, M.P. India (462036)",
          },
          {
            title: "High Shcool Education - 2020 (I Div)",
            desc: "Prerna Kiran Public School, Pipalner, Bhopal, M.P. India (462036)",
          },
        ],
      },
    },
    blog: [
      {
        title: "yes i am doibg this since my 2nd year",
        url: "/",
      },
      {
        title: "yes i am doibg this since my 2nd year",
        url: "/",
      },
      {
        title: "yes i am doibg this since my 2nd year",
        url: "/",
      },
      {
        title:
          "Have Developed Machine Learning and Deep Learning Models for the companies as per the requirements",
        url: "/",
      },
      {
        title: "yes i am doibg this since my 2nd year",
        url: "/",
      },
      {
        title: "yes i am doibg this since my 2nd year",
        url: "/",
      },
      {
        title: "yes i am doibg this since my 2nd year",
        url: "/",
      },
      {
        title:
          "Have Developed Machine Learning and Deep Learning Models for the companies as per the requirements",
        url: "/",
      },
      {
        title: "yes i am doibg this since my 2nd year",
        url: "/",
      },
    ],
    contact: { phone: "+919685269754", email: "nikhivishwa.1234@gmail.com" },
    portfolio: {
      projectList: [
        {
          title: "web development work done by",
          desc: "Have Developed Machine Learning and Deep Learning Models for the companies as per the requirements",
          url: "/",
        },
        {
          title: "web development work done by today",
          desc: "Have Developed Machine Learning and Deep Learning Models for the companies as per the requirements",
          url: "/",
        },
        {
          title: "web development work done by today",
          desc: "Have Developed Machine Learning and Deep Learning Models for the companies as per the requirements",
          url: "/",
        },
        {
          title: "web development work done by today",
          desc: "Have Developed Machine Learning and Deep Learning Models for the companies as per the requirements",
          url: "/",
        },
      ],
      allSection: [
        "All Works",
        "Web Development",
        "App Development",
        "Data Analysis",
        "ML/DL Models",
      ],
    },
    skill: [
      {
        active: false,
        skill: "web development",
        desc: "yes i am doibg this since my 2nd year",
        url: "/",
      },
      {
        active: false,
        skill: "app development",
        desc: "yes i am doibg this since my 2nd year",
        url: "/",
      },
      {
        active: false,
        skill: "data analysis",
        desc: "yes i am doibg this since my 2nd year",
        url: "/",
      },
      {
        active: false,
        skill: "ML | DL models",
        desc: "Have Developed Machine Learning and Deep Learning Models for the companies as per the requirements",
        url: "/",
      },
    ],
  };

  return {
    props: {
      data,
    },
  };
}
