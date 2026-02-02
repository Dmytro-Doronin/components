import { useState } from 'react';
import { Calendar } from './Calendar/Calendar';
import { Time } from './Time/time';

export default function TeacherSchedule() {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [showTimeAndBook, setShowTimeAndBook] = useState<boolean>(false);

    const handleDateSelection = (date: Date): void => {
        setSelectedDate(date);
        setShowTimeAndBook(true);
    };

    return (
        <div>
            <div className="bg-[#15141D] p-[50px] relative rounded-3xl w-auto h-auto border border-[#7286FF]">
                <div className="flex flex-col items-center justify-center h-full">
                    <div className="text-left w-full">
                        <h2 
                            className="text-5xl font-bold text-[#7186FF]"
                        >
                            Schedule
                        </h2>

                        <div className="mt-8">
                            <Calendar onDateSelect={handleDateSelection} selectedDate={selectedDate} />
                        </div>

                        {showTimeAndBook && (
                            <div className="mt-8">
                                <Time onTimeSelect={() => {}} />
                            </div>
                        )}

                        {showTimeAndBook && (
                            <div className="mt-8">
                                <button className="bg-[#7C86F7] text-white px-6 py-3 rounded-lg hover:bg-[#6B7AE6] transition-colors">
                                    Book
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}