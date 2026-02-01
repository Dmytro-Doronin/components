import {RadioGroup} from "../ui/radioGroup/RadioGroup.tsx";
import type {Option} from "../ui/select/Select.tsx";
import {SliderRange} from "../ui/sliderRange/SliderRange.tsx";
import {useState} from "react";
import {Button} from "../ui/button/Button.tsx";
import {Checkbox} from "../ui/checkbox/Checkbox.tsx";
import {Rating} from "../rating/Rating.tsx";

const radioOptions: Option[] = [
    {label: "English", value: "English"},
    {label: "German", value: "German"},
    {label: "Russian", value: "Russian"},
    {label: "French", value: "French"},
    {label: "Spanish", value: "Spanish"},
]


export const Filters = () => {
    const [value, setValue] = useState([0, 500])
    const [selectedRatings, setSelectedRatings] = useState<Set<number>>(() => new Set());
    // const ratings = Array.from(selectedRatings);
    const toggleRating = (rating: number, next: boolean) => {
        setSelectedRatings(prev => {
            const copy = new Set(prev);
            if (next) {
                copy.add(rating);
            } else {
                copy.delete(rating);
            }
            return copy;
        });
    };

    const handleSliderCommitted = (value: number[]) => {
        setValue(value)
    }

    return (
        <div className='bg-purple-600 max-w-[312px] w-full p-[20px] rounded-[30px]'>
            <h4 className='text-light-100 text-[18px] mb-[20px]'>Filters</h4>
            <div className='
                    flex flex-col items-start py-[20px] mr-[30px] mb-[20px]
                    border-light-100 border-b-[1px] border-t-[1px]
                    '
            >
                <h5 className='text-light-100 mb-[20px]'>Tutors</h5>
                <RadioGroup options={radioOptions}/>
            </div>
            <div className='flex flex-col items-start gap-[20px] mb-[24px]'>
                <h4 className='text-light-100 text-[12px]'>FILTER BY PRICE</h4>
                <SliderRange
                    min={0}
                    max={500}
                    value={value}
                    onValueChange={setValue}
                    onValueCommit={handleSliderCommitted}
                />
                <Button variant='secondary'>Apply</Button>
            </div>
            <div className='mb-[20px]'>
                <h4 className='text-light-100 text-[12px] mb-[20px] py-[20] b'>FILTER BY REVIEWS</h4>
                <div className='flex flex-col items-start gap-[16px] py-[20px] border-light-100 border-b-[1px] border-t-[1px]'>
                    {[5, 4, 3, 2, 1].map((rating) => (
                        <Checkbox
                            key={rating}
                            checked={selectedRatings.has(rating)}
                            onValueChange={(next) => toggleRating(rating, next)}
                            label={<Rating rating={rating}/>}
                        />
                    ))}
                </div>
            </div>
            <Button variant='secondary'>Clear filters</Button>
        </div>
    );
};

