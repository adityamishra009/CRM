import {
  LayoutDashboard,
  Users,
  UserCheck,
  User,
  FileText,
} from "lucide-react";

export const sidebarMenu = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "All Leads",
    path: "/leads",
    icon: Users,
  },
  {
    name: "All Employee",
    path: "/employees",
    icon: UserCheck,
  },
  {
    name: "All Customer",
    path: "/customers",
    icon: User,
  },
  {
    name: "Tax Invoice",
    path: "/invoice",
    icon: FileText,
  },
];