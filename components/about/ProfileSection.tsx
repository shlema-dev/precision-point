import { Reveal } from "../ui/Reveal";
import ProfileCard from "./ProfileCard";
import matthewProfilePic from "@/public/matthew-profile-pic.jpeg";
import austinProfilePic from "@/public/austin-profile-pic.jpeg";

const ProfileSection: React.FC = () => {
  return (
    <section className="relative my-24 w-full flex flex-col items-center justify-start">
      <Reveal delay={0.15}>
        <ProfileCard
          img={austinProfilePic}
          name="Austin Lux"
          title="Co-Founder - Precision Point"
          linkedinURL="https://www.linkedin.com/in/austinlux/"
          description="I have a passion for developing professional relationships with KOLs in the BioPharma industry, and I specialize in Technical Operations and other core areas of Pharmaceutical Development, such as Analytical Development, Process Development, and Quality Control. I have supported companies of various sizes and stages, and have helped them fill critical roles and grow their teams. I hold a Bachelor of Business Administration from California Lutheran University, and I have a strong background in leadership, social media, and sales."
        />
      </Reveal>
      <Reveal delay={0.25}>
        <ProfileCard
          flipped
          img={matthewProfilePic}
          name="Matthew Hashemi"
          title="Co-Founder - Precision Point"
          linkedinURL="https://www.linkedin.com/in/matthew-hashemi-b47273171/"
          description="Connecting good humans with other good humans. I specialize in identifying and placing exceptional talent across various levels within the Biotechnology and Pharmaceutical industries. I cover roles ranging from C-Level executives and Heads of Department to Directors, Associate Directors, Principal Scientists, Senior Scientists, Research Scientists, and Associates. My commitment is to ensure that each placement is a perfect fit, fostering professional growth and contributing to the success of both individuals and organizations."
        />
      </Reveal>
    </section>
  );
};

export default ProfileSection;
