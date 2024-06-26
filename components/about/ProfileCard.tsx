import Image, { StaticImageData } from "next/image";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";

interface ProfileCardProps {
  flipped?: boolean;
  img: StaticImageData;
  name: string;
  title: string;
  linkedinURL: string;
  description: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  flipped,
  img,
  name,
  title,
  linkedinURL,
  description,
}) => {
  return (
    <div
      className={`mb-12 px-6 lg:px-12 py-12 w-[85vw] max-w-4xl flex flex-col lg:flex-row gap-2 justify-center rounded-xl bg-primary-1 border-2 border-primary-11 ${
        flipped ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="flex flex-col items-center">
        <div className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full border-4 border-primary-11">
          <Image
            src={img}
            alt="profile picture"
            quality={100}
            fill
            objectFit="cover"
            className="rounded-full"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="pt-4 prose prose-xl font-medium text-center text-primary-11">
            {name}
          </p>
          <p className="-mt-1 lg:mt-0 prose prose-sm  text-center text-primary-12">
            {title}
          </p>
          <div className="self-center pt-2">
            <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
              <LinkedInLogoIcon color="#11809C" height={42} width={42} />
            </a>
          </div>
        </div>
      </div>

      <p
        className={`${
          flipped ? "lg:mr-12" : "lg:ml-12"
        } pt-4 prose prose-sm lg:prose-lg self-center text-center text-primary-12`}
      >
        {description}
      </p>
    </div>
  );
};

export default ProfileCard;
