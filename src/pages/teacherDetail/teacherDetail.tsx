import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/ui/button/Button';
import {CardsList} from "../../components/cardsList/CardsList.tsx";
import {TeacherNavigation} from "../../components/teacherNavigation/TeacherNavigation.tsx";
import type {TeacherType} from "../../pages/teachersPage/TeachersPage.tsx";
import Person from "../../assets/images/person.jpg";

export const TeacherDetail = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const teacher: TeacherType[] = [
      {
          id: '1',
          name: 'Els Menson',
          subject: 'English',
          price: 35,
          image: Person,
          experience: '12 years',
          education: 'University of Amsterdam',
          approaching: 'Communicative, student-centered methodology focused on real-life English. Lessons emphasize speaking practice, practical vocabulary, and personalized learning goals.',
      }
  ];

  return (
    <div className="min-h-screen">

      <div className="section-spacing pl-80">
        <Button variant="secondary" onClick={handleBack}>
          Back
        </Button>
      </div>

      <div className="container-centered mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <CardsList cards={teacher}/>
        <div className="mt-16">
          <TeacherNavigation />
        </div>
      </div>
    </div>
  );
};