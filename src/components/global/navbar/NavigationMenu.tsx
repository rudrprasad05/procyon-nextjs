"use client";

import Link from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import ThemeSwitcherOneClick from "@/components/theme/ThemeSwitcherOneClick";

const links = [
  {
    title: "Home",
    description: "Home page",
    href: "/",
  },
  {
    title: "Websites",
    description: "Get a website",
    href: "/web",
  },
  {
    title: "Emails",
    description: "Get an Email",
    href: "/emails",
  },
  {
    title: "Systems",
    description: "get a custom system",
    href: "/custom",
  },
  {
    title: "Apps",
    description: "get a custom system",
    href: "/apps",
  },
  {
    title: "Contact",
    description: "how to contact us",
    href: "/contact",
  },
];

export function NavigationMenuDemo() {
  return (
    <NavigationMenu className="">
      <NavigationMenuList className="gap-10 ">
        {links.map((link) => (
          <NavigationMenuItem className="">
            <Link prefetch href={link.href} legacyBehavior passHref>
              <NavigationMenuLink className="text-sm">
                {link.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
        {/* <ThemeSwitcherOneClick seeName={false} /> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
