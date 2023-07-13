import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "../styles/aboutus.module.css";
import { Brand } from "../components/componentsindex";
import images from "../img";

const aboutus = () => {
  const founderArray = [
    {
      name: "Sandra Nthenya",
      position: "Co-founder and Chief Executive",
      images: images.founder1,
    },
    {
      name: "Shawn Kodhe",
      position: "Co-founder and Chief Executive",
      images: images.founder2,
    },
    
  ];

  const factsArray = [
    {
      title: "10 million",
      info: "Articles have been public around the world (as of July. 14, 2023)",
    },
    {
      title: "100,000",
      info: "Registered users account (as of July 14, 2023)",
    },
    {
      title: "220+",
      info: "Countries and regions have our presence (as of July 14, 2023",
    },
  ];
  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>👋 About Us.</h1>
            <p>
              We are the first NFT listers in Africa and proud at that. We are the rainbow cupcake and the sprinkles on top.
            </p>
          </div>
          <div className={Style.aboutus_box_hero_right}>
            <Image src={images.hero2} />
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>⛱ Founder</h2>
          <p>
            We’re the rainbow sprinkles in your cupcake.
          </p>
        </div>

        <div className={Style.aboutus_box_founder}>
          <div className={Style.aboutus_box_founder_box}>
            {founderArray.map((el, i) => (
              <div className={Style.aboutus_box_founder_box_img}>
                <Image
                  src={el.images}
                  alt={el.name}
                  width={500}
                  height={500}
                  className={Style.aboutus_box_founder_box_img_img}
                />
                <h3>{el.name}</h3>
                <p>{el.position}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>🚀 Fast Facts</h2>
          <p>
           The rainbow sprinkles in your cupcake.
          </p>
        </div>

        <div className={Style.aboutus_box_facts}>
          <div className={Style.aboutus_box_facts_box}>
            {factsArray.map((el, i) => (
              <div className={Style.aboutus_box_facts_box_info}>
                <h3>{el.title}</h3>
                <p>{el.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Brand />
    </div>
  );
};

export default aboutus;
