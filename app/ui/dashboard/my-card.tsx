export default function MyCard({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  return (
    <div
      className={`hover:ring-4 
    hover:ring-orange-400 
    ring-offset-2
    shadow-md
    shadow-slate-400
    rounded-lg 
    p-6
    flex
    items-center
    justify-center
    bg-blue-600 
    text-zinc-100 ${className}`}
    >
    <p className="overflow-ellipsis text-nowrap">{text}</p>
    </div>
  );
}
