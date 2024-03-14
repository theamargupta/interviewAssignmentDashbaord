import TopStats from "../TopStats";
import RecentCustomers from "./RecentCustomers";
import RecentTransactions from "./Transactions";
import SalesReport from "./SalesReport";
import TrafficSources from "./TrafficSources";

const MainContent = () => {
  return (
    <div className="container mx-auto p-6 w-[80%]">
      <TopStats />
      <div className="flex flex-wrap md:flex-nowrap justify-between space-y-4 md:space-y-0 md:space-x-4">
        {/* Left column */}
        <div className="flex-1">
          <SalesReport />
          <RecentTransactions />
        </div>
        {/* Right column */}
        <div className="w-full md:w-1/3">
          <TrafficSources />
          <RecentCustomers />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
