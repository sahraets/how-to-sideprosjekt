export function ProjectList() {
  return (
    <div>
      <h2 className="text-2xl mb-4">Prosjekter</h2>
      <ul className="pl-4 list-disc space-y-4">
        <li>
          <h3 className="text-lg">Skoleprosjekter</h3>
          <p className="text-sm">Tetris</p>
        </li>
        <li>
          <h3 className="text-lg">Portefølje</h3>
          <p className="text-sm">CV</p>
          <p className="text-sm">Vitnemål</p>
        </li>
      </ul>
    </div>
  );
}
