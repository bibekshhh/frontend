import { socialIcons } from "@/config/constants";
import { TUser, TUserDeep } from "@/types/auth";
import Link from "next/link";
import { UserIcon } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import UserFallbackImg from "/public/images/user.png";
import { Text } from "../ui/text";
import UserImg from "/public/images/user.png";
import fbIcon from "/public/icons/facebook-bw.png";
import WhatsAppIcon from "/public/icons/whatsApp-bw.png";
import IgImage from "/public/icons/instagram-bw.png";
export const ProfileCard = ({ user }: { user: TUserDeep | null }) => {
  return (
    <div className="relative h-[600px] w-full overflow-hidden rounded-xl bg-black text-white shadow-lg sm:min-w-[300px] md:aspect-square md:h-auto md:min-h-[580px] md:w-auto md:max-w-sm">
      <div className="relative h-full w-full">
        {user?.profilePicture?.url ? (
          <Image
            src={user?.profilePicture?.url || UserFallbackImg}
            width={user?.profilePicture?.width || 400}
            height={user?.profilePicture?.height || 400}
            alt="Profile"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="grid h-full w-full place-items-center bg-gray-600">
            <UserIcon size={100} />
          </div>
        )}
        <div className="absolute inset-0 h-full w-full bg-black [clip-path:polygon(50%_70%,_100%_50%,_100%_100%,_0_100%,_0%_50%)]"></div>
      </div>
      <div className="absolute left-0 top-2/3 z-10 w-full">
        <div className="p-1 text-center md:p-6">
          <Text
            variant="text-xl"
            className="mb-2 text-2xl font-bold capitalize"
          >
            {user?.username}
          </Text>
          <p className="mb-4 text-primary">{user?.email}</p>
          <div className="mb-6 flex justify-center space-x-4">
            <aside className="flex items-center justify-center gap-x-2">
              {user?.about?.facebook && (
                <Link href={user?.about?.facebook} target="_blank">
                  <Image
                    src={fbIcon}
                    alt={`facebook-Icon`}
                    className="h-auto w-12 contrast-0"
                  />
                </Link>
              )}
              {user?.about?.instagram && (
                <Link href={user?.about?.instagram} target="_blank">
                  <Image
                    src={IgImage}
                    alt={`instagram-Icon`}
                    className="h-auto w-12 contrast-0"
                  />
                </Link>
              )}
              {user?.about?.whatsapp && (
                <Link href={user?.about?.whatsapp} target="_blank">
                  <Image
                    src={WhatsAppIcon}
                    alt={`whatsapp-Icon`}
                    className="h-auto w-12 contrast-0"
                  />
                </Link>
              )}
              {/*
              {socialIcons.map(({ href, icon, name }) => (
                <Link key={`social-link-${name}`} href={href} target="_blank">
                  <Image
                    key={`social-link-${name}`}
                    src={icon}
                    alt={`${name}-Icon`}
                    className="h-auto w-12 contrast-0"
                  />
                </Link>
              ))}
                */}
            </aside>
          </div>
          <div className="flex justify-between uppercase">
            {user?.userType === "merchant" && (
              <Button className="rounded-md bg-transparent px-2 py-1 uppercase md:px-4 md:py-2">
                Download CV
              </Button>
            )}
            <Button className="rounded-md bg-transparent px-4 py-2 uppercase text-white">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const LegacyProfileCard = ({ user }: { user: TUser | null }) => {
  return (
    <div className="relative h-[600px] w-full overflow-hidden rounded-xl bg-black text-white shadow-lg sm:min-w-[300px] md:aspect-square md:h-auto md:w-auto md:max-w-sm">
      <div className="relative h-full w-full">
        <Image
          src={UserImg}
          alt="Profile"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 h-full w-full bg-black [clip-path:polygon(50%_70%,_100%_50%,_100%_100%,_0_100%,_0%_50%)]"></div>
      </div>
      <div className="absolute left-0 top-2/3 z-10 w-full">
        <div className="p-1 text-center md:p-6">
          <Text
            variant="text-xl"
            className="mb-2 text-2xl font-bold capitalize"
          >
            {user?.username}
          </Text>
          <p className="mb-4 text-primary">{user?.email}</p>
          <div className="mb-6 flex justify-center space-x-4">
            <aside className="flex items-center justify-center gap-x-2">
              {socialIcons.map(({ href, icon, name }) => (
                <Link key={`social-link-${name}`} href={href} target="_blank">
                  <Image
                    key={`social-link-${name}`}
                    src={icon}
                    alt={`${name}-Icon`}
                    className="h-auto w-12 contrast-0"
                  />
                </Link>
              ))}
            </aside>
          </div>
          <div className="flex justify-between uppercase">
            <Button className="rounded-md bg-transparent px-2 py-1 uppercase md:px-4 md:py-2">
              Download CV
            </Button>
            <Button className="rounded-md bg-transparent px-4 py-2 uppercase text-white">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
