import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First meet up",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/26/Bairro_dos_jardins_em_s%C3%A3o_paulo.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is the first meetup!",
  },
  {
    id: "m2",
    title: "Second meet up",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1b/Belo_Horizonte%2C_Brasil.jpg",
    address: "Some address 17, 6789 Some City 2",
    description: "This is the second meetup!",
  },
];

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>NextJS Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active NextJS Meetups!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

// Server side data generation
// export const getServerSideProps = (context) => {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

// Static data generation
export const getStaticProps = async () => {
  /*fetch data from an API*/

  const client = await MongoClient.connect(
    "mongodb+srv://adm_kreft:xlLT249WCrCqauKw@cluster0.csq0vlq.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
};

export default HomePage;
