import "./App.css";
import hero from "./assets/hero.jpg";
import { TbMushroomFilled } from "react-icons/tb";

function TimelineIcon() {
  return <TbMushroomFilled className="text-secondary text-3xl" />;
}

function App() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
            <button className="btn btn-accent">Get Started</button>
            <button className="btn btn-secondary">Get Started</button>
            <button className="btn btn-neutral">Get Started</button>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 text-base-content">
        <article className="prose mx-auto">
          <h1>Garlic bread with cheese: What the science tells us</h1>
          <p>
            For years parents have espoused the health benefits of eating garlic
            bread with cheese to their children, with the food earning such an
            iconic status in our culture that kids will often dress up as warm,
            cheesy loaf for Halloween.
          </p>
          <p>
            But a recent study shows that the celebrated appetizer may be linked
            to a series of rabies cases springing up around the country.
          </p>
        </article>

        <div className="divider"></div>

        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <div className="timeline-middle">
              <TimelineIcon />
            </div>
            <div className="timeline-start md:text-end mb-10 pt-1.5">
              <time className="font-mono italic">1984</time>
              <div className="text-lg font-black">First Macintosh computer</div>
              The Apple Macintosh—later rebranded as the Macintosh 128K—is the
              original Apple Macintosh personal computer. It played a pivotal
              role in establishing desktop publishing as a general office
              function. The motherboard, a 9 in (23 cm) CRT monitor, and a
              floppy drive were housed in a beige case with integrated carrying
              handle; it came with a keyboard and single-button mouse.
            </div>
            <hr className="bg-secondary opacity-20" />
          </li>
          <li>
            <hr className="bg-secondary opacity-20" />
            <div className="timeline-middle">
              <TimelineIcon />
            </div>
            <div className="timeline-end mb-10 pt-1.5">
              <time className="font-mono italic">1998</time>
              <div className="text-lg font-black">iMac</div>
              iMac is a family of all-in-one Mac desktop computers designed and
              built by Apple Inc. It has been the primary part of Apple's
              consumer desktop offerings since its debut in August 1998, and has
              evolved through seven distinct forms
            </div>
            <hr className="bg-secondary opacity-20" />
          </li>
          <li>
            <hr className="bg-secondary opacity-20" />
            <div className="timeline-middle">
              <TimelineIcon />
            </div>
            <div className="timeline-start md:text-end mb-10 pt-1.5">
              <time className="font-mono italic">2001</time>
              <div className="text-lg font-black">iPod</div>
              The iPod is a discontinued series of portable media players and
              multi-purpose mobile devices designed and marketed by Apple Inc.
              The first version was released on October 23, 2001, about 8+1⁄2
              months after the Macintosh version of iTunes was released. Apple
              sold an estimated 450 million iPod products as of 2022. Apple
              discontinued the iPod product line on May 10, 2022. At over 20
              years, the iPod brand is the oldest to be discontinued by Apple
            </div>
            <hr className="bg-secondary opacity-20" />
          </li>
          <li>
            <hr className="bg-secondary opacity-20" />
            <div className="timeline-middle">
              <TimelineIcon />
            </div>
            <div className="timeline-end mb-10 pt-1.5">
              <time className="font-mono italic">2007</time>
              <div className="text-lg font-black">iPhone</div>
              iPhone is a line of smartphones produced by Apple Inc. that use
              Apple's own iOS mobile operating system. The first-generation
              iPhone was announced by then-Apple CEO Steve Jobs on January 9,
              2007. Since then, Apple has annually released new iPhone models
              and iOS updates. As of November 1, 2018, more than 2.2 billion
              iPhones had been sold. As of 2022, the iPhone accounts for 15.6%
              of global smartphone market share
            </div>
            <hr className="bg-secondary opacity-20" />
          </li>
          <li>
            <hr className="bg-secondary opacity-20" />
            <div className="timeline-middle">
              <TimelineIcon />
            </div>
            <div className="timeline-start md:text-end mb-10 pt-1.5">
              <time className="font-mono italic">2015</time>
              <div className="text-lg font-black">Apple Watch</div>
              The Apple Watch is a line of smartwatches produced by Apple Inc.
              It incorporates fitness tracking, health-oriented capabilities,
              and wireless telecommunication, and integrates with iOS and other
              Apple products and services
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
