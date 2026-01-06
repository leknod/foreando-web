export default function ForumCard({ forum }) {
  return (
    <article className="flex flex-col justify-between gap-6 rounded-xl bg-white px-6 py-4 shadow-xl">
      <div className="flex items-center justify-center gap-2">
        <img src={forum.icon} alt={`Logo de ${forum.name}`} />
        <h2 className="text-center font-semibold">{forum.name}</h2>
      </div>
      <p className="text-center text-sm">{`« ${forum.short_description} »`}</p>
      <a
        href={forum.url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary text-foreground-dark hover:bg-primary/90 mx-auto block w-fit rounded-lg px-4 py-2"
      >
        Visitar foro
      </a>
    </article>
  );
}
