import React, { useRef, useEffect } from "react";
import gsap, { TimelineMax } from "gsap";
import TextPlugin from "gsap/TextPlugin";
import EasePack from "gsap/EasePack";

function Tagline() {
  let tl = useRef();

  gsap.registerPlugin(TextPlugin, EasePack);

  let tagLines = [
    "I Tell Stories",
    "I Theme In Drupal",
    "I Take Pictures",
    "I'm A Visual Storyteller",
    "I Make Videos",
    "I Develop In React",
    "I Like Pizza",
    "I Build Websites"
  ];

  useEffect(() => {
    tl.current = new TimelineMax({ repeat: -1 });
    tl.current.delay(2);
    for (var i = 0; i < tagLines.length; i++) {
      let tagline = tagLines[i];
      tl.current.to("#indexTagline", {
        text: tagline,
        ease: Linear.easeNone,
        delay: 2
      });
    }
  }, []);

  return (
    <div className="pageTagline__container">
      <h2 ref={tl} id="indexTagline" className="pageTagline">
        I Build Websites
      </h2>
      <h2 className="pageTagline__helper" aria-hidden="true">
        I'm. A. Visual. Storyteller.
      </h2>
    </div>
  );
}

export default Tagline;
