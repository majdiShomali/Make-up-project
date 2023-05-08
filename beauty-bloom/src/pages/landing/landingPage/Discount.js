import React from "react";
import StoreCard from "../../../components/StoreCard";

const Discount = () => {
  return (
    <div>
      <h1 className="text-center text-5xl py-5 font-semibold">Discount section</h1>
      <h5 className="text-center mb-7">Discover our new items for limited time</h5>
      <div className=" grid grid-cols-1 max-w sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-3 px-5">
        <StoreCard
          imageURL="http://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/035/original/open-uri20180630-4-n6wb0y?1530390383"
          name="crame jonson "
          brand=""
          category="powder"
          price="20"
          discountValue={5}
          description=""
          availableColors={[
            {
              hex_value: "#E1BFC0",
              colour_name: "Pink Parfait",
            },
            {
              hex_value: "#D7A7A3",
              colour_name: "Papaya",
            },
            {
              hex_value: "#E6C3CB",
              colour_name: "Acai Berry",
            },
          ]}
        />
        <StoreCard
          imageURL="http://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/881/original/open-uri20171224-4-xaiokt?1514082636"
          name="nail polish"
          brand=""
          category="null"
          price="6"
          discountValue={5}
          description=""
          availableColors={[
            {
              "hex_value": "#FF8D97",
              "colour_name": "Pink Cloud"
            },
            {
              "hex_value": "#FE979B",
              "colour_name": "Plush"
            },
            {
              "hex_value": "#FD4899",
              "colour_name": "Pink Lace"
            },
            {
              "hex_value": "#B8135F",
              "colour_name": "Dark Cloud"
            },
            {
              "hex_value": "#E56270",
              "colour_name": "Berry Tea"
            },
            {
              "hex_value": "#EC131E",
              "colour_name": "Molten Love"
            },
            {
              "hex_value": "#FF9474",
              "colour_name": "Coral-Sicle"
            },
            {
              "hex_value": "#E18F77",
              "colour_name": "Cocoa Bean"
            }
          ]}
        />
        <StoreCard
          imageURL="http://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/776/original/open-uri20171223-4-122ljen?1514072604"
          name="ointment"
          brand=""
          category="null"
          price="15"
          discountValue={3}
          description=""
          availableColors={[{
            "hex_value": "#cf5d5d",
            "colour_name": "Peach Pop"
          },
          {
            "hex_value": "#aa514a",
            "colour_name": "Black Honey Pop "
          },
          {
            "hex_value": "#e79da4",
            "colour_name": "Pink Honey"
          },
          {
            "hex_value": "#cd698d",
            "colour_name": "Plum Pop"
          },
          {
            "hex_value": "#db8669",
            "colour_name": "Nude Pop"
          },
          {
            "hex_value": "#de7a7b",
            "colour_name": "Pink Pop"
          },
          {
            "hex_value": "#c75c69",
            "colour_name": "Rosy Pop"
          },
          {
            "hex_value": "#ab6266",
            "colour_name": "Heather Pop"
          },
          {
            "hex_value": "#f29686",
            "colour_name": "Melon Pop"
          },
         
          {
            "hex_value": "#641009",
            "colour_name": "Cola Pop"
          }
        ]}
        />
        <StoreCard
          imageURL="http://s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/420/original/open-uri20171223-4-1w3nykx?1514063321"
          name="powder"
          brand=""
          category="cream"
          price="10"
          discountValue={2}
          description=""
          availableColors={[
            {
              "hex_value": "#E4878D",
              "colour_name": "Boho Chic (CB11) Light Blue-Toned Pink "
            },
            {
              "hex_value": "#D4696F",
              "colour_name": "Glow (CB05) Plummy Pink "
            },
            {
              "hex_value": "#F18F8E",
              "colour_name": "Natural (CB02) Soft Light Pink "
            },
            {
              "hex_value": "#EC6A4E",
              "colour_name": "Orange (CB09) Soft Orange "
            },
            {
              "hex_value": "#CA7769",
              "colour_name": "Tea Rose (CB03) Medium Beige-Pink  "
            }
          ]}
        />
      </div>
    </div>
  );
};

export default Discount;
