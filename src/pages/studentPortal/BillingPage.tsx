{
  /* TODO: remove the fake data below */
}

{
  /* Fake data. orginal data comes from DB */
}

interface fakeBillingData {
  id: number;
  index: number;
  number: string;
  teacher: string;
  date: string;
  amount: string;
  checked: boolean;
}
const fakeBillingData: fakeBillingData[] = [
  {
    id: 1,
    index: 1,
    number: "INV-0201-2023",
    teacher: "Anna Kravchuk",
    date: "5/27/15",
    amount: "200.00",
    checked: true,
  },
  {
    id: 2,
    index: 2,
    number: "INV-0002-2023",
    teacher: "Labour Matters",
    date: "5/19/12",
    amount: "1200.00",
    checked: true,
  },
  {
    id: 3,
    index: 3,
    number: "INV-0021-2023",
    teacher: "Family Law Matters",
    date: "3/4/16",
    amount: "16.00",
    checked: false,
  },
  {
    id: 4,
    index: 4,
    number: "INV-0231-2023",
    teacher: "Direct Taxes Matter",
    date: "3/4/16",
    amount: "321.00",
    checked: false,
  },
  {
    id: 5,
    index: 5,
    number: "INV-0001-2023",
    teacher: "Criminal Matters",
    date: "7/27/13",
    amount: "100.00",
    checked: false,
  },
  {
    id: 6,
    index: 6,
    number: "INV-0241-2023",
    teacher: "Election Matters",
    date: "5/27/15",
    amount: "500.00",
    checked: true,
  },
  {
    id: 7,
    index: 7,
    number: "INV-0012-2023",
    teacher: "Indirect Taxes Matters",
    date: "7/11/19",
    amount: "71.00",
    checked: false,
  },
  {
    id: 8,
    index: 8,
    number: "INV-0018-2023",
    teacher: "Service Matters",
    date: "9/23/16",
    amount: "1000.00",
    checked: false,
  },
  {
    id: 9,
    index: 9,
    number: "INV-0109-2023",
    teacher: "Criminal Matters",
    date: "8/2/19",
    amount: "500.00",
    checked: false,
  },
  {
    id: 10,
    index: 10,
    number: "INV-0017-2023",
    teacher: "Criminal Matters",
    date: "8/2/19",
    amount: "800.00",
    checked: false,
  },
];

export const BillingPage = () => {
  return (
    <>
      {/* Top Header Section */}
      <div
        className="flex flex-wrap  justify-between items-center gap-4 "
        style={{ fontFamily: '"Inter", sans-serif' }}
      >
        <h2 className="text-3xl sm:text-5xl font-bold inline-block text-transparent bg-clip-text bg-linear-to-r from-[#7186FF] to-[#FE7587] pb-4">
          Billing
        </h2>

        <div className="flex flex-wrap gap-4 items-center ">
          <div className="flex items-center gap-2 border bg-white border-[#E4E4E4] text-[#959595] rounded-lg px-4 flex-1 min-w-37.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search Billing"
              className="bg-white text-gray-800 py-2 flex-1 text-sm outline-none w-full"
            />
          </div>

          <button className="bg-[#7839CD] hover:opacity-80 px-4 sm:px-6 py-2 rounded-xl font-semibold flex items-center gap-2 sm:gap-4 transition-all">
            ADD <span className="mb-0.5 ml-2">+</span>
          </button>
        </div>
      </div>
      <div className="h-px w-full bg-white  mb-6"></div>
      {/* Tabs Header */}
      <div className="border-b border-gray-800 mb-6">
        <div className="inline-block border-b-2 border-[#7839CD] pb-2 px-4 text-sm font-semibold">
          Invoice
        </div>
      </div>

      {/* Main Table Container */}
      <div className="bg-[#16161a] rounded-xl overflow-hidden shadow-2xl border border-white/5 select-none">
        {/* TODO:  Set Inter font for the table then add it in the className */}
        <div className="relative  overflow-x-auto">
          <table
            className="w-full text-left border-collapse min-w-[600px] "
            style={{ fontFamily: '"Inter", sans-serif' }}
          >
            <thead>
              <tr className="text-white text-sm  border-b border-[#211C27] font-bold">
                <th className="p-5 w-16 text-center">
                  <div className="w-5 h-5 border-2 border-gray-600 rounded m-auto"></div>
                </th>
                <th className="p-5">Index#</th>
                <th className="p-5">Invoice Number</th>
                <th className="p-5">Teacher</th>
                <th className="p-5">Invoice Date</th>
                <th className="p-5">Invoice Amount</th>
                <th className="p-5"></th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {fakeBillingData.map((inv, index) => (
                <tr
                  key={inv.id}
                  className={` text-[#B9B9B9] p-5 text-sm ${index % 2 === 0 ? "bg-[#0F0E13]" : "bg-transparent"} hover:bg-white/5 transition-colors border-b border-gray-800/50`}
                >
                  <td className="p-5 text-center">
                    <div
                      className={`w-5 h-5 rounded flex items-center justify-center border-2 transition-colors ${inv.checked ? "bg-[#7839CD] border-[#7839CD]" : "border-[#E4E4E4]"}`}
                    >
                      {inv.checked && (
                        <span className="text-[10px] font-bold">✓</span>
                      )}
                    </div>
                  </td>
                  <td className="p-5">{inv.id}</td>
                  <td className="p-5">{inv.number}</td>
                  <td className="p-5">{inv.teacher}</td>
                  <td className="p-5">{inv.date}</td>
                  <td className="p-5 ">{inv.amount}</td>
                  <td className="p-5 cursor-pointer text-xl font-black hover:text-white transition-colors select-none">
                    ⋮
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Pagination */}

      {/* TODO: Implement pagination logic (state for currentPage and totalPages). Currently only UI buttons exist. */}
      <div className="flex justify-center mt-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-700 text-gray-400 cursor-pointer select-none">
            1
          </div>

          <div className="w-8 h-8 flex items-center justify-center rounded-md bg-[#7839CD] text-white font-semibold select-none">
            2
          </div>

          <div className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-700 text-gray-400 cursor-pointer select-none">
            3
          </div>

          <div className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-700 text-gray-400 cursor-pointer select-none">
            4
          </div>
        </div>
      </div>
    </>
  );
};
