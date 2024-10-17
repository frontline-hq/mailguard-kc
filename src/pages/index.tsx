import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import Translate from "@docusaurus/Translate";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={`${styles.heroTitle} hero__title`}>
          {siteConfig.title}
        </Heading>
        <p className={`${styles.heroSubtitle} hero__subtitle`}>
          <Translate>Mailguard Knowledge Center</Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/knowledge-center/Starting%20with%20Mailguard/Getting%20started"
          >
            <Translate>Start with Mailguard</Translate>
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="/knowledge-center/Starting%20with%20Mailguard/Getting%20started"
          >
            <Translate> Learn about DMARC</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
