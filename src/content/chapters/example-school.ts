import type { Chapter } from "../types";

// Copy this file to add a chapter, then add an import line to index.ts.
// TypeScript will flag any missing or wrong field against the Chapter type.

const exampleSchool: Chapter = {
	slug: "example-school",
	name: "Example School Chapter",
	location: "City, State",
	coordinates: { lat: 0, lng: 0 },

	officers: [
		{ name: "", role: "President", email: "" }, // email is optional — drop it if there's none
		{ name: "", role: "Vice President" },
		{ name: "", role: "Secretary" },
		{ name: "", role: "Treasurer" },
		{ name: "", role: "Historian" },
	],

	alums: [
		{ name: "", pastRole: "", gradYear: "" },
	],

	links: {
		tuteeSignup: "",
		tutorSignup: "",
		tutorGoogleClassroom: "",

		// parentGroupChat is a JoinMethod — pick ONE shape. Examples:
		parentGroupChat: { method: "link", url: "" },
		// parentGroupChat: { method: "qr", imageUrl: "/chapters/example-school/wechat.png", caption: "Scan to join on WeChat" },
		// parentGroupChat: { method: "code", code: "ABC123", instructions: "Enter this code in the app" },
		// parentGroupChat: { method: "other", instructions: "Text the chapter president to be added" },
	},
};

export default exampleSchool;