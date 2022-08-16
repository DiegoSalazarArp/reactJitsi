import React, { useEffect, useState } from "react";
import { JitsiMeeting } from "@jitsi/react-sdk";

export const VideoJitsi = () => {
  const [url, setUrl] = useState("");

  let result = "";
  let urlCompleta = "";
  useEffect(() => {
    const url = window.location.href;
    const obtenerID = url.lastIndexOf("/");
    result = url.substring(obtenerID + 1);
    urlCompleta = `vpaas-magic-cookie-138693e12bfd455db82fea33bf518181/${result}`;

    setUrl(urlCompleta);
  }, []);

  return (
    <JitsiMeeting
      roomName={url}
      getIFrameRef={(node) => (node.style.height = "800px")}
    />
  );
};
