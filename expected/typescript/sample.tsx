type Props = { label: string; count?: number };
export const Badge = ({ label, count = 0 }: Props) => (
	<span title={label} className="badge">
		{label}: {count}
	</span>
);
