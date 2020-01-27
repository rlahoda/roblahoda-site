import React, { useRef, useEffect } from "react";
import gsap, { TimelineMax } from "gsap";
import TextPlugin from "gsap/TextPlugin";
import EasePack from "gsap/EasePack";

function Tagline(props) {
  console.log(props);

  let tl = useRef();

  gsap.registerPlugin(TextPlugin, EasePack);

  const tagLines = props.taglines || ["I Build Websites"];

  useEffect(() => {
    if (tagLines.length > 1) {
      tl.current = new TimelineMax({ repeat: -1 });
      tl.current.delay(2);
      for (var i = 0; i < tagLines.length; i++) {
        let tagline = tagLines[i].text;
        tl.current.to("#indexTagline", {
          text: tagline,
          delay: 2
        });
      }
    }
  }, []);

  return (
    <div className="pageTagline__container">
      <h2 ref={tl} id="indexTagline" className="pageTagline">
        {tagLines[0].text}
      </h2>
      <h2 className="pageTagline__helper" aria-hidden="true">
        I'm. A. Visual. Storyteller.
      </h2>
    </div>
  );
}

export default Tagline;
