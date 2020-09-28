import React from "react";
import { Helmet } from "react-helmet";
import config from "../../data/SiteConfig";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="bg-gray-100 min-h-screen">
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        {children}
      </div>
    );
  }
}
