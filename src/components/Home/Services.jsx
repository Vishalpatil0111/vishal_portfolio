import React from "react";
import Carousel from "../Carousel";
import FlowingMenu from "../FlowingMenu";

function Services() {
  const demoItems = [
    {
      text: "Plan",
      image:
        "https://img.freepik.com/premium-photo/plan-3d-rendering-isolated-calendar-with-organization-chart_519469-3354.jpg?semt=ais_hybrid&w=740&q=80",
    },
    {
      text: "Design",
      image:
        "https://learn.g2.com/hubfs/G2CM_FI978_Learn_Article_Images_%5BGraphic_Design%5D_V1b.png",
    },
    {
      text: "Build",
      image:
        "https://www.shutterstock.com/image-photo/programmers-hands-coding-on-laptop-260nw-2006340548.jpg",
    },
    {
      text: "Deliever",
      image:
        "https://cdn.pixabay.com/photo/2018/03/10/18/03/laptop-3214756_1280.png",
    },
  ];
  const items = [
    {
      id: "1",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "2",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "3",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },

    {
      id: "4",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "5",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "6",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
    {
      id: "1",
      img: "https://picsum.photos/id/1015/600/900?grayscale",
      url: "https://example.com/one",
      height: 400,
    },
    {
      id: "7",
      img: "https://picsum.photos/id/1011/600/750?grayscale",
      url: "https://example.com/two",
      height: 250,
    },
    {
      id: "8",
      img: "https://picsum.photos/id/1020/600/800?grayscale",
      url: "https://example.com/three",
      height: 600,
    },
  ];
  return (
    <div className="w-full text-white min-h-screen grid grid-cols-1  md:grid-cols-3 gap-4 p-2 md:p-4">
      <div className="h-full flex flex-col items-center justify-center ">
        <h1 className="md:text-[45px] text-center md:text-start text-[35px] lg:text-[55px] text-wrap">
          Turning Your Requirements into Reliable <br />
          <span className="px-5 py-1  md:rounded-r-full md:text-[40px] text-[30px] lg:text-[40px] bg-yellow-300">
            Services
          </span>
        </h1>
        <a
          className="h-fit w-fit self-center md:self-start mt-4 text-white bg-blue-400 cursor-pointer font-semibold px-3 py-2 text-lg md:text-xl"
          href="mailto:vishall.patil0111@gmail.com?subject=Get%20Quote%20Request&body=Hi,%20I%20would%20like%20to%20get%20a%20quote."
        >
          <button className=" ">Get Quote</button>
        </a>
      </div>
      <div className="h-full  flex flex-col items-center justify-center p-4">
        <h1 className="font-semibold text-2xl uppercase">Services</h1>
        <div>
          <Carousel
            baseWidth={300}
            autoplay={true}
            autoplayDelay={3000}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </div>
      </div>
      <div className="h-full">
        <div
          style={{
            height: "300px",
            position: "relative",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <FlowingMenu items={demoItems} />
        </div>
      </div>
    </div>
  );
}

export default Services;
