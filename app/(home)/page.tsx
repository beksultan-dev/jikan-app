import { CurrentSeasonList, MostFavAside, RecsCarousel } from "@/widgets";
import { Seasons } from "@/widgets/seasons/ui/ui";

export default function Home() {
	return (
		<main className="container min-h-[1500px] text-ellipsis">
			<RecsCarousel />
			<div className="grid grid-cols-12 gap-3">
				<CurrentSeasonList />
				<MostFavAside />
			</div>

			<Seasons />
		</main>
	);
}
