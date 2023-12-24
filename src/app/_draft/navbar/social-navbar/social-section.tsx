import { FaceBookIcon } from "@/app/_components/icons/social/facebook-icon";
import { InstagramIcon } from "@/app/_components/icons/social/instagram-icon";
import { WhatsAppIcon } from "@/app/_components/icons/social/whatsapp-icon";

export const SocialSection: React.FC = () => {
  return (
    <div className="flex justify-between align-center  gap-3 mx-auto">
      <FaceBookIcon />
      <InstagramIcon />
      <WhatsAppIcon />
    </div>
  );
};
