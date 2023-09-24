
import Download from "@components/Download";

const Colleges = () => {

  const downloads = [
    {
      name: "NSUT, Delhi",
      link: "https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/publicFiles/BITS_Pilani%20(2).pdf",
    },
    {
      name: "BITS, Pilani",
      link: "https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/publicFiles/IISc%20-%20College%20Review%20(2).pdf",
    },
    {
      name: "IISc, Bangalore",
      link: "https://lwfiles.mycourse.app/62a6cd5e1e9e2fbf212d608d-public/publicFiles/TOP%20MCA%20Colleges%20(1).pdf",
    },
    {
      name: "More Coming SOON",
    
    },
  ];



  return (
  
  <Download arr={downloads} detail={"College Reviews"} />
  
  );
};

export default Colleges;
