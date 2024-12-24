"use client";

import { Doc } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface TitleProps {
    intialData: Doc<"documents">;
};

export const Title = ({
    intialData
}: TitleProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const update = useMutation(api.documents.update);

    const [title, setTitle]  = useState(intialData.title || "Undefined");
    const [isEditing, setIsEditing] = useState(false);

    const enableInput = ()=>{
        setTitle(intialData.title);
        setIsEditing(true);
        setTimeout(()=>{
            inputRef.current?.focus();
            inputRef.current?.setSelectionRange(0, inputRef.current.value.length)
        }, 0);
    };

const disableInput = () =>{
    setIsEditing(false);
};

const onChange = (
    event: React.ChangeEvent<HTMLInputElement>
)





    return (
        <div className="flex items-center gap-x-1">
            {!!intialData.icon && (
                <p>
                    {intialData.icon}
                </p>
            )
            }

            {isEditing ?
                (
                    <Input
                        className="h-7 px-2 focus-visible:ring-transparent" />
                )
                : (
                    <Button
                        onClick={() => { }}
                        variant="ghost"
                        size="sm"
                        className="font-normal h-auto p-1"
                    >

                        <span className=" truncate">
                            {
                                intialData?.title
                            }
                        </span>




                    </Button>
                )
            }
        </div>
    )
}
