import React, { useEffect } from "react";
import Slider from "@/components/slider/Slider";
import Navigation from "@/components/navigation/navigation";
import ArtWork from "@/components/artWorks/ArtWork";
import { Web5 } from "@web5/api";

const Home = () => {
  useEffect(() => {
    const fetchData = async () => {
      const { web5, did: myDid } = await Web5.connect();
      const { record } = await web5.dwn.records.create({
        data: 'Hello, Web5!',
        message: {
          dataFormat: 'text/plain',
        },
      });
      const readResult = await record?.data.text();
      const updateResult = await record?.update({
        data: 'Hello, Web5! I am updated.',
      });
      console.log("Here are the records:", updateResult);
      // console.log("My DID:", myDid);
      // console.log("Web5:", web5);
    };

    fetchData();
  }, []);

  return (
    <>
      <Navigation />
      <Slider />
      <ArtWork />
    </>
  );
};

export default Home;
