"use client";
import styles from "./home.module.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/Card/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/Carousel/carousel";
const LocationComponent = () => {
  let [location, setLocation] = useState<{
    city: string | undefined;
    state: string | undefined;
  }>({ city: undefined, state: undefined });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const { latitude, longitude } = position.coords;
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${process.env.NEXT_PUBLIC_OPENCAGE_KEY}`,
      );
      const { _normalized_city, state } = response.data.results[0].components;
      location = { city: _normalized_city, state: state };
      setLocation(location);
    });
  }, []);

  return (
    <div className={styles.location}>
      <div>
        <h2>Location</h2>
        {location.city && location.state ? (
          <p>
            <span>
              <Image
                src="/home/location_pin.png"
                alt=""
                width={20}
                height={10}
              />
            </span>
            {location.city}, {location.state}
          </p>
        ) : (
          <p>Getting your location...</p>
        )}
      </div>
      <button className={styles.Notifs}>
        <Image
          src="/home/notifications_bell.png"
          alt=""
          width={20}
          height={10}
        />
      </button>
    </div>
  );
};

export default function Home() {
  // fecth the images from backend and show bro
  const Images = Array(6).fill({
    image: "/home/cards_backend_sample.png",
    w: 1000,
    h: 700,
  });
  return (
    <div className={styles.parent}>
      <LocationComponent />
      <Carousel className={styles.carousel}>
        <CarouselContent>
          {Images.map((str, i) => (
            <CarouselItem key={i}>
              <Card>
                <CardContent {...str} />
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
