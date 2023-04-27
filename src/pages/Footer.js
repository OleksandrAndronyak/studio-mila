import React from "react";
import { MDBFooter } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-left">
      <div className="text-center p-3" style={{ backgroundColor: "#bc4a8b" }}>
        &copy; 2021 Copyright: Studio Mila
      </div>
    </MDBFooter>
  );
};

export default Footer;
