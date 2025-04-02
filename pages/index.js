import { useSelector } from 'react-redux';

export default function Home() {
  const habits = useSelector((state) => state.habits.habits);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Mis Hábitos</h1>
      <ul className="mt-4">
        {habits.map((habit, index) => (
          <li key={index} className="p-2 bg-gray-200 rounded-md mb-2">{habit}</li>
        ))}
      </ul>
    </div>
  );
}
