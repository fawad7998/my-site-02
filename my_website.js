function setRoot() {
	let array = ["free", "standard", "enterprise"];
	let root = document.getElementById("root");
	let badgeStyle = `
    // display: flex;
	// justify-content: center;
    // margin-left: 20px;
    margin-bottom: 20px;
    height: 300px;
    width: 320px;
    background-color: white;
    box-shadow: 5px 5px 20px #888888;
    `;
	for (let index = 0; index < array.length; index++) {
		let badge = document.createElement("div");
		badge.style.cssText = badgeStyle;
		// badge.style.display = flex;
		// badge.id.add('box-01')
		badge.innerHTML = array[index];
		root.append(badge);
	}
}

// aO = [{title:"", text:""}, {title:"", text:""}, {title:"", text:""}, {title:"", text:""}]
setRoot();




//  can it creates a div in <div id[root]>
// display flex prop 
// can we pick css id rather then class then how 
// how we raplicte any div or section 