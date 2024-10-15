import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Enhance Email Security",
    Svg: require("@site/static/img/shield-tick.svg").default, // You may want to replace the image
    description: (
      <>
        Mailguard provides robust protection against phishing and spoofing
        attacks, ensuring that your email communications remain secure and your
        brand's reputation is intact.
      </>
    ),
  },
  {
    title: "Monitor Email Traffic",
    Svg: require("@site/static/img/eye.svg").default, // You may want to replace the image
    description: (
      <>
        Track all email traffic in real-time to ensure deliverability and
        identify unauthorized senders. Mailguard gives you peace of mind with
        comprehensive email monitoring.
      </>
    ),
  },
  {
    title: "User-Friendly Interface",
    Svg: require("@site/static/img/face-content.svg").default, // You may want to replace the image
    description: (
      <>
        Our intuitive interface makes it easy for IT specialists to manage email
        settings and alerts, allowing you to focus on your business while we
        handle the security.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text-center">
        <Svg
          className={`${styles.featureSvg} ${styles.centeredIcon}`}
          role="img"
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
