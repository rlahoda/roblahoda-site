import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Nav from "./Nav";
import "../scss/styles.scss";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}assets/images/favicon/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${withPrefix("/")}assets/images/favicon/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${withPrefix("/")}assets/images/favicon/favicon-16x16.png`}
        />
        <link
          rel="manifest"
          href={`${withPrefix("/")}assets/images/favicon/site.webmanifest`}
        />
        <link
          rel="mask-icon"
          href={`${withPrefix("/")}assets/images/favicon/safari-pinned-tab.svg`}
          color="#5bbad5"
        />
        <link
          rel="shortcut icon"
          href={`${withPrefix("/")}assets/images/favicon/favicon.ico`}
        />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta
          name="msapplication-config"
          content={`${withPrefix("/")}assets/images/favicon/browserconfig.xml`}
        />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="I'm a versatile, adaptable problem-solver. My strong mix of technical and creative skills give me a diverse perspective on the projects I work on."
        />
        <meta name="subject" content="" />
        <meta property="og:url" content="https://roblahoda.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Rob Lahoda • Front End Web Developer"
        />
        <meta
          property="og:image"
          content={`${withPrefix("/")}assets/social/social-twitter.jpg`}
        />
        <meta
          property="og:description"
          content="I'm a versatile, adaptable problem-solver. My strong mix of technical and creative skills give me a diverse perspective on the projects I work on."
        />
        <meta
          property="og:site_name"
          content="Rob Lahoda • Front End Web Developer"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="article:author" content="" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@rlahoda" />
        <meta name="twitter:creator" content="@rlahoda" />
        <meta name="twitter:url" content="https://roblahoda.com" />
        <meta
          name="twitter:title"
          content="Rob Lahoda • Front End Web Developer"
        />
        <meta
          name="twitter:description"
          content="I'm a versatile, adaptable problem-solver. My strong mix of technical and creative skills give me a diverse perspective on the projects I work on."
        />
        <meta
          name="twitter:image"
          content={`${withPrefix("/")}assets/social/social-twitter.jpg`}
        />

        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300,700,900"
          rel="stylesheet"
        ></link>
      </Helmet>
      <Nav />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
