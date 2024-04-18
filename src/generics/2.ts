type AllType = {
	name: string;
	position: number;
	color: string;
	weight: number;
};

type topType = Pick<AllType, 'name' | 'color'>;

type bottomType = Pick<AllType, 'position' | 'weight'>;

function compare(top: topType, bottom: bottomType): AllType {
	return {
		name: top.name,
		color: top.color,
		position: bottom.position,
		weight: bottom.weight,
	};
}
const top: topType = { name: 'Oli', color: 'green' };
const bottom: bottomType = { position: 0, weight: 12 };

const result = compare(top, bottom);

export {};
