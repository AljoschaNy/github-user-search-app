import { MoreInfosProps } from "../../type/types";
import CompanyIcon from "../icons/CompanyIcon";
import LocationIcon from "../icons/LocationIcon";
import TwitterIcon from "../icons/TwitterIcon";
import WebsiteIcon from "../icons/WebsiteIcon";
import "./MoreInfos.css";

function MoreInfos(props:Readonly<MoreInfosProps>) {
  return (
    <ul className="further-user-infos">
      <li className="user-location">
        <LocationIcon />
        <a href="#">{props.location}</a>
      </li>
      <li className="twitter-link">
        <TwitterIcon />
        <a href="#">{props.twitterLink}</a>
      </li>
      <li className="website-link">
        <WebsiteIcon />
        <a href="#">{props.websiteLink}</a>
      </li>
      <li className="company-link">
        <CompanyIcon />
        <a href="#">{props.companyLink}</a>
      </li>
    </ul>
  );
}

export default MoreInfos;
