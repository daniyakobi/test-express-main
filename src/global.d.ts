declare module '*.module.scss' {
  const classNames: Record<string, string>;
  export default classNames;
}

declare module 'react-helmet';
