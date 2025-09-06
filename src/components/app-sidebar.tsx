
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Briefcase,
  LayoutDashboard,
  User,
  Sparkles,
  MessageSquare,
  LogOut,
  PlusCircle,
} from "lucide-react";
import { useLanguage } from "./language-provider";

// In a real app, you'd get this from your auth context
const userType = "candidate"; // or "company"

export function AppSidebar() {
  const { t } = useLanguage();
  const pathname = usePathname();

  const candidateMenuItems = [
    { href: "/dashboard", label: t.dashboard, icon: LayoutDashboard },
    { href: "/profile", label: t.myProfile, icon: User },
    { href: "/internships", label: t.internships, icon: Briefcase },
    { href: "/matches", label: t.myMatches, icon: Sparkles },
    { href: "/messages", label: t.messages, icon: MessageSquare },
  ];
  
  const companyMenuItems = [
      { href: "/dashboard", label: t.dashboard, icon: LayoutDashboard },
      { href: "/internships/new", label: t.myInternshipListing, icon: PlusCircle },
      { href: "/internships", label: t.studentProfiles, icon: Briefcase },
      { href: "/matches", label: t.myMatches, icon: Sparkles },
      { href: "/messages", label: t.messages, icon: MessageSquare },
  ];

  const menuItems = userType === 'company' ? companyMenuItems : candidateMenuItems;


  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2">
           <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <Briefcase className="h-6 w-6" />
            <span className="group-data-[collapsible=icon]:hidden">InternMatch AI</span>
          </Link>
          <div className="flex-grow" />
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/')}
                tooltip={{ children: item.label }}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton tooltip={{ children: t.logout }}>
                    <LogOut />
                    <span>{t.logout}</span>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
