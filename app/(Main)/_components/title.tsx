"use client";

import { Doc } from "@/convex/_generated/dataModel";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface TitleProps {
    intialData: Doc<"documents">;
};

export const Title = ({
    intialData
}: TitleProps) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const update = useMutation(api.documents.update);

    const [title, setTitle] = useState(intialData.title || "Untitled");
    const [isEditing, setIsEditing] = useState(false);

    const enableInput = () => {
        setTitle(intialData.title);
        setIsEditing(true);
        setTimeout(() => {
            inputRef.current?.focus();
            inputRef.current?.setSelectionRange(0, inputRef.current.value.length)
        }, 0);
    };

    const disableInput = () => {
        setIsEditing(false);
    };

    const onChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setTitle(event.target.value);
        update({
            id: intialData._id,
            title: event.target.value || "Untitled"
        });

    };

    const onKeydown = (
        event: React.KeyboardEvent<HTMLInputElement>
    ) => {
        if (event.key === "Enter") {
            disableInput();
        }
    };






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
                    ref ={inputRef}
                    onClick={enableInput}
                    onBlur={disableInput}
                    onChange={onChange}
                    onKeyDown={onKeydown}
                    value={title}
                        className="h-7 px-2 focus-visible:ring-transparent" />
                )
                : (
                    <Button
                        onClick={enableInput}
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


Title.Skeleton = function TitleSkeleton() {
    return (
        <Skeleton className="h-9 w-20 rounded-md" />
    );
};
