import HeaderTitle from "../HeaderTitle";
import DownloadedModelTable from "../DownloadedModelTable";
import ActiveModelTable from "../ActiveModelTable";

const MyModelContainer: React.FC = () => (
  <div className="flex flex-col w-full h-full pl-[63px] pr-[89px] pt-[60px]">
    <HeaderTitle title="My Models" />
    <ActiveModelTable />
    <DownloadedModelTable />
  </div>
);

export default MyModelContainer;