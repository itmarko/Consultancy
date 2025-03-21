import React from 'react';
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from 'react-router-dom';

const TimelineData = [
  {
    id: "1",
    date: "Step-1",
    title: "Your working process you can present.",
    description: "We work closely with clients to understand their project requirements, goals, and objectives before beginning any development work.",
    image: "timeline-01",
    workingStep: [
      {
        stepTitle: "Gain your works",
        stepDescription: "We aim to help clients achieve their goals.",
      },
      {
        stepTitle: "Working process",
        stepDescription: "Collaborative process delivering tailored software solutions.",
      },
    ]
  },
  {
    id: "2",
    date: "Step-2",
    title: "Our company working process to present.",
    description: "Our working process involves collaboration, communication, and attention to detail to deliver high-quality software solutions that meet our clients' needs.",
    image: "timeline-02",
    workingStep: [
      {
        stepTitle: "Follow this process",
        stepDescription: "Collaborate, communicate, deliver high-quality solutions.",
      },
      {
        stepTitle: "Working experience",
        stepDescription: "Expertise in delivering quality software solutions.",
      },
    ]
  },
]

const TimelineOne = () => {
  return (
    <div className="relative pt-20 pb-20">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300"></div>
      {/* Start Single Timeline */}
      {TimelineData.map((data, index) => (
        <div className="mt-16 flex flex-wrap items-center" key={index}>
          <div className="flex-shrink-0 w-8 h-8 bg-blue-500 rounded-full mx-auto relative z-10">
            <div className="w-4 h-4 bg-white rounded-full mx-auto mt-2"></div>
          </div>
          <div className="flex-1 px-6 lg:px-16 py-8">
            <div className="max-w-3xl mx-auto">
              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}>
                <span className="text-gray-500 text-lg">{data.date}</span>
              </ScrollAnimation>

              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}>
                <h2 className="text-3xl font-bold mt-4">{data.title}</h2>
              </ScrollAnimation>

              <ScrollAnimation
                animateIn="fadeInUp"
                animateOut="fadeInOut"
                animateOnce={true}>
                <p className="text-gray-700 mt-4">{data.description}</p>
              </ScrollAnimation>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.workingStep.map((step, index) => (
                  <div className="working-list" key={index}>
                    <ScrollAnimation
                      animateIn="fadeInUp"
                      animateOut="fadeInOut"
                      animateOnce={true}>
                      <h5 className="text-xl font-semibold">{step.stepTitle}</h5>
                    </ScrollAnimation>

                    <ScrollAnimation
                      animateIn="fadeInUp"
                      animateOut="fadeInOut"
                      animateOnce={true}>
                      <p className="text-gray-600">{step.stepDescription}</p>
                    </ScrollAnimation>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <ScrollAnimation
                  animateIn="fadeInUp"
                  animateOut="fadeInOut"
                  animateOnce={true}>
                  <Link to="/contact-us" className="inline-block bg-blue-500 text-white py-3 px-8 rounded-full text-lg hover:bg-blue-600 transition">
                    Get Started Now
                  </Link>
                </ScrollAnimation>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-6 lg:px-16">
            <div className="thumbnail">
              <img className="w-full" src={`./images/timeline/${data.image}.png`} alt={data.title} />
            </div>
          </div>
        </div>
      ))}
      {/* End Single Timeline */}
    </div>
  );
}

export default TimelineOne;
