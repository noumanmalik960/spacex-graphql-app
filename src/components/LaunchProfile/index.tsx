import React, { useEffect } from "react";
import { useLaunchProfileQuery } from "../../generated/graphql";
import LaunchProfile from "./LaunchProfile";

interface OwnProps {
  id: number;
}

const LaunchProfileContainer = ({ id }: OwnProps) => {
  const { loading, error, data, refetch } = useLaunchProfileQuery({
    variables: { id: String(id) },
  });

  useEffect(() => {
    refetch();
  }, [id]);

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
