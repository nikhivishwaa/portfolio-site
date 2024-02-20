import PortfolioScreen from "@/components/Screens/PortfolioScreen";

export default function Portfolio(props) {
  return (
    <div>
      <PortfolioScreen data={props.data} />
    </div>
  );
}

export async function getStaticProps(ctx) {
  const data = {
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
  };

  return {
    props: {
      data,
    },
  };
}
