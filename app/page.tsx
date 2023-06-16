import Image from "next/image";
import Link from "next/link";
import logo from "/images/logo.png";
import "@/styles/home.css";
import SocialIcons from "@/components/social-icons";

export default function Home() {
  return (
    <>
      <div className="App">
        <>
          <header className="App-header">
            <div className="row">
              <div className={"app-start fade-in"}>
                <Image src={logo} alt="logo" className="App-logo" />
                <Link className="btn btn-outline-light mt-3" href="/cv">
                  CV
                </Link>
                <Link className="btn btn-outline-light mt-3" href="/portfolio">
                  Portfolio
                </Link>
              </div>
            </div>
            <div className={"row app-start fade-in"}>
              <SocialIcons dark={true} />
            </div>
          </header>
        </>
      </div>
    </>
  );
}
