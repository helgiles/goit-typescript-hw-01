function merge<TypeA extends object, TypeB extends object>(
	objA: TypeA,
	objB: TypeB
): TypeA & TypeB {
	return Object.assign({}, objA, objB);
}
