import MyCard from "@/app/ui/dashboard/my-card";

export default function Page() {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <MyCard className="basis-1/2 h-40 text-3xl" text="Invoices Page" />
      <MyCard className="basis-1/2 h-40 text-3xl overflow-hidden" text="This page isn't built yet" />
    </div>
  );
}
