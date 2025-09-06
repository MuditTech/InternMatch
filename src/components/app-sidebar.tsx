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
  PlusCircle,
  LogOut,
  KeyRound,
} from "lucide-react";

export function AppSidebar() {
  const pathname = usePathname();

  const menuItems = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/profile", label: "My Profile", icon: User },
    { href: "/internships", label: "Internships", icon: Briefcase },
    { href: "/matches", label: "My Matches", icon: Sparkles },
    { href: "/messages", label: "Messages", icon: MessageSquare },
    { href: "/internships/new", label: "Post Internship", icon: PlusCircle },
    { href: "/apikeys", label: "API Keys", icon: KeyRound },
  ];

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
                isActive={pathname.startsWith(item.href) && (item.href !== '/internships' || pathname === '/internships')}
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
                <SidebarMenuButton tooltip={{ children: "Logout" }}>
                    <LogOut />
                    <span>Logout</span>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
