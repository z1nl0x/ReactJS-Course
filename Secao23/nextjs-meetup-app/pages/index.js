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

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
