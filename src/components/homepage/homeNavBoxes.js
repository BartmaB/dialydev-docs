import React from 'react';
import clsx from 'clsx';
import styles from './homeNavBoxes.module.css';

const FeatureList = [
  {
    title: 'Welcome to the Data Science Platform',
    icon: 'img/icons/getting-started.svg',
    items: [
      {url: "docs/getting-started/browser-extension-installation", text: "Introduction to the DataScience Platform"},
      {url: "docs/getting-started/pwa", text: "The DnA Team – Products and Services"},
      {url: "docs/getting-started/pwa", text: "DSP Features and Offer"},
      {url: "docs/getting-started/pwa", text: "DSP Team"},
    ]
  },
  {
    title: 'General inforamtion',
    icon: 'img/icons/setting-up-feed.svg',
    items: [
      {url: "docs/getting-started/browser-extension-installation", text: "EDL Data Approval Process"},
      {url: "docs/getting-started/pwa", text: "Authorization concept"},
      {url: "docs/getting-started/pwa", text: "Consultancies"},
      {url: "docs/getting-started/pwa", text: "Accessing data on the DSP"},
      {url: "docs/getting-started/pwa", text: "Requests"},
    ]
  },
  {
    title: 'EDL FAQ',
    icon: 'img/icons/key-features.svg',
    items: [
      {url: "docs/getting-started/browser-extension-installation", text: "EDL Kafka Migration"},
    ]
  },
  {
    title: 'Trusted Structures',
    icon: 'img/icons/your-profile.svg',
    items: [
      {url: "docs/getting-started/browser-extension-installation", text: "TRS Metadata Views"},
    ]
  },
  {
    title: 'Azure DevOps Project',
    icon: 'img/icons/squads.svg',
    items: [
      {url: "docs/getting-started/browser-extension-installation", text: "Create and publish a lab Wiki"},
      {url: "docs/getting-started/pwa", text: "Git Flow"},
      {url: "docs/getting-started/pwa", text: "Best Practices"},
      {url: "docs/getting-started/pwa", text: "CI CD"},
      {url: "docs/getting-started/pwa", text: "Branch Policies"},
      {url: "docs/getting-started/pwa", text: "Request Basic Licence DevOps"},
    ]
  },
  {
    title: 'Data Catalog',
    icon: 'img/icons/customization.svg',
    items: [
      {url: "docs/getting-started/browser-extension-installation", text: "Data Catalog"},
    ]
  },
  {
    title: 'Generally Useful Information',
    icon: 'img/icons/content-creator.svg',
    items: [
      {url: "docs/getting-started/browser-extension-installation", text: "EDL Data Approval Process"},
    ]
  },
  {
    title: 'Machine Learning',
    icon: 'img/icons/oss-contributors.svg',
    items: [
      {url: "docs/for-oss-contributors/how-to%20contribute-to-daily-dev", text: "How to contribute to daily.dev"},
    ]
  },
  {
    title: 'Monitoring',
    icon: 'img/icons/oss-contributors.svg',
    items: [
      {url: "docs/for-oss-contributors/how-to%20contribute-to-daily-dev", text: "Cost effective monitoring"},
      {url: "docs/for-oss-contributors/how-to%20contribute-to-daily-dev", text: "Out of the box monitoring"},
    ]
  },
];

function FeatureItem({url, text}){
  return (
    <li><a className={styles.listContainerLink} href={url}>{text}</a></li>
  );
}


function Feature({title, icon, items }) {


  return (
    <article className={clsx('col col--4')}>
      <div className={styles.homecard}>
        <img src={icon} className={styles.homeIcon}></img>
        <h2>{title}</h2>
        <div className={styles.listContainer}>
        <ul>
          {items.map((props, idx) => (
            <FeatureItem key={idx} {...props} />
          ))}
        </ul>
        </div>
      </div>

    </article>
  );
}





export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
        <ul className={styles.grid3col}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </ul>
    </section>
  );
}
