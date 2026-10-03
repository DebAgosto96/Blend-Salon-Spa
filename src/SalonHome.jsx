import React from "react";
import "./SalonHome.css";

import salonBackground from "./assets/Salon.jpg";

const services = [
  {
    title: "Hair",
    text: "Cuts, styling, color, treatments, and personalized hair services designed around you.",
  },
  {
    title: "Nails",
    text: "Beautiful manicures, pedicures, and nail services for an effortlessly polished look.",
  },
  {
    title: "Skin",
    text: "Relaxing skincare services focused on refreshing, restoring, and caring for your skin.",
  },
  {
    title: "Brows & Lashes",
    text: "Detail-focused brow and lash services created to enhance your natural features.",
  },
  {
    title: "Beauty",
    text: "Professional beauty services for everyday confidence, special occasions, and everything between.",
  },
  {
    title: "Spa",
    text: "A calming experience designed to help you relax, reset, and leave feeling renewed.",
  },
];

const team = [
  {
    name: "Tessa Gorder",
    role: "Hair Stylist",
    image: "/TessaGorder.jpg",
  },
  {
    name: "Brittany",
    role: "Color Specialist",
    image: "/Brittney.jpg",
  },
  {
    name: "Stylist Name",
    role: "Nail Artist",
    image: "/maddy.jpg",
  },
  {
    name: "Stylist Name",
    role: "Esthetician",
    image: null,
  },
];

const galleryImages = [
  "/hair 1.jpg",
  "/nails 1.jpg",
  "/hair 2.jpg",
  "/nails 2.jpg",
  "/hair 3.jpg",
  "/nails 3.jpg",
  "/hair 4.jpg",
  "/nails 4.jpg",
  "/hair 5.jpg",
  "/nails 5.jpg",
  "/hair 6.jpg",
  "/nails 6.jpg",
  "/hair 7.jpg",
];

const SalonHome = () => {
  return (
    <div
      className="salon-page"
      style={{
        backgroundImage: `url(${salonBackground})`,
      }}
    >
      {/* HERO */}

      <section id="home" className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <p className="eyebrow">WELCOME TO BLEND SALON & SPA</p>

          <h1>
            Beauty that
            <br />
            <em>feels like you.</em>
          </h1>

          <p className="hero-description">
            A modern salon and spa experience where expert beauty services meet
            relaxation, confidence, and personalized care.
          </p>

          <div className="hero-actions">
            <a href="#services" className="button button-primary">
              Explore Our Services
            </a>

            <a href="#about" className="button button-outline">
              About Blend
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section id="services" className="services-section">
        <div className="section-header">
          <p className="eyebrow">WHAT WE DO</p>

          <h2>
            Services made
            <br />
            <em>for you.</em>
          </h2>

          <p>
            From hair and beauty to relaxing spa services, Blend offers
            personalized care in a welcoming and elevated environment.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}

      <section id="about" className="about-section">
        <div className="about-content">
          <p className="eyebrow">ABOUT BLEND</p>

          <h2>
            Beauty, comfort
            <br />
            <em>& confidence.</em>
          </h2>

          <p>
            Blend Salon & Spa is a space created for beauty, relaxation, and
            self-care. Our goal is to make every guest feel comfortable,
            confident, and cared for from the moment they walk through our
            doors.
          </p>

          <p>
            We believe great beauty services should feel personal. Every visit
            is centered around understanding your style, your needs, and the
            experience you want.
          </p>
        </div>
      </section>

      {/* TEAM */}

      <section id="team" className="team-section">
        <div className="section-header">
          <p className="eyebrow">MEET THE TEAM</p>

          <h2>
            The people behind
            <br />
            <em>Blend.</em>
          </h2>
        </div>

        <div className="team-slider">
          <div className="team-track">
            {[...team, ...team].map((member, index) => (
              <div
                className="team-card"
                key={`${member.name}-${member.role}-${index}`}
              >
                <div className="team-photo">
                  {member.image && (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="team-image"
                    />
                  )}
                </div>

                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      BOOK APPOINTMENT

      <section id="book" className="booking-section">
        <div className="booking-content">
          <p className="eyebrow">READY WHEN YOU ARE</p>

          <h2>
            Your next look
            <br />
            <em>starts here.</em>
          </h2>

          <p className="booking-description">
            Ready for your next appointment at Blend Salon & Spa? Explore our
            services and schedule your visit through our online booking page.
          </p>

          <a
            href="https://www.vagaro.com/casscuts/services"
            target="_blank"
            rel="noopener noreferrer"
            className="button button-primary"
          >
            Book Your Appointment
          </a>
        </div>
      </section>

     

      {/* GALLERY */}

      <section id="gallery" className="gallery-section">
        <div className="section-header">
          <p className="eyebrow">OUR WORK</p>

          <h2>
            A little look
            <br />
            <em>inside Blend.</em>
          </h2>

          <p>
            Explore our salon, our work, and the beauty experiences created by
            the Blend team.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <div className="gallery-item" key={image}>
              <img
                src={image}
                alt={`Blend Salon gallery ${index + 1}`}
                className="gallery-image"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SalonHome;