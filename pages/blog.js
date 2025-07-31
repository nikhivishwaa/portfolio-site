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
      title: "yes i am doing the develpoment since my 2nd year",
      url: "/",
    },
    {
      title: "Have Developed Machine Learning and Deep Learning Models for companies",
      url: "/",
    },
    {
      title: "Exploring AI-powered tools for efficiency",
      url: "/",
    },
    {
      title: "Explore N8N with few simple clicks",
      url: "/",
    },
    {
      title: "Building SaaS products with AI integrations",
      url: "/",
    },
    {
      title: "Early internship experiences that shaped me",
      url: "/",
    },
    {
      title: "Lessons from working on Interview Sathi",
      url: "/",
    },
    {
      title: "How I balance college and real-world projects",
      url: "/",
    },
    {
      title: "How To Master DSA with C language",
      url: "/",
    },
    {
      title: "How To Learn Any Concept like butter",
      url: "/",
    },
  ];
  return {
    props: {
      data,
    },
  };
}
