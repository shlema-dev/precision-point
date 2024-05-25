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
          description="But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system, and expound the actual teachings of the great
        explorer of the truth, the master-builder of human happiness. No one
        rejects, dislikes, or avoids pleasure itself, because it is pleasure,
        but because those who do not know how to pursue pleasure rationally
        encounter consequences that are extremely painful."
        />
      </Reveal>
      <Reveal delay={0.25}>
        <ProfileCard
          flipped
          img={matthewProfilePic}
          name="Matthew Hashemi"
          title="Co-Founder - Precision Point"
          description="But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system, and expound the actual teachings of the great
        explorer of the truth, the master-builder of human happiness. No one
        rejects, dislikes, or avoids pleasure itself, because it is pleasure,
        but because those who do not know how to pursue pleasure rationally
        encounter consequences that are extremely painful."
        />
      </Reveal>
    </section>
  );
};

export default ProfileSection;
