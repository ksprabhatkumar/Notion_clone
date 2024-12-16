"use client";
import {  SignInButton} from "@clerk/clerk-react";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { Sign } from "crypto";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


export const Header = () => {

    const { isAuthenticated, isLoading } = useConvexAuth();

    return (<div className="max-w-3xl space-y-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
            Your Indeas,Documents & Notes. Unified.
            Welcome to <span className="underline">Jotion</span>
        </h1>
        <h3 className="text-base sm:text-xl ms:text-2xl font-medium">
            Jotion is connected workplace where<br />
            Better, Faster work happens.

        </h3>

        {isLoading && (
            <div className="w-full flex items-center justify-center">

                <Spinner size="lg" />
            </div>
        )}

        {isAuthenticated && !isLoading && (


            <Button asChild>
                <Link href="/document">

                    Get Started
                    <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
            </Button>
        )}
        {!isAuthenticated && !isLoading && (
            <SignInButton mode="modal">
                <Button  >
                    Get Jotion Free
                    <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
            </SignInButton>)

        }


    </div>);
}

