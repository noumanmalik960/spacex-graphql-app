import React from "react";
import { useLaunchListQuery } from "../../generated/graphql";
import LaunchList from "./LaunchList";

const LaunchListContainer = () => {
  const { loading, error, data } = useLaunchListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR!!</div>;
  }

  return <LaunchList data={data} />;
};

export default LaunchListContainer;
