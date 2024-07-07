import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {

  return (
    <section className="flex gap-5">
      {
        Array.from({ length: 30 }).map((_, index) => (
          <div className="flex flex-col space-y-3 m-5 gap-5" key={index}>
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ))
      }
    </section>
  )
}