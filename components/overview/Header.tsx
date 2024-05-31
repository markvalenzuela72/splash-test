import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchCardData } from "@/lib/data";
import { Medal, CircleUser, Clock } from "lucide-react";
import { headers } from "next/headers";
import PointsInput from "./PointsInput";
import MultiplierInput from "./MultiplierInput";

export default async function Header() {
  const headersList = headers();
  const fullUrl = headersList.get("referer");

  let game_user_id = "";

  if (fullUrl) {
    const urlObj = new URL(fullUrl);
    const pathname = urlObj.pathname;
    const pathParts = pathname.split("/");

    game_user_id = pathParts[pathParts.length - 1].split("?")[0];
  } else {
    game_user_id = "410544b2-4001-4271-9855-fec4b6a6442a";
    console.log("Referer header is not present.");
  }
  let fetchData: any[] = [];

  console.log(game_user_id, "____game_user_id");
  if (game_user_id !== null) {
    fetchData = await fetchCardData(game_user_id);
  }

  return (
    <header className=" top-0 z-10 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 border-b bg-background p-4 ">
      <Card className="w-full min-h-[112px]" x-chunk="dashboard-05-chunk-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-4xl">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Points
            </label>
            <PointsInput initialValue={1} min={1} max={1000000} />
          </CardTitle>
        </CardHeader>
      </Card>
      <Card className="w-full min-h-[112px]" x-chunk="dashboard-05-chunk-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-4xl">
            {/* <Medal /> */}
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Multiplier
            </label>
            <MultiplierInput initialValue={1} min={1} max={10} />
          </CardTitle>
        </CardHeader>
      </Card>

      <Card className="w-full min-h-[112px]" x-chunk="dashboard-05-chunk-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-4xl">
            <Medal />
            {fetchData?.map((game_user) => game_user.points)}
          </CardTitle>
        </CardHeader>
      </Card>

      <Card className="w-full min-h-[112px]" x-chunk="dashboard-05-chunk-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-4xl">
            <CircleUser />
            {fetchData?.map((game_user) => game_user.name)}
          </CardTitle>
        </CardHeader>
      </Card>

      <Card className="w-full min-h-[112px]" x-chunk="dashboard-05-chunk-1">
        <CardHeader className="pb-2">
          <CardTitle className="text-4xl">
            <Clock />
            21: 30
          </CardTitle>
        </CardHeader>
      </Card>
    </header>
  );
}
