import { MoreInfosProps } from "../../type/types";
import CompanyIcon from "../icons/CompanyIcon";
import LocationIcon from "../icons/LocationIcon";
import TwitterIcon from "../icons/TwitterIcon";
import WebsiteIcon from "../icons/WebsiteIcon";
import "./MoreInfos.css";

function MoreInfos(props:Readonly<MoreInfosProps>) {
  return (
    <ul className="further-user-infos">
      <li className={`user-location ${!props.location && 'not-available'}`}>
        <LocationIcon />
        {props.location 
        ? <span><a href="#">{props.location}</a></span> 
        : <span className="not-available">Not Available</span>}
      </li>
      <li className={`twitter-link ${!props.twitterLink && 'not-available'}`}>
        <TwitterIcon />
        {props.twitterLink 
        ? <span><a href="#">{props.twitterLink}</a></span> 
        : <span className="not-available">Not Available</span>}
      </li>
      <li className={`website-link ${!props.websiteLink && 'not-available'}`}>
        <WebsiteIcon />
        {props.websiteLink 
        ? <span><a href="#">{props.websiteLink}</a></span> 
        : <span className="not-available">Not Available</span>}
      </li>
      <li className={`company-link ${!props.companyLink && 'not-available'}`}>
        <CompanyIcon />
        {props.companyLink 
        ? <span><a href="#">{props.companyLink}</a></span> 
        : <span className="not-available">Not Available</span>}
      </li>
    </ul>
  );
}

export default MoreInfos;
