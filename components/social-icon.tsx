import { ISocialIcon } from "@/helpers/interfaces";
export default function SocialIcon({ socialIcon }: { socialIcon: ISocialIcon }) {
  return (
    <>
      <a title={socialIcon.title} className="social-icon" href={socialIcon.url} target="_blank" rel="noopener noreferrer">
        {socialIcon.icon}
      </a>
    </>
  );
}
