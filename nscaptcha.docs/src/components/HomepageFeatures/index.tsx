import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        NSCaptcha is designed to be incredibly easy to install and use, 
        allowing you to quickly integrate it into your projects.
         Just a few lines of code are all it takes to enhance your site's security.
      </>
    ),
  },
  {
    title: 'Focus on Security, Not Complexity',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        NSCaptcha empowers you to protect your site against bots and spam without
         requiring specialized security knowledge. We've simplified the complexities
          of web security so you can focus on your site's content.
      </>
    ),
  },
  {
    title: 'The Power of Customization',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        NSCaptcha is fully customizable. You can tailor the CAPTCHA's appearance 
        to match your site's design, use your preferred fonts and colors,
         and even adjust its difficulty level.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
