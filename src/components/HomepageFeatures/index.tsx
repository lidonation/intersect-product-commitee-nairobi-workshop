import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import ServicesImage from "@site/static/img/services.jpeg";
import JoinTeamImage from "@site/static/img/join-team.jpeg";
import IntersectImage from "@site/static/img/intersect.jpeg";

import { Cta } from "../Cta";

type FeatureItem = {
  title: string;
  img: string | ComponentType<any>;
  description: JSX.Element;
  href?: string;
  cta?: string;
};

const FeatureList: FeatureItem[] = [
];

function Feature({
  title,
  img: Image,
  description,
  href,
  cta
}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {typeof Image === "string" ? (
          <img src={Image} />
        ) : (
          <Image />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        {href && cta ? (
          <Cta appearance="secondary" href={href}>
            {cta}
          </Cta>
        ) : null}
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
