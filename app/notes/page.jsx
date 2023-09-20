import Download from "@components/Download";

const Notes = () => {
  const notes = [
    {
      name: "CSS in One Shot",
      link: "https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/publicFiles/CSS%20Notes.pdf",
    },
    {
      name: "Data Science Roadmap",
      link: "https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/publicFiles/Data%20Science%20.pdf",
    },
    {
      name: "Git Cheat-Sheet by Github",
      link: "",
    },
    {
      name: "HTML in One Shot",
      link: "",
    },
    {
      name: "Java Lectures (Youtube)",
      link: "",
    },
    {
      name: "Microsoft On Campus Qs",
      link: "",
    },
    {
      name: "Python in One Shot",
      link: "",
    },
  ];
  return <Download arr={notes} detail={"Notes"} />;
};

export default Notes;
