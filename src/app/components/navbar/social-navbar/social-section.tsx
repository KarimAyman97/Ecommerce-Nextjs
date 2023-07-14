import { FaceBookIcon } from "../../icons/social/facebook-icon";
import { InstagramIcon } from "../../icons/social/instagram-icon";
import { WhatsAppIcon } from "../../icons/social/whatsapp-icon";

export const SocialSection: React.FC = () => {
  return (
    <div className="flex justify-between align-center  gap-3 mx-auto">
      <FaceBookIcon />
      <InstagramIcon />
      <WhatsAppIcon />
    </div>
  );
};
