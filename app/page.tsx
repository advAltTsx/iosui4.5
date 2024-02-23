"use client";

import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {/* <Drawer shouldScaleBackground>
      <DrawerTrigger asChild>
        <Button variant={'link'}><h1 className="scroll-m-30 underline p-6 text-2xl font-extrabold tracking-tight lg:text-5xl">
      SA-B?
    </h1></Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="h-[70vh]">
          <DrawerHeader >
            <div className='h-auto w-full flex items-center justify-start'>
            <DrawerClose asChild>
              <Button variant="ghost"><h1 className=' text-blue-600'>Cancel</h1></Button>
            </DrawerClose>
            </div>
            <div className='flex flex-col items-center justify-center text-center h-full my-10'>
            <DrawerTitle>Still here</DrawerTitle>
            <DrawerDescription>How are you?</DrawerDescription>
            <br />
            <blockquote className="mt-6">{"Tbh, I fear talking to non-boys."}</blockquote>
            <blockquote className="mb-6">{"Also, I need your help."}</blockquote>
            <br />
            <DrawerTitle>{"I hope you understand"}</DrawerTitle>
            <DrawerDescription>{"Let's meet IRL"}</DrawerDescription>

            </div>
          </DrawerHeader>
          
          <DrawerFooter>
            
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer> */}

      
            <div className="h-full w-full flex items-center justify-center text-center rounded-2xl">
              <Drawer shouldScaleBackground>
                <DrawerTrigger asChild>
                  <Button variant={'link'}>
                    <h1 className="scroll-m-30 underline p-6 text-2xl font-extrabold tracking-tight lg:text-5xl">
                      {'You looked sad?'}
                    </h1>
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className=" h-auto">
                    <DrawerHeader>
                      <div className="h-auto w-full flex items-center justify-start">
                        <DrawerClose asChild>
                          <Button variant={'ghost'}>
                            <h1 className=" text-blue-600">Okay</h1>
                          </Button>
                        </DrawerClose>
                      </div>
                      <div className="flex flex-col justify-center text-center h-full py-10 px-8 pt-16">
           <DrawerTitle>All the best, friends.</DrawerTitle>
           <br/>
                        <DrawerDescription>{"Do it one more time and... "}</DrawerDescription>
                      <DrawerDescription>{"Don't think like I never talked you in 2 years and nuisance. And it's coming to an end. Inspite of that, it's my pleasure to meet you. I'd be talking to you right from the next time with granted permissions. I can't do anything about being from a strick family. Besides I love my family more than anyone else."}</DrawerDescription>
                      </div>
                    </DrawerHeader>

                    <DrawerFooter></DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          
    </main>
  );
}
