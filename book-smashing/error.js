function c() {
	b ();
};

function b() {
	a ();
};

function a() {
	//now involving the even loop
	setTimeout (function () {
		throw new Error('Here');
	}, 10);
};

c();
