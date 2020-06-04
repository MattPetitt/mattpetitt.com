import { useState, useEffect } from "react";
import Menu from "components/Menu";
import { Document, Page } from "react-pdf";

// https://usehooks.com/useWindowSize/
function useWindowSize() {
  const isClient = typeof window === "object";

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

const Resume = () => {
  const size = useWindowSize();
  const pdfWidth = size.width - 16 * 4;
  return (
    <>
      <Menu />
      <main>
        <Document file="MattPetitt.pdf">
          <Page pageNumber={1} renderMode="svg" width={pdfWidth} />
        </Document>
      </main>
    </>
  );
};

export default Resume;
