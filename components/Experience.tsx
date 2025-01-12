import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <div className="py-20 w-full  ">
      <h1 className="heading text-4xl font-bold text-center">
        My <span className="text-purple">Work Experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-1 grid-cols-1 gap-10 px-4 md:px-10 lg:px-20">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "linear-gradient(90deg, #04071d 0%, #0c0e23 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 border border-neutral-200 dark:border-slate-900 shadow-lg overflow-hidden rounded-xl bg-white dark:bg-slate-900"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-6 md:p-8 gap-4">
              {/* Thumbnail */}
              <img
                src={card.thumbnail}
                alt={card.title}
                className="lg:w-32 md:w-24 w-16 rounded-full border-2 border-neutral-300 dark:border-neutral-600"
              />

              {/* Title and Description */}
              <div className="lg:ms-5 flex-1">
                <h1 className="text-start text-2xl md:text-3xl font-bold mb-2 text-neutral-800 dark:text-neutral-200">
                  {card.title}{" "}
                  <span className="text-purple">{card.company}</span>
                </h1>

                <div className="text-start text-neutral-800 dark:text-neutral-200 mt-2 font-small leading-relaxed text-small">
                  {card.desc
                    .trim()
                    .split("\n")
                    .map((line, index) => (
                      <p key={index} className="mb-2">
                        {line}
                      </p>
                    ))}
                </div>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
