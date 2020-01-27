import React from "react";
import SvgAtom from "./Atom";
import SvgBabel from "./Babel";
import SvgCodepen from "./Codepen";
import SvgCss3 from "./Css3";
import SvgCssGrid from "./CssGrid";
import SvgDrupal from "./Drupal";
import SvgDrupal8 from "./Drupal8";
import SvgEmail from "./Email";
import SvgFirefox from "./Firefox";
import SvgFlexbox from "./Flexbox";
import SvgGit from "./Git";
import SvgGithub from "./Github";
import SvgGreensock from "./Greensock";
import SvgGulp from "./Gulp";
import SvgHtml5 from "./Html5";
import SvgIllustrator from "./Illustrator";
import SvgJavascript from "./Javascript";
import SvgJest from "./Jest";
import SvgLando from "./Lando";
import SvgLeaflet from "./Leaflet";
import SvgLinkedIn from "./LinkedIn";
import SvgTwitter from "./Twitter";
import SvgNetlify from "./Netlify";
import SvgNpm from "./Npm";
import SvgPantheon from "./Pantheon";
import SvgParagraphsModule from "./ParagraphsModule";
import SvgPhp from "./Php";
import SvgReact from "./React";
import SvgRedux from "./Redux";
import SvgSass from "./Sass";
import SvgSlack from "./Slack";
import SvgTwig from "./Twig";
import SvgUiKit from "./UiKit";
import SvgVsCode from "./VsCode";
import SvgWordpress from "./Wordpress";
import SvgXd from "./Xd";
import SvgGatsby from "./Gatsby";

function IconDisplay({ icon, styles, childProps }) {
  switch (icon) {
    case "Atom":
      return <SvgAtom className={styles} {...childProps} />;
    case "Babel":
      return <SvgBabel className={styles} {...childProps} />;
    case "Codepen":
      return <SvgCodepen className={styles} {...childProps} />;
    case "Css3":
      return <SvgCss3 className={styles} {...childProps} />;
    case "CssGrid":
      return <SvgCssGrid className={styles} {...childProps} />;
    case "Drupal":
      return <SvgDrupal className={styles} {...childProps} />;
    case "Drupal8":
      return <SvgDrupal8 className={styles} {...childProps} />;
    case "Email":
      return <SvgEmail className={styles} {...childProps} />;
    case "Firefox":
      return <SvgFirefox className={styles} {...childProps} />;
    case "Flexbox":
      return <SvgFlexbox className={styles} {...childProps} />;
    case "Git":
      return <SvgGit className={styles} {...childProps} />;
    case "Github":
      return <SvgGithub className={styles} {...childProps} />;
    case "Greensock":
      return <SvgGreensock className={styles} {...childProps} />;
    case "Gulp":
      return <SvgGulp className={styles} {...childProps} />;
    case "Html5":
      return <SvgHtml5 className={styles} {...childProps} />;
    case "Illustrator":
      return <SvgIllustrator className={styles} {...childProps} />;
    case "Javascript":
      return <SvgJavascript className={styles} {...childProps} />;
    case "Jest":
      return <SvgJest className={styles} {...childProps} />;
    case "Lando":
      return <SvgLando className={styles} {...childProps} />;
    case "Leaflet":
      return <SvgLeaflet className={styles} {...childProps} />;
    case "Linkedin":
      return <SvgLinkedIn className={styles} {...childProps} />;
    case "Netlify":
      return <SvgNetlify className={styles} {...childProps} />;
    case "Npm":
      return <SvgNpm className={styles} {...childProps} />;
    case "Pantheon":
      return <SvgPantheon className={styles} {...childProps} />;
    case "Paragraphs":
      return <SvgParagraphsModule className={styles} {...childProps} />;
    case "PHP":
      return <SvgPhp className={styles} {...childProps} />;
    case "React":
      return <SvgReact className={styles} {...childProps} />;
    case "Redux":
      return <SvgRedux className={styles} {...childProps} />;
    case "Sass":
      return <SvgSass className={styles} {...childProps} />;
    case "Slack":
      return <SvgSlack className={styles} {...childProps} />;
    case "Twig":
      return <SvgTwig className={styles} {...childProps} />;
    case "Twitter":
      return <SvgTwitter className={styles} {...childProps} />;
    case "UiKit":
      return <SvgUiKit className={styles} {...childProps} />;
    case "VsCode":
      return <SvgVsCode className={styles} {...childProps} />;
    case "Wordpress":
      return <SvgWordpress className={styles} {...childProps} />;
    case "XD":
      return <SvgXd className={styles} {...childProps} />;
    case "Gatsby":
      return <SvgGatsby className={styles} {...childProps} />;
    default:
      return "";
  }
}

export default IconDisplay;
