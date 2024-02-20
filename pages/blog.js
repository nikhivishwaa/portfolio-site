import BlogScreen from "@/components/Screens/BlogScreen";

export default function Blog(props) {
  return (
    <div>
      <BlogScreen data={props.data} />
    </div>
  );
}

export async function getStaticProps(ctx) {
  const data = [
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
    ];

  return {
    props: {
      data,
    },
  };
}
