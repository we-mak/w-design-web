import React from "react";
import { Container, Flexbox, Box, Icon } from "@w-design/core";
import { MDXProvider } from "@mdx-js/react";
import { CodeBlock } from "../components/CodeBlock";
import { Layout } from "../components/Layout";
import "../styles/globals.css";
import Meta from "../components/Meta";

const { Column } = Flexbox;

const components = {
  pre: (props: any) => <div {...props} />,
  code: CodeBlock,
  Container,
  Flexbox,
  Column,
  Box,
  Icon
};

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Meta
        title="W-Design"
        description="A React UI toolkit library is built with typescript"
        canonical="https://design.we-mak.com"
      ></Meta>
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </Layout>
  );
}
