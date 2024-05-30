"use client";
import { useRef, useState } from "react";
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useLogoutQuery } from "@/redux/features/auth/authApi";
// import { signOut } from "next-auth/react";
// import UserAvatarOnly from "./UserAvatarOnly";
// import { ThemeToggle } from "./ThemeToggle";
import Image from "next/image";
import { AiOutlineUser } from "react-icons/ai";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import { useAppSelector ,useAppDispatch} from "@/redux/hooks";
import { userLoggedOut } from "@/redux/features/auth/authSlice";
import { persistor } from "@/redux/store";

// <Avatar className="rounded-full p-4 h-8 w-8 border border-secondary-color">  <AvatarFallback> pfp</AvatarFallback>
export function UserProfile() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.persistedReducer.auth.user);
  const [logout, setLogout] = useState(false);
  const {} = useLogoutQuery(undefined, {
    skip: !logout ? true : false,
  });
 function onLogout() {
    // setLogout(true);
    dispatch(userLoggedOut());
    persistor.purge();
    // await signOut();
    router.push("/")
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {user?.profilePhoto ? (
          <Image
            className={`w-11 h-11 cursor-pointer relative rounded-full object-cover`}
            width={50}
            height={50}
            src={user.profilePhoto}
            alt="pfp"
            referrerPolicy="no-referrer"
          />
        ) : (
          <span className="cursor-pointer">
            <AiOutlineUser
              className={`w-8 h-8 mx-2 mr-1 bg-gray-300 cursor-pointer text-black border-secondary-color border rounded-full p-1`}
            />
          </span>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-white text-text-theme-color border-slate-200 dark:border-slate-600">
        <DropdownMenuLabel>
          {user?.name || (
            <p className="text-sm font-light text-text-theme-color">
              No username
            </p>
          )}
        </DropdownMenuLabel>
        {/*remember to remove dark borders for white theme */}
        <DropdownMenuSeparator className=" bg-slate-600 border-slate-600" />
        <DropdownMenuItem className="focus:bg-primary-color-foreground focus:text-text-theme-color">
          <User className="mr-2 h-4 w-4" />
          <Link href="/profile">Profile</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="focus:bg-primary-color-foreground focus:text-text-theme-color">
          <CreditCard className="mr-2 h-4 w-4" />
          <Link href="/store">Store</Link>
        </DropdownMenuItem>

        <DropdownMenuItem className="focus:bg-primary-color-foreground focus:text-text-theme-color">
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => onLogout()}
          className="focus:bg-primary-color-foreground focus:text-red-500"
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
