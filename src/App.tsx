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

function H2({ children }: PropsWithChildren) {
  return <h2 className="font-cursive text-6xl mb-5">{children}</h2>;
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

      <div className="text-base-content mt-4 mb-24">
        <div className="bg-secondary text-gray-100 -mt-4 py-4 mb-4">
          <article className="container prose !prose-invert mx-auto">
            <H2>Accommodations</H2>

            <p className="text-sm !text-white">
              Available Sunday, August 4th 3:00 PM through Sunday, August 4th
              11:00 PM for family and friends.
            </p>

            <ul className="text-sm marker:text-white font-normal">
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
        </div>

        <div className="container prose mx-auto">
          <H2>Timeline</H2>
          <ul className="not-prose timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
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

              <TimelineMiddle className="mt-2">
                <TimelineIcon />
              </TimelineMiddle>

              <div className="timeline-end mt-2">
                <h2 className="mt-0 text-3xl">Intimate Hike</h2>
                <span className="text-base">Sara and Chris</span>
                <p className="text-sm">Wednesday, August 7th</p>
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
                <p className="text-sm ml-2">Friday, August 9th 11:00 PM</p>
              </div>

              <TimelineLine />
            </li>
          </ul>
        </div>

        <div className="divider"></div>

        <div className="container prose mx-auto">
          <H2>Vendors</H2>

          <div className="flex justify-evenly not-prose">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <a href="https://apothecaflowershoppe.com/">
                  <span className="sr-only">Apotheca Flowers</span>
                  <img src="/apothica.jpeg" />
                </a>
              </div>
            </div>
            <div className="avatar">
              <div className="w-24 rounded-full">
                <a href="https://www.buckandbloom.com/">
                  <span className="sr-only">Buck and Bloom</span>
                  <img src="/buck-and-bloom.jpeg" />
                </a>
              </div>
            </div>

            <div className="avatar">
              <div className="w-24 rounded-full">
                <a href="https://www.autumnnomad.com/weddings-home">
                  <span className="sr-only">Autumn Nomad</span>
                  <img src="autumn-nomad.jpeg" />
                </a>
              </div>
            </div>

            <div className="avatar">
              <div className="w-24 rounded-full">
                <a href="https://babel-photos.com/">
                  <span className="sr-only">Babel Photos</span>

                  <img src="babel-photos.jpeg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
