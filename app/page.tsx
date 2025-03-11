import FetchAPI from "@/components/FetchAPI";
import Search from "@/components/SearchComponent";

export default async function Home({searchParams}:{searchParams?:{query?:string}}) {

  
 
  return (
    <div className="p-20 flex flex-col gap-5">
      <h1>Technical Test</h1>
      <Search />
      <FetchAPI searchParams={searchParams} />
    </div>
  );
}
