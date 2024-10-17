import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Translate from "@docusaurus/Translate";

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx("col col--4")}>
            <div className="text--center padding-horiz--md">
              <h3>
                {" "}
                <Translate>Enhance Email Security</Translate>
              </h3>
              <p>
                <Translate>
                  Mailguard provides robust protection against phishing and
                  spoofing attacks, ensuring that your email communications
                  remain secure and your brand's reputation is intact.
                </Translate>
              </p>
            </div>
          </div>
          <div className={clsx("col col--4")}>
            <div className="text--center padding-horiz--md">
              <h3>
                {" "}
                <Translate>Monitor Email Traffic</Translate>
              </h3>
              <p>
                {" "}
                <Translate>
                  Track all email traffic in real-time to ensure deliverability
                  and identify unauthorized senders. Mailguard gives you peace
                  of mind with comprehensive email monitoring.
                </Translate>
              </p>
            </div>
          </div>
          <div className={clsx("col col--4")}>
            <div className="text--center padding-horiz--md">
              <h3>
                {" "}
                <Translate>User-Friendly Interface</Translate>
              </h3>
              <p>
                {" "}
                <Translate>
                  Our intuitive interface makes it easy for IT specialists to
                  manage email settings and alerts, allowing you to focus on
                  your business while we handle the security.
                </Translate>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
