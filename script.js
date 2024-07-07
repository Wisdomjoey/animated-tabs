const container = document.getElementById("container");
let activeTab = document.querySelector(".main__tabs li[data-state='active']");
let shadow = document.getElementById("shadow");

shadow.style.width = `${activeTab.scrollWidth}px`;

const moveTab = (id) => {
	const tab = document.getElementById(`tab${id}`);
	const content = document.getElementById("content-wrapper");

	if (tab.dataset.state === "active") return;

	shadow = document.getElementById("shadow");
	shadow.dataset.state = "moving";

	setTimeout(() => {
		shadow.style.width = `${shadow.scrollHeight}px`;
		shadow.style.borderRadius = `${shadow.scrollHeight}px`;
	}, 100);

	setTimeout(() => {
		content.style.transform = `translateX(-${20 * (id - 1)}%)`;
		activeTab = document.querySelector(".main__tabs li[data-state='active']");
		activeTab.dataset.state = "inactive";
		shadow.style.transform = `translateX(${
			tab.getBoundingClientRect().left - container.getBoundingClientRect().left
		}px)`;
	}, 300);

	setTimeout(() => {
		shadow.style.width = `${tab.scrollWidth}px`;
		shadow.style.borderRadius = `8px 8px 0 0`;
	}, 1300);

	setTimeout(() => {
		shadow.dataset.state = "stopped";
		tab.dataset.state = "active";
	}, 1400);
};
