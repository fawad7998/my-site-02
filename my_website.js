import styles from "./styles.js";

function setRoot() {
	console.log(styles);
    
    let array = [
        {
            title: "free",
            packageDetails: [
                "1 User",
                "Community Support",
                "Style Customizer",
                "Expanded Utilities",
                "Third Party Integration",
                "Layout Options",
            ],
        },
        {
            title: "standard",
            packageDetails: [
                "1 User",
                "Community Support",
                "Style Customizer",
                "Expanded Utilities",
                "Third Party Integration",
                "Layout Options",
            ],
        },
        {
            title: "enterprise",
            packageDetails: [
                "1 User",
                "Community Support",
                "Style Customizer",
                "Expanded Utilities",
                "Third Party Integration",
                "Layout Options",
            ],
        },
    ];
	let root = document.getElementById("root");
	root.style.display = "flex";
	for (let index = 0; index < array.length; index++) {
		let badge = document.createElement("div");
		badge.style.cssText = styles.badgeStyle;
		badge.setAttribute("id", "box-01");
		badge.innerHTML = array[index].title;
        let packageDetails = document.createElement("div");
        packageDetails.classList.add('package-details')
        let packageDetailsTexts = array[index].packageDetails
		for (let index = 0; index < packageDetailsTexts.length; index++) {
            const text = packageDetailsTexts[index];
            let packageDetailsTextDiv = document.createElement("div");
            packageDetailsTextDiv.innerText = text
            packageDetails.append(packageDetailsTextDiv);
        }   
        badge.insertBefore(packageDetails, badge)
		root.append(badge);
	}
}
setRoot();

//  can it creates a div in <div id[root]>
// display flex prop
// can we pick css id rather then class then how
// how we raplicte any root or section
