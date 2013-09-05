describe("Mister Ed", function(){
	it("Loves to eat hay and Neigh!", function(){
	   expect(misterEd()).toEqual('Neigh!');
	});
});

describe("Silver!", function(){
	it("Is a Flying Pig!", function(){
		expect(Silver()).toEqual('Flying Pig!');
	});
});

describe("horse!", function(){
	it("Is a Fence Jumper!", function(){
		expect(horse()).toEqual('Fence Jumper!');
	});
});

describe("pig!", function(){
	it("Is a Pond Swimmer!", function(){
		expect(pig()).toEqual('Pond Swimmer!');
	});
});