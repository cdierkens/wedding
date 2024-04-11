import "./App.css";
import hero from "./assets/hero.jpg";
import greenFlowerBackground from "./assets/green-flower-background.png";
import greenFlowerBackgroundInverted from "./assets/green-flower-background-inverted.png";
import { TbMushroomFilled } from "react-icons/tb";
import { BsDot } from "react-icons/bs";

import { PropsWithChildren } from "react";

function TimelineIcon() {
  return <TbMushroomFilled className="text-secondary scale-150" />;
}

function TimelineLine() {
  return <hr className="bg-secondary opacity-20" />;
}

function TimelineMiddle({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return <div className={`timeline-middle px-1 ${className}`}>{children}</div>;
}

function App() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          background: `url(${greenFlowerBackgroundInverted}) left -10% / 500px no-repeat, url(${greenFlowerBackground}) right 110% / 500px no-repeat, url(${hero}) center / cover no-repeat`,
        }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content text-center text-neutral-content">
          <div>
            <h1 className="font-cursive mb-0 font-thin text-7xl">
              Sara & Chris
            </h1>
            <div className="flex w-full text-sm font-serif justify-evenly content-center">
              <time>Tuesday, August 6th</time>
              <span className="flex content-start">⛰️</span>
              Gorham, New Hampshire
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 text-base-content">
        <article className="prose mx-auto">
          <h2>Accommodations</h2>

          <p>
            Available Sunday, August 4th 3:00 PM through Sunday, August 4th
            11:00 PM for family and friends.
          </p>

          <ul>
            <li>
              <a href="https://maps.app.goo.gl/jp49Hm4UV4KWhT3X9">
                19 Clay Brook Rd, Gorham, NH 03581
              </a>
            </li>
            <li>
              <a href="https://www.vrbo.com/249051ha?dateless=true">
                VRBO Listing
              </a>
            </li>
          </ul>
        </article>

        <div className="divider"></div>

        <div className="prose mx-auto">
          <h2>Timeline</h2>
        </div>

        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
          <li>
            <TimelineLine />
            <TimelineMiddle className="mt-3">
              <TimelineIcon />
            </TimelineMiddle>

            <div className="timeline-start md:text-end mt-2">
              <h2 className="mt-0 text-3xl">Check-in</h2>
              <p className="text-sm ml-2">Sunday, August 4th 3:00 PM</p>
            </div>

            <TimelineLine />
          </li>

          <li>
            <TimelineLine />

            <TimelineMiddle className="mt-2">
              <TimelineIcon />
            </TimelineMiddle>

            <div className="timeline-end mt-2">
              <h2 className="mt-0 text-3xl">Free Time</h2>
              <p className="text-sm">
                Monday, August 5th - Tuesday, August 6th
              </p>
            </div>

            <TimelineLine />
          </li>

          <li>
            <TimelineLine />
            <TimelineMiddle className="mt-3">
              <TimelineIcon />
            </TimelineMiddle>

            <div className="timeline-start md:text-end mt-2">
              <h2 className="mt-0 text-3xl">Wedding Day</h2>
              <p className="text-sm ml-2">Tuesday, August 6th</p>
            </div>

            <TimelineLine />
          </li>

          <li>
            <TimelineLine />
            <div className="timeline-middle px-1">
              <BsDot className="text-secondary scale-150" />
            </div>
            <div className="timeline-start md:text-end">
              <p className="indent-2 text-sm">1:00 PM Ceremony</p>
            </div>
            <TimelineLine />
          </li>

          <li>
            <TimelineLine />
            <div className="timeline-middle px-1">
              <BsDot className="text-secondary scale-150" />
            </div>
            <div className="timeline-start md:text-end">
              <p className="indent-2 text-sm">1:00 PM Ceremony</p>
            </div>
            <TimelineLine />
          </li>

          <li>
            <TimelineLine />

            <TimelineMiddle className="mt-2">
              <TimelineIcon />
            </TimelineMiddle>

            <div className="timeline-end mt-2">
              <h2 className="mt-0 text-3xl">Intimate Hike (Sara and Chris)</h2>
              <p className="text-sm">Wednesday, August 7th</p>
            </div>

            <TimelineLine />
          </li>

          <li>
            <TimelineLine />
            <div className="timeline-middle px-1">
              <BsDot className="text-secondary scale-150" />
            </div>
            <div className="timeline-end !self-end !my-0">
              <p className="indent-2 text-sm">1:00 PM Ceremony</p>
            </div>
            <TimelineLine />
          </li>

          <li>
            <TimelineLine />
            <div className="timeline-middle px-1">
              <BsDot className="text-secondary scale-150" />
            </div>
            <div className="timeline-end">
              <p className="indent-2 text-sm">1:00 PM Ceremony</p>
            </div>
            <TimelineLine />
          </li>

          <li>
            <TimelineLine />
            <TimelineMiddle className="mt-3">
              <TimelineIcon />
            </TimelineMiddle>

            <div className="timeline-start md:text-end mt-2">
              <h2 className="mt-0 text-3xl">Check-out</h2>
              <p className="text-sm ml-2">Sunday, August 4th 11:00 PM</p>
            </div>

            <TimelineLine />
          </li>
        </ul>

        <div className="divider"></div>

        <div className="prose mx-auto">
          <h2>Vendors</h2>

          <ul>
            <li>
              <a href="https://www.buckandbloom.com/">Buck and Bloom</a>
            </li>
            <li>
              <a href="https://www.autumnnomad.com/weddings-home">
                Autumn Nomad
              </a>
            </li>
            <li>
              <a href="https://apothecaflowershoppe.com/">Apotheca Flowers</a>
            </li>
            <li>
              <a href="https://babel-photos.com/">Babel Photos</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
