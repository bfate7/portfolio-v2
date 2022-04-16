import ArchiveHeader from "../components/ArchiveHeader";
import ArchiveTable from "../components/ArchiveTable";
import { projects } from "../data/projects";

const archive = () => {
  return (
    <>
      <ArchiveHeader />
      <div className='my-20'>
        <ArchiveTable projects={projects} />
      </div>
    </>
  );
};

export default archive;
