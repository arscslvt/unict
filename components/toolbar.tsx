"use client";

import React from "react";

import PictogramImage from "@/assets/brand/picto.png";
import Image from "next/image";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { BellIcon, ChevronRightIcon, ExitIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

export default function Toolbar() {
  return (
    <div className="h-16 px-4 md:px-6 flex items-center gap-6 bg-background">
      <div className="">
        <div className="flex items-center">
          <Image
            src={PictogramImage}
            alt="Logo dell'Università di Catania"
            width={50}
            height={50}
            quality={80}
            priority
          />
          <span className="pr-2 text-muted-foreground scale-105 font-light">
            /
          </span>
          <h1 className="font-medium">Studente</h1>
        </div>
      </div>

      <div className=" flex-1 hidden sm:flex">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Blog
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Avvisi
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Assistenza
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex-1 flex justify-end items-center gap-3">
        <Button size={"icon"} variant={"outline"}>
          <BellIcon />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none">
            <Avatar className="border w-9 h-9 aspect-square">
              <AvatarImage />
              <AvatarFallback>S</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end" className="min-w-64">
            <DropdownMenuItem>
              <div className="flex flex-1 items-center gap-3">
                <Avatar className="w-14 h-14 border">
                  <AvatarImage />
                  <AvatarFallback>S</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">Salvatore Aresco</h3>
                  <p className="text-muted-foreground">Informatica L-31</p>
                </div>
                <div className="flex-1 flex justify-end">
                  <ChevronRightIcon width={16} height={16} />
                </div>
              </div>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <DropdownMenuItem>Cronologia azioni</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>Lingua</DropdownMenuSubTrigger>

              <DropdownMenuPortal>
                <DropdownMenuSubContent>
                  <DropdownMenuCheckboxItem
                    checked={true}
                    //   onCheckedChange={setShowPanel}
                  >
                    Italiano <span className="ml-auto">🇮🇹</span>
                  </DropdownMenuCheckboxItem>
                  <DropdownMenuCheckboxItem
                    checked={false}
                    //   onCheckedChange={setShowPanel}
                  >
                    Inglese <span className="ml-auto">🇬🇧</span>
                  </DropdownMenuCheckboxItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>

            <DropdownMenuSeparator />
            <DropdownMenuItem>Impostazioni</DropdownMenuItem>
            <DropdownMenuItem className="text-red-500 justify-between">
              Esci
              <ExitIcon />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
