import ContactmeScreen from "@/components/Screens/ContactmeScreen";

export default function Contacts(props) {
  return (
    <div>
      <ContactmeScreen data={props.data} />
    </div>
  );
}

export async function getStaticProps(ctx) {
  const data = { phone: "+919685269754", email: "nikhivishwa.1234@gmail.com" };

  return {
    props: {
      data,
    },
  };
}
