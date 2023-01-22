// import styles from "./styles.js";

// function setRoot() {
// 	console.log(styles);

//     let array = [
//         {
//             title: "free",
//             packageDetails: [
//                 "1 User",
//                 "Community Support",
//                 "Style Customizer",
//                 "Expanded Utilities",
//                 "Third Party Integration",
//                 "Layout Options",
//             ],
//         },
//         {
//             title: "standard",
//             packageDetails: [
//                 "1 User",
//                 "Community Support",
//                 "Style Customizer",
//                 "Expanded Utilities",
//                 "Third Party Integration",
//                 "Layout Options",
//             ],
//         },
//         {
//             title: "enterprise",
//             packageDetails: [
//                 "1 User",
//                 "Community Support",
//                 "Style Customizer",
//                 "Expanded Utilities",
//                 "Third Party Integration",
//                 "Layout Options",
//             ],
//         },
//     ];
// 	let root = document.getElementById("root");
// 	root.style.display = "flex";
// 	for (let index = 0; index < array.length; index++) {
// 		let badge = document.createElement("div");
// 		badge.style.cssText = styles.badgeStyle;
// 		badge.setAttribute("id", "box-01");
// 		badge.innerHTML = array[index].title;
//         let packageDetails = document.createElement("div");
//         packageDetails.classList.add('package-details')
//         let packageDetailsTexts = array[index].packageDetails
// 		for (let z = 0; z < packageDetailsTexts.length; z++) {
//             const text = packageDetailsTexts[z];
//             let packageDetailsTextDiv = document.createElement("div");
//             packageDetailsTextDiv.innerText = text
//             packageDetails.append(packageDetailsTextDiv);
//         }
//         badge.insertBefore(packageDetails, badge.nextSibling)
// 		root.append(badge);
// 	}
// }
// setRoot();

//  can it creates a div in <div id[root]>
// display flex prop
// can we pick css id rather then class then how
// how we raplicte any root or section
function divs() {
	let obj = [
		{
			title: "Standard",
			items: [
				"1 user",
				"Community support",
				"Style customizer",
				"Custom components",
				"Expanded utilities",
				"Third-party integration",
				"Layout options",
			],
		},
		{
			title: "Enterprices",
			items: [
				"1 user 2",
				"Community support 2",
				"Style customizer 2",
				"Custom components 2",
				"Expanded utilities 2",
				"Third-party integration 2",
				"Layout options 2",
			],
		},
	];
	console.log();

	let firstdiv = document.getElementById("sec-05-box");
	firstdiv.style.display = "flex";
	firstdiv.style.justifyContent = "space-between";  
	firstdiv.style.paddingLeft = "50px";  
	firstdiv.style.paddingRight = "50px";  
	for (let i = 0; i < obj.length; i++) {
		let div = document.createElement("div");
		div.innerHTML = obj[i].title;
		div.setAttribute("id", "box-01");
        let inner = document.createElement("div");
        let innerdivs = i[items] ;
        for (let s = 0; s < obj.length; s++) {
            // let innerdata =  ;
        } 
        firstdiv.append(div);
    }
}



divs();

