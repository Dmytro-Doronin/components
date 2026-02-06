interface settingsItems {
  label: string;
  key: string;
  type: "text" | "email" | "date" | "tel";
  defaultValue: string;
  icon?: React.ReactNode;
}

{
  /* Settings Page Component */
}

// TODO: when DB is ready this array need to be adjusted, needed to be inside a function or comonent in order to get data from db, also defaultevalue  = user.data from DB
{
  /* TODO: when DB is ready this array need to be adjusted, needed to be inside a function or comonent in order to get data from db,
  also defaultevalue  = user.data from DB */
}

const mainInfo: settingsItems[] = [
  { label: "Name", key: "name", type: "text", defaultValue: "Anna" },
  {
    label: "Surname",
    key: "surname",
    type: "text",
    defaultValue: "Kravchuk",
  },
  {
    label: "Location",
    key: "location",
    type: "text",
    defaultValue: "NYC, New York, USA", // TODO: get from DB
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
        />
      </svg>
    ),
  },
  {
    label: "Birthday Date",
    key: "birthdayDate",
    type: "date",
    defaultValue: "May 19, 1996",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
        />
      </svg>
    ),
  },
];

const contactInfo: settingsItems[] = [
  {
    label: "Email",
    key: "email",
    type: "email",
    defaultValue: "evanyates@gmail.com",
  },
  {
    label: "Mobile Number",
    key: "phoneNumber",
    type: "tel",
    defaultValue: "+1 123 456 7890",
  },
];

export const SettingsPage = () => {
  return (
    <>
      <div className="bg-[#16161a] rounded-[2.5rem] p-12 relative border border-white/5 shadow-[0_0_60px_-15px_rgba(114,134,255,0.35)]">
        {/* Edit Button */}
        <div className="absolute top-10 right-10 bg-[#2a2a35] p-2.5 rounded-xl cursor-pointer hover:bg-[#353545] transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#6F5DE9"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </div>

        <div className="flex gap-24">
          {/* Left Column: Main Info */}
          <div
            className="flex-1 flex flex-col gap-8"
            style={{ fontFamily: '"Nunito Sans", sans-serif' }}
          >
            <h3 className="text-xl font-semibold text-white">Main info</h3>
            <div className="space-y-6">
              {mainInfo.map((item) => (
                <div key={item.key} className="flex flex-col gap-2">
                  <label
                    htmlFor={item.key}
                    className="text-[10px] text-gray-500  font-bold tracking-[0.1em]"
                  >
                    {item.label}
                  </label>
                  <div className="relative">
                    <input
                      id={item.key}
                      type={item.type}
                      defaultValue={item.defaultValue}
                      className="w-full bg-white text-[#7D8592] p-3.5 rounded-xl outline-none text-sm "
                    />
                    <span className="absolute right-4 top-3.5 opacity-30">
                      {item.icon}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Info  */}
          <div
            className="flex-1 flex flex-col gap-8"
            style={{ fontFamily: '"Nunito Sans", sans-serif' }}
          >
            <h3 className="text-xl font-semibold text-white">Contact Info</h3>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.key} className="flex flex-col gap-2">
                  <label
                    htmlFor={item.key}
                    className="text-[10px] text-[#7D8592]  font-bold tracking-[0.1em]"
                  >
                    {item.label}
                  </label>
                  <input
                    id={item.key}
                    type={item.type}
                    defaultValue={item.defaultValue}
                    className="bg-white text-[#7D8592] p-3.5 rounded-xl outline-none text-sm "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end mt-16">
        <button className=" cursor-pointer border-2 border-[#7286FF] text-white px-16 py-3 rounded-full font-bold text-sm tracking-wide transition-all hover:bg-[#7286FF]/10 active:scale-95">
          Save
        </button>
      </div>
    </>
  );
};
