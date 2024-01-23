import React from 'react'
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
const Drop = (props) => {
  return (
    <div><DropdownMenu>
    <DropdownMenuTrigger className=' text-xl' asChild>
        <Button className="bg-black">{props.title}</Button>
      </DropdownMenuTrigger>
    <DropdownMenuContent className=" px-5 py-2">
      <DropdownMenuLabel className="text-black">My Account</DropdownMenuLabel>
      <DropdownMenuSeparator className="bg-black" />
      <DropdownMenuItem className="">Profile</DropdownMenuItem>
      <DropdownMenuItem>Billing</DropdownMenuItem>
      <DropdownMenuItem>Team</DropdownMenuItem>
      <DropdownMenuItem>Subscription</DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu></div>
  )
}

export default Drop