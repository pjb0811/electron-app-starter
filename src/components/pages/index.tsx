import * as React from 'react';
import * as Loadable from 'react-loadable';
import Loading from './Loading';

const loadableComponent = (component: string) => {
  return Loadable({
    loader: () => import(`${component}`),
    loading() {
      return <Loading/>;
    }
  });
};

export const Home = loadableComponent('./Home');
export const About = loadableComponent('./About');
export const Counter = loadableComponent('./Counter');