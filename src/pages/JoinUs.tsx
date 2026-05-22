const GOOGLE_CLASSROOM_URL = "https://classroom.google.com/c/NjYxMjA4MzYwODYx?cjc=uejjzpk";
const CHILD_SIGNUP_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSf2s6wIPlxF2CU8hFK5sffGS2kopleb2RlP00y8i21660-lRA/viewform"; // TODO: replace with actual form URL
const NEW_CHAPTER_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdxo2vkzIJ2ge4RpimZMBOqk_eZitidO0Dqu0MBaf8HlZEluA/viewform"; // TODO: replace with actual form URL

interface CardProps {
  icon: string;
  title: string;
  description: string;
  action: React.ReactNode;
}

const Card = ({ icon, title, description, action }: CardProps) => (
  <div className="bg-white rounded-2xl shadow-md ring-1 ring-gray-100 p-8 flex flex-col items-center text-center gap-4 transition-transform duration-200 hover:-translate-y-1">
    <div className="text-5xl">{icon}</div>
    <h3 className="text-deep-ocean m-0">{title}</h3>
    <p className="text-gray leading-relaxed m-0 flex-1">{description}</p>
    {action}
  </div>
);

export const JoinUs = () => {
  return (
    <div className="min-h-screen w-full bg-[radial-gradient(circle_at_top,rgba(131,165,242,0.14),transparent_36%),linear-gradient(180deg,rgba(252,222,214,0.5),rgba(255,255,255,1)_18%)] px-4 py-10 md:px-6 lg:px-16 lg:py-16">
      <div className="mx-auto max-w-[980px]">
        <h1 className="mb-3 text-center text-deep-ocean">Join Our Community</h1>
        <p className="mx-auto mb-12 max-w-[680px] text-center leading-6 text-gray">
          Whether you're a student seeking support, a parent looking to connect with other families, or an aspiring
          student ready to bring Empower Initiative to your school—there's a place for you here.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Google Classroom */}
          <Card
            icon="📚"
            title="Join Our Google Classroom"
            description="Students and tutors: join our Google Classroom to access session schedules, announcements, and learning materials."
            action={
              <a
                href={GOOGLE_CLASSROOM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary px-6 py-3 rounded-md font-semibold inline-block"
              >
                Open Google Classroom
              </a>
            }
          />

          {/* Child Signup Form */}
          <Card
            icon="✏️"
            title="Sign Up Your Child"
            description="Parents: complete our sign up form to match your child with a tutor. We will reach out to you soon after you submit the form."
            action={
              <a
                href={CHILD_SIGNUP_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="button-primary px-6 py-3 rounded-md font-semibold inline-block"
              >
                Student Signup Form
              </a>
            }
          />

          {/* Start a New Chapter */}
          <Card
            icon="🌱"
            title="Start a New Chapter"
            description="Interested in bringing Empower Initiative to your school? Fill out our chapter application and we'll guide you through the process of getting started."
            action={
              <a
                href={NEW_CHAPTER_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary px-6 py-3 rounded-md font-semibold inline-block"
              >
                Apply to Start a Chapter
              </a>
            }
          />

          {/* Parent WeChat Group */}
          <Card
            icon="💬"
            title="Parent WeChat Group"
            description="Join our parent WeChat group to stay connected, receive updates, and connect with other families in the Empower Initiative community."
            action={
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/resources/wechatqr.jpg"
                  alt="WeChat group QR code"
                  className="w-36 h-36 rounded-lg border border-gray-200"
                />
                <p className="text-sm text-gray m-0">Scan to join the WeChat group</p>
              </div>
            }
          />
        </div>
      </div>
    </div>
  );
};
