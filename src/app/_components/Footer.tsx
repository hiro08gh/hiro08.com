import { currentYear } from "@/libs/date";

export const Footer: React.FC = () => {
	return (
		<footer className="text-center text-sm text-gray my-4">
			© {currentYear()} hiro08.com.
		</footer>
	);
};
