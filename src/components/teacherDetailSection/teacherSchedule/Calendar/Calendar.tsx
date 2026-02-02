interface TimeProps {
    onDateSelect: (date: Date) => void;
    selectedDate: Date | null;
}

export function Calendar({ onDateSelect, selectedDate }: TimeProps) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    
    const weekDays = ['M', 'T', 'W', 'Th', 'F', 'S', 'Su'];
    
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    
    const handleDateClick = (day: number): void => {
        const selectedDay = new Date(currentYear, currentMonth, day);
        onDateSelect(selectedDay);
    };
    
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
    const startDay = new Date(currentYear, currentMonth, 1).getDay() || 7;
    
    const calendarDays = [
        ...Array(startDay - 1).fill(null),
        ...Array.from({ length: totalDays }, (_, index) => index + 1)
    ];
    
    return (
        <div className="bg-[#2C2436] rounded-xl p-6 shadow-sm">
           <div className="flex justify-center items-center mb-6">
                <h3 className="text-xl font-semibold text-white">
                    {months[currentMonth]} {currentYear}
                </h3>
            </div>
            
            <div className="grid grid-cols-7 gap-1 mb-4">
                {weekDays.map(day => (
                    <div key={day} className="text-center text-xs font-medium text-gray-300 w-[71px]">
                        {day}
                    </div>
                ))}
            </div>
            
            <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((day, index) => (
                    <div key={index} className="w-[71px] h-10">
                        {day && (
                            <button
                                onClick={() => handleDateClick(day)}
                                className={`w-full h-full rounded-[40px] flex items-center justify-center text-base font-normal leading-6 transition-colors ${
                                    selectedDate && day === selectedDate.getDate()
                                        ? 'bg-[#7C86F7] text-white'
                                        : 'text-white hover:bg-[#F3F2F5] hover:text-black'
                                }`}
                            >
                                {day}
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
