const TopStats: React.FC = () => {
  const statsData = [
    {
      label: "TODAY'S SALE",
      value: "$12,426",
      change: "+36%",
      changeType: "increase",
    },
    {
      label: "TOTAL SALES",
      value: "$2,38,485",
      change: "+14%",
      changeType: "decrease",
    },
    {
      label: "TOTAL ORDERS",
      value: "84,382",
      change: "+36%",
      changeType: "increase",
    },
    {
      label: "TOTAL CUSTOMERS",
      value: "33,493",
      change: "+36%",
      changeType: "increase",
    },
  ];

  return (
    <div className="mb-4">
      <div className="w-full flex justify-between items-center my-4">
        <h1 className="text-xl font-bold text-gray-800">
          Hey Mariana –{" "}
          <span className="text-sm  text-gray-500">
            here's what's happening with your store today
          </span>
        </h1>
        <div className="flex items-center">
          {" "}
          {/* Placeholder for any additional header content */}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsData.map((stat, index) => (
          <Stat
            key={index}
            label={stat.label}
            value={stat.value}
            change={stat.change}
            changeType={stat.changeType}
          />
        ))}
      </div>
    </div>
  );
};

export default TopStats;

type StatProps = {
  label: string;
  value: string;
  change: string;
  changeType: string;
};

const Stat: React.FC<StatProps> = ({ label, value, change, changeType }) => {
  const changeColor =
    changeType === "increase" ? "text-green-500" : "text-red-500";
  return (
    <div className="bg-white p-4 border border-gray-200 rounded-lg shadow">
      <p className="text-gray-500 text-xs font-semibold mb-2">{label}</p>
      <div className={`flex justify-between items-end`}>
        <div className="text-2xl font-bold ">{value}</div>
        <div className={`text-sm ${changeColor}`}>{change}</div>
      </div>
    </div>
  );
};
