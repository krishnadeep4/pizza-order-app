import "primeicons/primeicons.css";
import "primereact/resources/themes/md-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import { cartImg } from "../../../assets/images";
import React from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

const PrimeCard = ({
  type,
  alt,
  src,
  subTitle,
  title,
  description,
  price,
  id,
  onAddCart,
}) => {
  const onSubmit = () => {
    onAddCart(id);
  };
  const header = <img alt={alt} src={src} />;
  const footer = (
    <div className="flex">
      <h2 className="absolute bottom-0 left-0 pl-4">${price}</h2>
      <span>
        <Button
          onClick={onSubmit}
          label=""
          className="absolute bottom-0 right-0 bg-gray-900 hover:bg-gray-400 border-bluegray-700"
        >
          <img alt="logo" src={cartImg} className="h-2rem"></img>
        </Button>
      </span>
    </div>
  );
  switch (type) {
    case "store":
      return (
        <Card
          className="relative"
          title={title}
          subTitle={subTitle}
          style={{ width: "270px" }}
          footer={footer}
          header={header}
        >
          <p className="p-m-0" style={{ lineHeight: "1.5" }}>
            {description}
          </p>
        </Card>
      );
    case "cart":
      return (
        <Card
          className="relative"
          title={title}
          subTitle={subTitle}
          style={{ width: "400px" }}
          footer={footer}
          header={header}
        >
          <p className="p-m-0" style={{ lineHeight: "1.5" }}>
            {description}
          </p>
        </Card>
      );
    default:
      return <></>;
  }
};

export default PrimeCard;
