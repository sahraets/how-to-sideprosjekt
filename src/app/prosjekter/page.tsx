import { ProjectList } from "../components/project-list";

export default function ProjectPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 px-4">
      <div className="max-w-screen-sm mx-auto text-lg flex flex-col gap-6 py-24">
        <h2 className="text-2xl text-gray-100 mb-4">Prosjekter</h2>
        <ProjectList />
        <h1 className="text-2xl"> Semesteroppgave i INF101 </h1>
        <p>Tetris</p>
      </div>
    </div>
  );
}
