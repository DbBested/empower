import type { Chapter } from "../types";

// Founding chapter. Migrated from the old hardcoded team data on /our-team.
// Its members also serve as the program's provisional officers (see
// content/content.json -> team).

const westonHigh: Chapter = {
	slug: "weston-high",
	name: "Weston High School",
	location: "Weston, MA",
	// Weston High School, 444 Wellesley Street, Weston, MA 02493
	// (OpenStreetMap building node — points at the school itself).
	coordinates: { lat: 42.3388448, lng: -71.304504 },

	officers: [
		{
			name: "Anlin Huang",
			role: "President",
			email: "huanganlin2@gmail.com",
			description:
				"Anlin has been a tutor at Empower Initiative for over a year. Over that time, she has built strong connections with the students she has worked with and helped many of them to succeed in their courses. Anlin is very passionate about educational equality, and loves working with children to help them reach their full potential. Aside from Empower Initiative, Anlin serves as treasurer in the Class of 2028 student government, as well as the financial department head of the Angel Dance Youth League, where she helps to spread the culture of Chinese Traditional Dance across the community. Anlin is an All-State violist and plays in the Boston Youth Symphony Orchestras, and in her free time, she enjoys painting, playing with her chickens, and spending time with her family.",
			imageUrl: "/team/anlin.png",
		},
		{
			name: "Zoey Ying",
			role: "Vice President",
			email: "zoeysying@gmail.com",
			description:
				"Zoey has been an active member of Empower Initiative for over a year. She has worked with many different kids, building bonds and helping them thrive in their academic endeavors. By doing so, she has experience in tutoring and helping kids of different ages and abilities. Zoey also challenges herself by taking two languages, Latin and French, as well as speaking Cantonese with her parents at home. Outside of Empower Initiative, Zoey does ballet and plays the viola. In her free time, Zoey enjoys crocheting, serving her community, hanging out with her family and friends, baking as well as reading books.",
			imageUrl: "/team/zoey.jpg",
		},
		{
			name: "Michelle Bi",
			role: "Secretary",
			email: "michelle.kailan.bi@gmail.com",
			description:
				"Michelle has been an active member of Empower Initiative for over a year, where she has worked with students of different ages, building meaningful connections and supporting their academic growth. Through this experience, she has developed strong tutoring skills and the ability to adapt to a variety of learning styles. She also speaks Mandarin and uses it to support students in their learning. In addition to her work with Empower, Michelle is a member of her school's fencing team. Outside of school and volunteering, Michelle enjoys traveling, baking, reading, and spending time with family and friends.",
			imageUrl: "/team/michelle.jpg",
		},
		{
			name: "Ethan Zhuang",
			role: "Treasurer",
			email: "ethanzhuang2400@gmail.com",
			description:
				"Ethan has been a tutor at Empower Initiative for over a year, working with a wide range of students in various subjects. He focuses on teaching the underlying logic of a topic rather than just having students memorize steps for a test, helping them understand how to handle more difficult problems on their own. Ethan is passionate about helping others and loves seeing his students succeed as they learn new concepts. In school, Ethan is an active member of the science team and the math team, where he competes in the AMCs and other competitions. He also competes with GNCE Robotics, where his team is ranked top 20 in the world and has traveled to the World Championships. Outside of school, Ethan is a competitive speedcuber, placing 5th at the World Championships. He also plays the violin and serves as a section leader in the Rivers Youth Symphony.",
			imageUrl: "/team/ethanzhu.png",
		},
		{
			name: "Felix Dschung",
			role: "Historian",
			// email omitted — none published
			description:
				"Felix is a founding member at Empower Initiative and has stayed committed to the organization for the past three years. Entering his final year of high school, he has now five years of mentoring and tutoring students. In school, he serves as the Captain of the Robotics Team, President of the Cybersecurity Club, and Co-President of Computer Science Club. Felix has taken 8 AP courses in high school so far and is proficient in English, Cantonese, and Mandarin.",
			imageUrl: "/team/felix.jpeg",
		},
		{
			name: "Dohun Kim",
			role: "Website Coordinator",
			email: "genius0412.tech@gmail.com",
			description:
				"Dohun has been a tutor at Empower Initiative for over two years. He likes to support students tackling difficult concepts through asking guiding questions instead of directly teaching them. He has experience in teaching a wide range of subjects from novice Spanish to chess and competition math. Outside of the Empower Initiative, he has mentored less experienced 4th graders to advanced 7th grade students in First Lego League. In his freshman year, Dohun has gotten a 5 on the AP Calculus BC and Computer Science A exams, 141 on AMC 10A, and a 9 on the AIME.",
			imageUrl: "/team/DohunKim.JPG",
		},
	],

	alums: [
		{
			name: "Kirsten Choi",
			pastRole: "Vice President",
			gradYear: "TODO", // TODO(owner): add real grad year
			email: "kirsten0829@gmail.com",
			description:
				"Kirsten Choi is a senior at Weston High School and an active leader in her community. At school, she serves in student government and student council, and is the vice president and co-founder of the Empower Initiative, a tutoring club dedicated to supporting others. Beyond the classroom, Kirsten is a member of her school’s Varsity Soccer team and plays cello with the Boston Youth Symphony Orchestra. She hopes to continue her journey in STEM, combining her passion for leadership, teamwork, and education in her future pursuits.",
			imageUrl: "/team/alum/kirsten.jpg",
		},
		{
			name: "Pamela Hao",
			pastRole: "Event Coordinator",
			gradYear: "TODO", // TODO(owner): add real grad year
			// email omitted — previous value was a placeholder; add a real one if available
			description:
				"Pamela has worked at Empower Initiative since its founding at Weston High School. She enjoys helping students understand complex concepts and develop their problem-solving skills. Pamela has helped students with various subjects, particularly math and Spanish. As a sophomore, Pamela got a 5 on her AP Calc BC exam, took AP Chemistry as a junior, and continues to challenge herself with college-level classes with dual enrollment math. Furthermore, she received the high honors award from the US National Chemistry Olympiad.",
			imageUrl: "/team/alum/Pamela.png",
		},
		{
			name: "Eric Mu",
			pastRole: "Secretary",
			gradYear: "TODO", // TODO(owner): add real grad year
			email: "ericmu2124@gmail.com",
			description:
				"Eric has tutored at Empower Initiative for over a year, developing close rapports with various students and guiding them to success in their academic coursework. In the past, he has also tutored for the SAT and taught Python to younger children. He particularly values individual education and helping students fully comprehend complex concepts. In his sophomore year, Eric got a 5 on his AP Calculus BC exam, and he continues to challenge himself with other AP courses alongside dual enrollment and competition math, obtaining a 10 on the AIME. In his spare time, he enjoys reading, piecing together jigsaw puzzles, and spending time with family.",
			imageUrl: "/team/Eric.png",
		},
	],

	links: {
		tuteeSignup: "https://forms.gle/mkMETtKS6hJQFjbs6",
		tutorSignup: "https://forms.gle/1AUrarNKovDFeHNfA",
		tutorGoogleClassroom:
			"https://classroom.google.com/c/NjYxMjA4MzYwODYx?cjc=uejjzpk",
		parentGroupChat: {
			method: "qr",
			imageUrl: "/resources/wechatqr.jpg",
			caption: "Scan to join the parent WeChat group",
		},
	},
};

export default westonHigh;
