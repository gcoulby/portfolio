import { ISocialIcon } from "@/helpers/interfaces";
import { FaOrcid, FaResearchgate, FaTwitter, FaLinkedin, FaGithub, FaCodepen, FaBandcamp, FaSpotify } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";
import SocialIcon from "./social-icon";
const icons: ISocialIcon[] = [
  {
    title: "Google Scholar",
    url: "https://scholar.google.com/citations?user=KPYenX4AAAAJ&amp;hl=en&amp;oi=ao",
    icon: <SiGooglescholar />,
  },
  {
    title: "ORCiD",
    url: "https://orcid.org/0000-0002-5970-864X",
    icon: <FaOrcid />,
  },
  {
    title: "ResearchGate",
    url: "https://www.researchgate.net/profile/Graham_Coulby",
    icon: <FaResearchgate />,
  },
  {
    title: "Twitter",
    url: "https://twitter.com/gcoulby",
    icon: <FaTwitter />,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/graham-coulby-7a336225/",
    icon: <FaLinkedin />,
  },
  {
    title: "GitHub",
    url: "https://github.com/gcoulby",
    icon: <FaGithub />,
  },
  {
    title: "CodePen",
    url: "https://codepen.io/gcoulby",
    icon: <FaCodepen />,
  },
  {
    title: "Bandcamp",
    url: "https://lulaloops.bandcamp.com/",
    icon: <FaBandcamp />,
  },
  {
    title: "Spotify",
    url: "https://open.spotify.com/artist/3ERfkWr1Ojkk7pH5QOLjBr?si=UoBo5SXYSmmezDDH8fVAOA",
    icon: <FaSpotify />,
  },
];

export default function SocialIcons({ dark }: { dark: boolean }) {
  return (
    <>
      <div className={`social-icons ${dark ? "social-icons-dark" : ""}`}>
        {icons.map((icon: ISocialIcon, i: number) => (
          <SocialIcon key={`social-icon-${i}`} socialIcon={icon} />
        ))}
      </div>
    </>
  );
}
