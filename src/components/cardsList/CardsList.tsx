import type {TeacherType} from "../../pages/teachersPage/TeachersPage.tsx";
import {TeacherCard} from "../teacherCard/TeachrCard.tsx";

type CardsListType = {
    cards: TeacherType[]
}

export const CardsList = ({cards}: CardsListType) => {
    return (
        <div className='flex flex-col gap-[30px]'>
            {cards.map((card) => (
                <TeacherCard key={card.id} teacher={card}/>
            ))}
        </div>
    );
};

