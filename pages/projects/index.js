import Link from "next/link";
import Bio from "pages/projects/bio";
import Upj from "pages/projects/upj";
import Synapsify from "pages/projects/synapsify";
import CollectForKids from "pages/projects/collect-for-kids";
import CardDesigner from "pages/projects/card-designer";
import CardCapture from "pages/projects/card-capture";
import CardPortal from "pages/projects/card-portal";
import CuriositystreamApp from "pages/projects/curiositystream-app";
import CuriositystreamMarketing from "pages/projects/curiositystream-marketing";
import CuriositystreamAdmin from "pages/projects/curiositystream-admin";

function Projects() {
  return (
    <div className="py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="lg:text-center my-12">
          <p className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Projects
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <Bio isPreview={true} />
            <Upj isPreview={true} />
            <Synapsify isPreview={true} />
            <CollectForKids isPreview={true} />
            <CardDesigner isPreview={true} />
            <CardCapture isPreview={true} />
            <CardPortal isPreview={true} />
            <CuriositystreamApp isPreview={true} />
            <CuriositystreamMarketing isPreview={true} />
            <CuriositystreamAdmin isPreview={true} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
