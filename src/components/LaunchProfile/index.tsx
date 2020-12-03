import React from "react";
import { useLaunchProfileQuery } from "../../generated/graphql";
import LaunchProfile from "./LaunchProfile";

const LaunchProfileContainer = () => {
  const { loading, error, data } = useLaunchProfileQuery({
    variables: { id: "42" },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>ERROR!!</div>;
  }

  if (!data) {
    return <div>Select a launch from the panel</div>;
  }

  return <LaunchProfile data={data} />;
};

export default LaunchProfileContainer;
