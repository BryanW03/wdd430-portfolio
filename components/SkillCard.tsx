interface SkillCardProps {
  skill: string;
  level: string;
  years: number;
}

export default function SkillCard({ skill, level, years }: SkillCardProps) {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">{skill}</h3>
      <p className="text-sm text-gray-600 mt-1">
        Level: <span className="font-medium">{level}</span>
      </p>
      <p className="text-sm text-gray-600">
        Experience: {years} {years === 1 ? 'year' : 'years'}
      </p>
    </div>
  );
}
