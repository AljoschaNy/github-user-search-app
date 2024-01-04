import { MoreInfosProps } from "../../type/types";
import CompanyIcon from "../icons/CompanyIcon";
import LocationIcon from "../icons/LocationIcon";
import TwitterIcon from "../icons/TwitterIcon";
import WebsiteIcon from "../icons/WebsiteIcon";
import "./MoreInfos.css";

function MoreInfos(props:Readonly<MoreInfosProps>) {
  const formattedCompanyName = props.company?.slice(1);

  return (
    <ul className="further-user-infos">

      <li className={`user-location ${!props.location && "not-available"}`}>
        <LocationIcon />
        {props.location 
        ? <span>
            <a href={`https://www.google.com/search?q=${props.location}`} target="_blank">
              {props.location}
            </a>
          </span> 
        : <span className="not-available">Not Available</span>}
      </li>

      <li className={`twitter-link ${!props.twitterName && "not-available"}`}>
        <TwitterIcon />
        {props.twitterName 
        ? <span>
            <a href={`https://twitter.com/${props.twitterName}`} target="_blank">
              {props.twitterName}
            </a>
          </span> 
        : <span className="not-available">Not Available</span>}
      </li>

      <li className={`website-link ${!props.websiteLink && "not-available"}`}>
        <WebsiteIcon />
        {props.websiteLink 
        ? <span>
            <a href={props.websiteLink} target="_blank">
              {props.websiteLink}
            </a>
          </span> 
        : <span className="not-available">Not Available</span>}
      </li>

      <li className={`company-link ${!props.company && "not-available"}`}>
        <CompanyIcon />
        {props.company 
        ? <span>
            <a href={`https://github.com/${formattedCompanyName}`} target="_blank">
              {props.company}
            </a>
          </span> 
        : <span className="not-available">Not Available</span>}
      </li>

    </ul>
  );
}

export default MoreInfos;
